// constructorManager.js
// ==========================================
// Controlador central de Constructores NFC
// ==========================================

import { bloquesInfo } from "./js/nfc.js";
import { constructoresInfo } from "./constructores.js";

export class ConstructorManager {
  
  constructor(onUpdateUI, onComplete) {
    this.active = null;           // id del constructor activo
    this.data = [];               // valores escaneados
    this.step = 0;                // índice del paso actual
    this.onUpdateUI = onUpdateUI; // callback para actualizar mensajes
    this.onComplete = onComplete; // callback cuando se construye el bloque final
  }

  // ========================
  // Iniciar constructor
  // ========================
  start(id) {
    const def = constructoresInfo[id];
    if (!def) return;

    this.active = id;
    this.data = [];
    this.step = 0;

    this.onUpdateUI(`Iniciando: ${def.description}`);
    this.onUpdateUI(`Escanea: ${def.labels[0]}`);
  }

  // ========================
  // Procesar cada lectura
  // ========================
  handleScan(value) {

    // Si no hay constructor activo, no hacemos nada
    if (!this.active) return false;

    const def = constructoresInfo[this.active];

    // Validar que el bloque exista en el diccionario global
    if (!bloquesInfo[value]) {
      this.onUpdateUI(`El bloque "${value}" no existe. Intenta de nuevo.`);
      return true; 
    }
    
    // Guardar valor
    this.data.push(value);
    this.step++;

    if (this.step < def.steps) {
      this.onUpdateUI(`Escanea: ${def.labels[this.step]}`);
      return true;
    }

    // si ya se completaron los pasos → construir resultado
    const result = this.buildResult(def, this.data);
    this.onComplete(result);

    this.reset();
    return true;
  }

  // ========================
  // Construcción final
  // ========================
  buildResult(def, data) {

    const s = (id) => bloquesInfo[id].symbol;

    switch (def.id) {

      case "frac":
        return `${s(data[0])}⁄${s(data[1])}`;

      case "exp":
        return `${s(data[0])}${s(data[1])}`;

      case "root":
        return `√(${s(data[0])})`;

      case "double":
        return `${s(data[0])}${s(data[1])}`;

      case "neg":
        return `-${s(data[0])}`;

      default:
        return null;
    }
  }

  // ========================
  // Cancelar / Reset
  // ========================
  reset() {
    this.active = null;
    this.data = [];
    this.step = 0;
  }
}
