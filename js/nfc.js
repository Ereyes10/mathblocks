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

let lectorNFC = null; // instancia única
let listenerSet = false; // evita duplicados
let callbackActual = null; // callback (Explorar / Probar)

// =====================================================
// ESTADO DE CONSTRUCTORES
// Implementados: exp, frac, doble, raiz
// =====================================================
let constructorActivo = null;
/*
  Ejemplos:
  {
    key: "exp",
    paso: 1 | 2,
    base: infoBloque
  }

  {
    key: "frac",
    paso: 1 | 2,
    numerador: infoBloque
  }
  {
    key: "doble",
    paso: 1 | 2,
    decena: infoBloque
  }
  {
    key: "raiz",
    paso: 1,
    radicando: infoBloque
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
      alert(
        "El navegador bloqueó el permiso NFC. Activa NFC y reinicia la app.",
      );
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
      - Implementados: exp, frac, doble, raiz
      - Otros constructores pasarán como normales (a futuro)
=====================================================*/
function procesarConstructores(info) {
  // ==========================
  // Si no hay constructor activo
  // ==========================
  if (!constructorActivo) {
    // ===== Constructor EXP =====
    if (info.tipo === "constructor" && info.key === "exp") {
      constructorActivo = { key: "exp", paso: 1, base: null };

      emitirConstructorUI({
        action: "open",
        key: "exp",
        step: 1,
        title: "Constructor: Exponente",
        message: "Escanea cualquier bloque para la BASE.",
        previewHTML: `<span style="font-weight:700;"> </span>`,
      });

      return null;
    }

    // ===== Constructor FRAC =====
    if (info.tipo === "constructor" && info.key === "frac") {
      constructorActivo = { key: "frac", paso: 1, numerador: null };

      emitirConstructorUI({
        action: "open",
        key: "frac",
        step: 1,
        title: "Constructor: Fracción",
        message: "Escanea cualquier bloque para el NUMERADOR.",
        previewHTML: `
          <div style="display:inline-flex; flex-direction:column; align-items:center; line-height:1.1;">
            <span style="min-width:24px; text-align:center; opacity:.45;">□</span>
            <span style="display:block; width:32px; border-top:2px solid currentColor; margin:4px 0;"></span>
            <span style="min-width:24px; text-align:center; opacity:.25;">□</span>
          </div>
        `,
      });

      return null;
    }

        // ===== Constructor DOBLE =====
    if (info.tipo === "constructor" && info.key === "doble") {
      constructorActivo = { key: "doble", paso: 1, decena: null };

      emitirConstructorUI({
        action: "open",
        key: "doble",
        step: 1,
        title: "Constructor: Número de dos cifras",
        message: "Escanea un bloque numérico para la DECENA.",
        previewHTML: `
          <div style="display:inline-flex; gap:6px; align-items:center; font-weight:700; font-size:1.2em;">
            <span style="opacity:.45;">□</span>
            <span style="opacity:.25;">□</span>
          </div>
        `
      });

      return null;
    }

        // ===== Constructor RAIZ =====
    if (info.tipo === "constructor" && info.key === "raiz") {
      constructorActivo = { key: "raiz", paso: 1, radicando: null };

      emitirConstructorUI({
        action: "open",
        key: "raiz",
        step: 1,
        title: "Constructor: Raíz",
        message: "Escanea cualquier bloque para el RADICANDO.",
        previewHTML: `
          <span style="display:inline-flex; align-items:flex-end; font-weight:700; font-size:1.3em;">
            <span style="margin-right:4px;">√</span>
            <span style="border-top:2px solid currentColor; padding:2px 8px 0 8px; opacity:.45;">□</span>
          </span>
        `
      });

      return null;
    }

    // Otros bloques
    return info;
  }

  // ==========================
  // Constructor activo: exp
  // ==========================
  if (constructorActivo.key === "exp") {
    // Paso 1: capturar BASE
    if (constructorActivo.paso === 1) {
      constructorActivo.base = info;
      constructorActivo.paso = 2;

      const baseHTML = simboloComoHTML(info);

      emitirConstructorUI({
        action: "update",
        key: "exp",
        step: 2,
        title: "Constructor: Exponente",
        message:
          "Base guardada. Ahora escanea cualquier bloque para el EXPONENTE.",
        previewHTML: `${baseHTML}<sup style="opacity:.45;">□</sup>`,
      });

      return null;
    }

    // Paso 2: capturar EXPONENTE
    if (constructorActivo.paso === 2) {
      const baseInfo = constructorActivo.base;
      const baseHTML = simboloComoHTML(baseInfo);
      const expHTML = simboloComoHTML(info);

      constructorActivo = null;

      emitirConstructorUI({ action: "close", key: "exp" });

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
            exponente: info,
          },
        },
      };
    }
  }

  // ==========================
  // Constructor activo: frac
  // ==========================
  if (constructorActivo.key === "frac") {
    // Paso 1: capturar NUMERADOR
    if (constructorActivo.paso === 1) {
      constructorActivo.numerador = info;
      constructorActivo.paso = 2;

      const numHTML = simboloComoHTML(info);

      emitirConstructorUI({
        action: "update",
        key: "frac",
        step: 2,
        title: "Constructor: Fracción",
        message:
          "Numerador guardado. Ahora escanea cualquier bloque para el DENOMINADOR.",
        previewHTML: `
          <div style="display:inline-flex; flex-direction:column; align-items:center; line-height:1.1;">
            <span style="min-width:24px; text-align:center;">${numHTML}</span>
            <span style="display:block; width:32px; border-top:2px solid currentColor; margin:4px 0;"></span>
            <span style="min-width:24px; text-align:center; opacity:.45;">□</span>
          </div>
        `,
      });

      return null;
    }

    // Paso 2: capturar DENOMINADOR y emitir bloque final
    if (constructorActivo.paso === 2) {
      const numeradorInfo = constructorActivo.numerador;
      const denominadorInfo = info;

      const numHTML = simboloComoHTML(numeradorInfo);
      const denHTML = simboloComoHTML(denominadorInfo);

      constructorActivo = null;

      emitirConstructorUI({ action: "close", key: "frac" });

      return {
        key: `frac(${simboloComoTexto(numeradorInfo)},${simboloComoTexto(denominadorInfo)})`,
        tipo: "normal",
        datos: {
          tipo: "constructor",
          simbolo: crearFraccionHTML(numHTML, denHTML),
          descripcion: `Fracción construida: (${simboloComoTexto(numeradorInfo)}) / (${simboloComoTexto(denominadorInfo)})`,
          compuesto: {
            operador: "frac",
            numerador: numeradorInfo,
            denominador: denominadorInfo,
          },
        },
      };
    }
  }

    // ==========================
  // Constructor activo: doble
  // ==========================
  if (constructorActivo.key === "doble") {

    // Paso 1: capturar DECENA
    if (constructorActivo.paso === 1) {

      // Solo se permiten números
      if (info.datos?.tipo !== "numero") {
        emitirConstructorUI({
          action: "update",
          key: "doble",
          step: 1,
          title: "Constructor: Número de dos cifras",
          message: "Bloque no válido. Escanea un bloque NUMÉRICO para la DECENA.",
          previewHTML: `
            <div style="display:inline-flex; gap:6px; align-items:center; font-weight:700; font-size:1.2em;">
              <span style="opacity:.45;">□</span>
              <span style="opacity:.25;">□</span>
            </div>
          `
        });

        return null;
      }

      constructorActivo.decena = info;
      constructorActivo.paso = 2;

      const decenaHTML = simboloComoHTML(info);

      emitirConstructorUI({
        action: "update",
        key: "doble",
        step: 2,
        title: "Constructor: Número de dos cifras",
        message: "Decena guardada. Ahora escanea un bloque numérico para la UNIDAD.",
        previewHTML: `
          <div style="display:inline-flex; gap:6px; align-items:center; font-weight:700; font-size:1.2em;">
            <span>${decenaHTML}</span>
            <span style="opacity:.45;">□</span>
          </div>
        `
      });

      return null;
    }

    // Paso 2: capturar UNIDAD y emitir resultado
    if (constructorActivo.paso === 2) {

      // Solo se permiten números
      if (info.datos?.tipo !== "numero") {
        const decenaHTML = simboloComoHTML(constructorActivo.decena);

        emitirConstructorUI({
          action: "update",
          key: "doble",
          step: 2,
          title: "Constructor: Número de dos cifras",
          message: "Bloque no válido. Escanea un bloque NUMÉRICO para la UNIDAD.",
          previewHTML: `
            <div style="display:inline-flex; gap:6px; align-items:center; font-weight:700; font-size:1.2em;">
              <span>${decenaHTML}</span>
              <span style="opacity:.45;">□</span>
            </div>
          `
        });

        return null;
      }

      const decenaInfo = constructorActivo.decena;
      const unidadInfo = info;

      const textoDecena = simboloComoTexto(decenaInfo);
      const textoUnidad = simboloComoTexto(unidadInfo);
      const numeroFinal = `${textoDecena}${textoUnidad}`;

      constructorActivo = null;

      emitirConstructorUI({ action: "close", key: "doble" });

      return {
        key: `doble(${textoDecena},${textoUnidad})`,
        tipo: "normal",
        datos: {
          tipo: "constructor",
          simbolo: numeroFinal,
          descripcion: `Número de dos cifras construido: ${numeroFinal}`,
          compuesto: {
            operador: "doble",
            decena: decenaInfo,
            unidad: unidadInfo,
            valor: Number(numeroFinal)
          }
        }
      };
    }
  }

    // ==========================
  // Constructor activo: raiz
  // ==========================
  if (constructorActivo.key === "raiz") {

    // Paso 1: capturar RADICANDO y emitir resultado final
    if (constructorActivo.paso === 1) {
      const radicandoInfo = info;
      const radicandoHTML = simboloComoHTML(radicandoInfo);

      constructorActivo = null;

      emitirConstructorUI({ action: "close", key: "raiz" });

      return {
        key: `raiz(${simboloComoTexto(radicandoInfo)})`,
        tipo: "normal",
        datos: {
          tipo: "constructor",
          simbolo: crearRaizHTML(radicandoHTML),
          descripcion: `Raíz construida: √(${simboloComoTexto(radicandoInfo)})`,
          compuesto: {
            operador: "raiz",
            radicando: radicandoInfo
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
  return String(info?.datos?.simbolo ?? info?.key ?? "").replace(
    /<[^>]*>/g,
    "",
  );
}

function crearFraccionHTML(numeradorHTML, denominadorHTML) {
  return `
    <span style="display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle; line-height:1;">
      <span style="padding:0 4px;">${numeradorHTML}</span>
      <span style="display:block; width:100%; border-top:2px solid currentColor; margin:2px 0;"></span>
      <span style="padding:0 4px;">${denominadorHTML}</span>
    </span>
  `;
}

function crearRaizHTML(radicandoHTML) {
  return `
    <span style="display:inline-flex; align-items:flex-end; vertical-align:middle; line-height:1;">
      <span style="font-size:1.2em; margin-right:2px;">√</span>
      <span style="border-top:2px solid currentColor; padding:2px 4px 0 4px;">
        ${radicandoHTML}
      </span>
    </span>
  `;
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
      datos: bloquesNormales[key],
    };
  }

  if (bloquesConstructores[key]) {
    return {
      key,
      tipo: "constructor",
      datos: bloquesConstructores[key],
    };
  }

  return {
    key,
    tipo: "desconocido",
    datos: { simbolo: key },
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
