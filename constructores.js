// constructores.js
// ============================
// Diccionario global de Constructores
// ============================
//
// Cada constructor define:
// - id: identificador interno
// - symbol: representación visual
// - steps: número de bloques requeridos
// - labels: mensajes o nombre de cada paso
// - description: explicación didáctica

export const constructoresInfo = {
  
  // 1) FRACCIÓN
  "frac": {
    id: "frac",
    symbol: "a/b",
    steps: 2,
    labels: ["Numerador", "Denominador"],
    description: "Crea una fracción escaneando primero el numerador y luego el denominador."
  },

  // 2) EXPONENTE
  "exp": {
    id: "exp",
    symbol: "a^b",
    steps: 2,
    labels: ["Base", "Exponente"],
    description: "Crea una potencia escaneando la base y luego el exponente."
  },

  // 3) RAÍZ
  "root": {
    id: "root",
    symbol: "√a",
    steps: 1,
    labels: ["Radicando"],
    description: "Construye una raíz escaneando el valor que irá dentro de ella."
  },

  // 4) DOBLE DÍGITO
  "double": {
    id: "double",
    symbol: "ab",
    steps: 2,
    labels: ["Primer dígito", "Segundo dígito"],
    description: "Permite unir dos dígitos para formar un número de dos cifras."
  },

  // 5) NÚMERO NEGATIVO
  "neg": {
    id: "neg",
    symbol: "-a",
    steps: 1,
    labels: ["Número"],
    description: "Crea un número negativo colocando el signo menos antes de otro bloque."
  }
};
