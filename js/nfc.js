import { bloquesNormales, bloquesConstructores } from "./bloques.js";

// Se carga solo en modo Aprender
let manejarGuiado = null;

async function cargarGuiado() {
  try {
    const mod = await import("./motor_guiado.js");
    manejarGuiado = mod.manejarEscaneo;
  } catch (e) {
    console.log("motor_guiado no se cargó (modo explorar/probar). OK");
  }
}

/* =====================================================
      SISTEMA NFC — Listener global único
=====================================================*/

let lectorNFC = null;      // instancia única
let listenerSet = false;   // evita duplicados
let callbackActual = null; // callback (Explorar / Probar)

// =====================================================
// ESTADO DE CONSTRUCTORES (por ahora solo exp)
// (preparado para agregar más después)
// =====================================================
let constructorActivo = null;
/*
  Ejemplo:
  {
    key: "exp",
    paso: 1 | 2,
    base: infoBloque
  }
*/

export async function iniciarLecturaNFC(callback) {
  await cargarGuiado();

  // Guardamos el callback para usarlo también dentro del listener único
  callbackActual = callback || null;

  console.log(">>> Iniciando lector NFC (versión listener único)...");

  if (!("NDEFReader" in window)) {
    alert("Este dispositivo NO soporta Web NFC.");
    return;
  }

  // Crear la instancia solo 1 vez
  if (!lectorNFC) lectorNFC = new NDEFReader();

  try {
    await lectorNFC.scan();
    console.log("✓ NFC listo. Acerca un bloque...");
  } catch (error) {
    console.error("ERROR iniciando escaneo NFC:", error);

    if (error.name === "NotAllowedError") {
      alert("El navegador bloqueó el permiso NFC. Activa NFC y reinicia la app.");
    }

    return;
  }

  /*  LISTENER GLOBAL (solo 1 vez en toda la app) */
  if (!listenerSet) {
    lectorNFC.onreading = (event) => {
      console.log(">>> TAG DETECTADO");

      const record = event.message.records[0];
      const decoder = new TextDecoder();
      let key = "";

      try {
        key = decoder.decode(record.data);
      } catch (err) {
        console.error("No se pudo decodificar el TAG:", err);
        return;
      }

      // Enrutamos todo a un mismo procesador
      procesarBloqueNFC(key);
    };

    listenerSet = true;
  }
}

/* =====================================================
      PROCESAR BLOQUE NFC (ÚNICO PUNTO DE ENTRADA)
      - Aplica lógica de constructores (exp)
      - Luego manda a modo guiado y/o callback
=====================================================*/
function procesarBloqueNFC(key) {
  const info = obtenerInfoBloque(key);

  // 1) Motor de constructores (solo exp por ahora)
  const infoProcesada = procesarConstructores(info);

  // Si el constructor decide "consumir" y no emitir nada:
  if (!infoProcesada) return;

  // 2) Modo aprender
  if (manejarGuiado) manejarGuiado(infoProcesada);

  // 3) Callback opcional (modo Probar / Explorar)
  if (callbackActual) callbackActual(infoProcesada);
}

/* =====================================================
      MOTOR DE CONSTRUCTORES
      - Por ahora: SOLO exp
      - Otros constructores pasarán como normales (a futuro)
=====================================================*/
function procesarConstructores(info) {

  // ==========================
  // Si no hay constructor activo
  // ==========================
  if (!constructorActivo) {

    // SOLO implementamos exp por ahora
    if (info.tipo === "constructor" && info.key === "exp") {
      constructorActivo = { key: "exp", paso: 1, base: null };

      // 🔥 Abrir popup (NO mandamos nada al callback)
      emitirConstructorUI({
        action: "open",
        key: "exp",
        step: 1,
        title: "Constructor: Exponente",
        message: "Escanea cualquier bloque para la BASE.",
        previewHTML: `<span style="font-weight:700;"> </span>`
      });

      return null; // ✅ evita que cambie el área del bloque escaneado
    }

    // Otros bloques (incluye otros constructores aún no implementados)
    return info;
  }

  // ==========================
  // Constructor activo: exp
  // ==========================
  if (constructorActivo.key === "exp") {

    // Paso 1: capturar BASE (cualquier bloque)
    if (constructorActivo.paso === 1) {
      constructorActivo.base = info;
      constructorActivo.paso = 2;

      const baseHTML = simboloComoHTML(info);

      //  Actualizar popup (NO mandamos nada al callback)
      emitirConstructorUI({
        action: "update",
        key: "exp",
        step: 2,
        title: "Constructor: Exponente",
        message: "Base guardada. Ahora escanea cualquier bloque para el EXPONENTE.",
        previewHTML: `${baseHTML}<sup style="opacity:.45;">□</sup>`
      });

      return null; // ✅ evita que cambie el área del bloque escaneado
    }

    // Paso 2: capturar EXPONENTE y emitir resultado final
    if (constructorActivo.paso === 2) {
      const baseInfo = constructorActivo.base;
      const baseHTML = simboloComoHTML(baseInfo);
      const expHTML  = simboloComoHTML(info);

      // Cerramos constructor
      constructorActivo = null;

      //  Cerrar popup
      emitirConstructorUI({ action: "close", key: "exp" });

      //  Ahora SÍ devolvemos el bloque final para que el UI normal se actualice UNA SOLA VEZ
      return {
        key: `exp(${simboloComoTexto(baseInfo)},${simboloComoTexto(info)})`,
        tipo: "normal",
        datos: {
          tipo: "constructor",
          simbolo: `${baseHTML}<sup>${expHTML}</sup>`,
          descripcion: `Potencia construida: (${simboloComoTexto(baseInfo)})^(${simboloComoTexto(info)})`,
          compuesto: {
            operador: "exp",
            base: baseInfo,
            exponente: info
          }
        }
      };
    }
  }

  return info;
}


/* Helpers: permiten que el símbolo pueda ser texto o HTML (como <sup>) */
function simboloComoHTML(info) {
  return String(info?.datos?.simbolo ?? info?.key ?? "");
}

function simboloComoTexto(info) {
  return String(info?.datos?.simbolo ?? info?.key ?? "").replace(/<[^>]*>/g, "");
}

//cambio 
function emitirConstructorUI(detail) {
  window.dispatchEvent(new CustomEvent("mb:constructor", { detail }));
}


/* =====================================================
      OBTENER INFORMACIÓN DEL BLOQUE
=====================================================*/
function obtenerInfoBloque(key) {

  if (bloquesNormales[key]) {
    return {
      key,
      tipo: "normal",
      datos: bloquesNormales[key]
    };
  }

  if (bloquesConstructores[key]) {
    return {
      key,
      tipo: "constructor",
      datos: bloquesConstructores[key]
    };
  }

  return {
    key,
    tipo: "desconocido",
    datos: { simbolo: key }
  };
}

/* =====================================================
      SIMULADOR (opcional)
      Si tú ya lo tienes en otro archivo, puedes borrar esto.
=====================================================*/
window.simularBloque = function (keyBloque) {
  if (!keyBloque) return;
  console.log("🧪 Simulación NFC:", keyBloque);
  procesarBloqueNFC(keyBloque);
};




