/* ============================================
      MODAL UNIVERSAL DE INSTRUCCIONES
=============================================== */

export function mostrarInstrucciones(tipo) {
    const modal = document.getElementById("modal-instrucciones");
    const titulo = document.getElementById("inst-title");
    const texto = document.getElementById("inst-text");

    let contenido = {
        inicio: {
            titulo: "Bienvenido a MathBlocks",
            texto: `Esta app funciona con bloques NFC.\n\n
• Elige Aprender, Probar o Explorar.\n
• Escanea los bloques cuando se te indique.\n
• Mantén el dispositivo firme.\n
• Evita acercar varios bloques a la vez.\n`
        },
        aprender: {
            titulo: "Modo Aprender",
            texto: `Aquí resolverás actividades guiadas paso a paso.\n\n
• Lee la instrucción.\n
• Escanea el bloque indicado.\n
• Si te equivocas verás un mensaje, pero la instrucción seguirá visible.\n
• Completa todos los pasos para avanzar.\n`
        },
        probar: {
            titulo: "Modo Probar",
            texto: `Aquí pondrás a prueba tus conocimientos.\n\n
• Observa el ejercicio.\n
• Construye la expresión con tus bloques.\n
• Escanea en cualquier orden.\n
• Presiona "Comprobar" para validar.\n`
        }
    };

    titulo.textContent = contenido[tipo].titulo;
    texto.textContent = contenido[tipo].texto;
    modal.classList.remove("oculto");

    document.getElementById("btn-inst-ok").onclick = () => {
        modal.classList.add("oculto");
    };
}


/* ============================================
      MOSTRAR SOLO LA PRIMERA VEZ
=============================================== */

export function mostrarSiPrimeraVez(pageKey) {

    const llave = "visto_" + pageKey;

    if (!localStorage.getItem(llave)) {
        localStorage.setItem(llave, "1");
        return true; // Sí debe mostrarse
    }
    return false;
}
