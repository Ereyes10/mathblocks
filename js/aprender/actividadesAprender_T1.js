// ==========================================================
//  Subtema: 1.1 Conceptos aritméticos básicos en lenguaje algebraico
// ==========================================================

//  ACTIVIDAD 1.1.1 — Suma de dos números cualesquiera“”

const actividad_1_1_1 = {
  titulo: "Convierte el siguiente texto: <strong>“La suma de dos números desconocidos”</strong>, en expresión” matemática ",
  pasos: [
    { tipo: "variable", descripcion: "Escanea un bloque de variable (Ejemplo: a)." },
    { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },
    { tipo: "variable", descripcion: "Escanea otra variable para completar la expresión (Ejemplo: b)." }
  ],
  validacionFinal: ["variable", "plus", "variable"]
};


//  ACTIVIDAD 1.1.2 — A un número cualquiera le quitamos el siguiente

const actividad_1_1_2 = {
  titulo: "Crea la expresión: <strong>“A un número cualquiera le quitamos cualquier otro”</strong>",
  pasos: [
    { tipo: "variable", descripcion: "Escanea un bloque variable (Ejemplo: a)." },
    { tipo: "operador", valor: "minus", descripcion: "Escanea el operador resta (-)." },
    { tipo: "variable", descripcion: "Escanea otra variable (Ejemplo: b)." }
  ],
  validacionFinal: ["variable", "minus", "variable"]
};


//  ACTIVIDAD 1.1.3 — Producto de 4 por un número cualquiera


const actividad_1_1_3 = {
  titulo: "Genera la expresión: <strong>“El producto de 2 por un número cualquiera”</strong>",
  pasos: [
    { tipo: "numero", valor: "2", descripcion: "Escanea el número 2." },
    { tipo: "operador", valor: "mul", descripcion: "Escanea el operador multiplicación (*)." },
    { tipo: "variable", descripcion: "Escanea otra variable (Ejemplo: x)." }
  ],
  validacionFinal: ["2", "mul", "variable"]
};


//  ACTIVIDAD 1.1.4 — Dividir un número entre 5

const actividad_1_1_4 = {
  titulo: "Forma la expresión: <strong>“Dividir cualquier número entre 5”</strong>",
  pasos: [
    { tipo: "variable", descripcion: "Escanea un bloque variable (Ejemplo: x)." },
    { tipo: "operador", valor: "div", descripcion: "Escanea el operador división (÷)." },
    { tipo: "numero", valor: "5", descripcion: "Escanea el número 5." }
  ],
  validacionFinal: ["variable", "div", "5"]
};

//  ACTIVIDAD 1.1.5 — La diferencia entre un número y 3


const actividad_1_1_5 = {
  titulo: "Crea la expresión: <strong>“La diferencia entre un número y 3”</strong>",
  pasos: [
    { tipo: "variable", descripcion: "Escanea una variable (Ejemplo: x)." },
    { tipo: "operador", valor: "minus", descripcion: "Escanea el operador resta (-)." },
    { tipo: "numero", valor: "3", descripcion: "Escanea el número 3." }
  ],
  validacionFinal: ["variable", "minus", "3"]
};


// ==========================================================
//  SUBTEMA 1.2 — Símbolos y letras en el lenguaje algebraico
//  ACTIVIDADES DE IDENTIFICACIÓN DE SÍMBOLOS
// ==========================================================


// ACTIVIDAD 1.2.1 — Suma
const actividad_1_2_1 = {
  titulo: "Así se dice: <strong>“la suma de”</strong> o <strong>“más”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el bloque (+):"
    }
  ],
  validacionFinal: ["plus"]
};


// ACTIVIDAD 1.2.2 — Resta
const actividad_1_2_2 = {
  titulo: "Así se dice: <strong>“la diferencia de”</strong> o <strong>“menos”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el bloque (−):"
    }
  ],
  validacionFinal: ["minus"]
};


// ACTIVIDAD 1.2.3 — Producto / Multiplicación
const actividad_1_2_3 = {
  titulo: "Así se dice: <strong>“el producto de”</strong> o <strong>“multiplicado por”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Escanea el bloque (·):"
    }
  ],
  validacionFinal: ["mul"]
};


// ACTIVIDAD 1.2.4 — División
const actividad_1_2_4 = {
  titulo: "Así se dice: <strong>“el cociente de”</strong> o <strong>“dividido entre”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el bloque (÷):"
    }
  ],
  validacionFinal: ["div"]
};


// ACTIVIDAD 1.2.5 — Igualdad
const actividad_1_2_5 = {
  titulo: "Así se dice: <strong>“es igual a”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el bloque (=):"
    }
  ],
  validacionFinal: ["eq"]
};


// ACTIVIDAD 1.2.6 — Mayor que
const actividad_1_2_6 = {
  titulo: "Se dice así: <strong>“es mayor que”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "gt",
      descripcion: "Escanea el bloque (>):"
    }
  ],
  validacionFinal: ["gt"]
};


// ACTIVIDAD 1.2.7 — Menor que
const actividad_1_2_7 = {
  titulo: "Se dice así: <strong>“es menor que”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "lt",
      descripcion: "Escanea el bloque (<):"
    }
  ],
  validacionFinal: ["lt"]
};


// ACTIVIDAD 1.2.8 — Desigualdad ≠ (neq)
const actividad_1_2_8 = {
  titulo: "Se dice así: <strong>“es diferente de”</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "neq",
      descripcion: "Escanea el bloque (≠):"
    }
  ],
  validacionFinal: ["neq"]
};


// ACTIVIDAD 1.2.9 — Un número es mayor que 10“”
const actividad_1_2_9 = {
  titulo: "Usa el símbolo correcto y forma la expresión: <strong>“Un número es mayor que 9”</strong>",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea un bloque de variable (a, b, x, y, etc.)."
    },
    {
      tipo: "operador",
      valor: "gt",
      descripcion: "Escanea el operador “mayor que” (>)."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Escanea el número 9."
    }
  ],
  validacionFinal: ["variable", "gt", "9"]
};


// ACTIVIDAD 1.2.10 — La cantidad de lápices es igual al doble de cuadernos“”
const actividad_1_2_10 = {
  titulo: "Usa el símbolo correcto y genera la expresión: <strong>“La cantidad de lápices es igual al doble de cuadernos”</strong>",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representará la cantidad de lápices (por ejemplo: x)."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el operador 'igual a' (=)."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2 (porque es el doble)."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Escanea el operador de multiplicación (·)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representará los cuadernos (por ejemplo: c)."
    }
  ],
  validacionFinal: ["variable", "eq", "2", "mul", "variable"]
};


// ACTIVIDAD 1.2.11 — Un número no es igual a 3
const actividad_1_2_11 = {
  titulo: "Usa el símbolo correcto y genera la expresión: <strong>“Un número no es igual a 3”</strong>",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea un bloque de variable (por ejemplo: y)."
    },
    {
      tipo: "operador",
      valor: "neq",
      descripcion: "Escanea el operador 'diferente de' (≠)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    }
  ],
  validacionFinal: ["variable", "neq", "3"]
};

// =====================================
//   Subtema 1.3. Concepto de incógnita
// =====================================

// Actividad 1.3.1 — Representa un número desconocido“”
const actividad_1_3_1 = {
  titulo: "Representa un número desconocido",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea una letra que represente un valor desconocido (x, y, n, a...)."
    }
  ],
  validacionFinal: ["variable"]
};

// Actividad 1.3.2 — ¿Qué número sumado con 5 da 9?
const actividad_1_3_2 = {
  titulo: "Usa el símbolo correcto y haz la expresión: <strong>“¿Qué número sumado con 5 da 9?”</strong>",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea una letra para representar el número desconocido (por ejemplo, a)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea el número 5."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el operador 'igual a' (=)."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Escanea el número 9."
    }
  ],
  validacionFinal: ["variable", "plus", "5", "eq", "9"]
};

// Actividad 1.3.3 — Un número menos 4 es 8
const actividad_1_3_3 = {
  titulo: "Usa el símbolo correcto y crea la expresión: “Un número menos 4 es 8”",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea una letra para representar el número desconocido (por ejemplo: x)."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (−)."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea el número 4."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el operador 'igual a' (=)."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea el número 8."
    }
  ],
  validacionFinal: ["variable", "minus", "4", "eq", "8"]
};

// 1.3.4 — El doble de un número“”
const actividad_1_3_4 = {
  titulo: "Usa el símbolo correcto y forma la expresión: “El doble de un número”",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Escanea el operador multiplicación (·)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la letra que representará el número desconocido (x, y, n, etc.)."
    }
  ],
  validacionFinal: ["2", "mul", "variable"]
};


// 1.3.5 — Un número dividido entre 3“”
const actividad_1_3_5 = {
  titulo: "Forma la expresión: “Un número dividido entre 3”",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la letra que representará el número desconocido (por ejemplo: x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador división (÷)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    }
  ],
  validacionFinal: ["variable", "div", "3"]
};

// Actividad 1.3.6 — Identifica la incógnita en la expresión: x + 7 = 15“”
const actividad_1_3_6 = {
  titulo: "Identifica la incógnita en la expresión: x + 7 = 15",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la letra que representa la incógnita en esta expresión."
    }
  ],
  validacionFinal: ["variable"]
};

// 1.3.7 — Identifica la incógnita en la expresión: 3n = 7
const actividad_1_3_7 = {
  titulo: "Identifica la incógnita en la expresión: 3n = 6",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la letra que representa la incógnita en esta expresión."
    }
  ],
  validacionFinal: ["variable"]
};

// =====================================
// Subtema 1.4.— Términos y expresiones algebraicas
// =====================================

// 1.4.1 — Genera el término algebraico 4x
const actividad_1_4_1 = {
  titulo: 'Genera el término "cuatro veces un número desconocido"',
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea el número 4."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la letra que representará la variable (por ejemplo: x)."
    }
  ],
  validacionFinal: ["4", "variable"]
};

// 1.4.2 — Genera el término algebraico -7y
const actividad_1_4_2 = {
  titulo: 'Genera el término "siete veces un número desconocido, pero en negativo"',
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el bloque (-) para indicar que el término será negativo."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Escanea el número 7."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representará el término (por ejemplo, y)."
    }
  ],
  validacionFinal: ["minus", "7", "variable"]
};

// 1.4.3 — Genera la expresión 3a + 2b
const actividad_1_4_3 = {
  titulo: 'Genera la expresión "dos términos, unidos por una suma"',
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable correspondiente (por ejemplo, a)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable correspondiente (por ejemplo, b)."
    }
  ],
  validacionFinal: ["3", "variable", "plus", "2", "variable"]
};

// 1.4.4 — Construye una expresión con dos términos negativos
const actividad_1_4_4 = {
  titulo: "Construye una expresión con dos términos negativos",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (-) para indicar que el primer término es negativo."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable del primer término (ejemplo: x)."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (−) para enlazar el siguiente término negativo."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea el número 5."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable del segundo término (ejemplo: y)."
    }
  ],
  validacionFinal: ["minus", "3", "variable", "minus", "5", "variable"]
};

// 1.4.5 — Construye una expresión con dos términos algebraicos y un término independiente
const actividad_1_4_5 = {
  titulo: "Construye una expresión con dos términos algebraicos y un término independiente",
  pasos: [
    // Primer término algebraico
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea el número 4."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable del primer término (ejemplo: x)."
    },
    // Operador de suma
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    // Segundo término algebraico
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable del segundo término (ejemplo: y)."
    },

    // Término independiente
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+) para agregar el término independiente."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Escanea el número 7 para representar el término independiente."
    }
  ],
  validacionFinal: [
    "4", "variable", "plus", "2", "variable","plus", "7" ]
};

// 1.4.6 — Identifica coeficiente y variable del segundo término de 3x + 2y + 7
const actividad_1_4_6 = {
  titulo: "Identifica coeficiente y variable del segundo termino de la expresión 3x + 2y + 7",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el coeficiente del segundo término (2)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable del segundo término (y)."
    }
  ],
  validacionFinal: ["2", "variable"]
};

// 1.4.7 — Identifica el término independiente en una expresión
const actividad_1_4_7 = {
  titulo: "Identifica el término independiente en la expresión 4x + 2y + 5",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea el término independiente (el número que no tiene variable)."
    }
  ],
  validacionFinal: ["5"]
};

// =====================================
// Subtema 1.5 — Representación de lenguaje común a expresiones algebraicas
// =====================================

// 1.5.1 — La edad de Ana dentro de 5 años“”
const actividad_1_5_1 = {
  titulo: "Representa la expresión: “La edad de Ana dentro de 5 años”",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea una letra para representar la edad actual de Ana (por ejemplo: a)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+), porque estamos aumentando años."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea el número 5, que representa los años que pasarán."
    }
  ],
  validacionFinal: ["variable", "plus", "5"]
};

// 1.5.2 — El triple de un número disminuido en 4“”
const actividad_1_5_2 = {
  titulo: "Forma la expresión: “El triple de un número disminuido en 4”",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3 (el triple)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representa el número desconocido (como x)."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (−)."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea el número 4."
    }
  ],
  validacionFinal: ["3", "variable", "minus", "4"]
};

// 1.5.3 — La mitad de la suma de dos números
const actividad_1_5_3 = {
  titulo: "Representa la expresión: “La mitad de la suma de dos números”",
  pasos: [
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Escanea el operador ( para iniciar la agrupación."
    },
    // Numerador: a + b
    {
      tipo: "variable",
      descripcion: "Escanea la primera variable del numerador (por ejemplo: a)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la segunda variable del numerador (por ejemplo: b)."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Escanea el operador ) para terminar la agrupación."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador suma (÷)."
    },
    // Denominador: 2
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2"
    }
  ],
  validacionFinal: ["parIzq", "variable", "plus", "variable", "parDer","div","2"]
};

// 1.5.4 — El doble de la suma de un número y 3“”
const actividad_1_5_4 = {
  titulo: "Representa la expresión: “El doble de la suma de un número aumentado en 3”",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2 (el doble)."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Escanea el bloque operador '('."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representa el número desconocido (como x)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Escanea el bloque operador ')'."
    }
  ],
  validacionFinal: ["2", "parIzq", "variable", "plus", "3", "parDer"]
};

// 1.5.5 — La edad de Juan hace 3 años“”
const actividad_1_5_5 = {
  titulo: "Forma la expresión: “La edad de Beto hace 3 años”",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea una letra para representar la edad actual de Juan (por ejemplo: b)."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (−)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    }
  ],
  validacionFinal: ["variable", "minus", "3"]
};

// 1.5.6 — Tres pesos menos que lo que cuesta un cuaderno
const actividad_1_5_6 = {
  titulo: "Crea la expresión: “Tres pesos menos que lo que cuesta un cuaderno”",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representará el costo del cuaderno (por ejemplo: c)."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea el operador resta (−)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3."
    }
  ],
  validacionFinal: ["variable", "minus", "3"]
};

// 1.5.7 — Cada entrada cuesta 50 pesos. Si compras t entradas, ¿cuánto pagas?“”
const actividad_1_5_7 = {
  titulo: "Representa la expresión: “Cada entrada cuesta $9 dolares. Si compras n entradas, ¿cuánto pagas?”",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Escanea el número 9 (costo por entrada)."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Escanea el operador multiplicación (·)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representa el número de entradas (por ejemplo: n)."
    }
  ],
  validacionFinal: ["9", "mul", "variable"]
};

// 1.5.8 — En una caja hay 12 dulces y agregas x más. ¿Cuántos dulces hay?
const actividad_1_5_8 = {
  titulo: "Transforma  expresión: “En una caja hay 8 dulces y agregas x más. ¿Cuántos dulces hay?”",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea el número 8 (dulces iniciales)."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representa los dulces agregados (como x)."
    }
  ],
  validacionFinal: ["8", "plus", "variable"]
};

// 1.5.9 — Expresión para comprar 3 libretas y 2 lápices“”
const actividad_1_5_9 = {
  titulo: "Transforma  expresión: “Una libreta cuesta p pesos y un lápiz vale 5 pesos: escribe una expresión para comprar 3 libretas y 2 lápices”",
  pasos: [
    // 3p (libretas)
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea el número 3 (cantidad de libretas)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la variable que representa el precio de una libreta (ejemplo: c)."
    },

    // + 
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea el operador suma (+)."
    },

    // 2·5 (lápices)
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea el número 2 (cantidad de lápices)."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Escanea el operador multiplicación (·)."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea el número 5 (precio de cada lápiz)."
    }
  ],
  validacionFinal: ["3", "variable", "plus", "2", "mul", "5"]
};


// ==========================================================
//  EXPORTACIÓN DEL ACTIVIDADES TEMA 1
// ==========================================================

export const ACTIVIDADES_T1 = {
  "1.1": [
    actividad_1_1_1,
    actividad_1_1_2,
    actividad_1_1_3,
    actividad_1_1_4,
    actividad_1_1_5
  ],
  "1.2": [
    actividad_1_2_1,
    actividad_1_2_2,
    actividad_1_2_3,
    actividad_1_2_4,
    actividad_1_2_5,
    actividad_1_2_6,
    actividad_1_2_7,
    actividad_1_2_8,
    actividad_1_2_9,
    actividad_1_2_10, 
    actividad_1_2_11
  ],
  "1.3": [
    actividad_1_3_1, 
    actividad_1_3_2,
    actividad_1_3_3,
    actividad_1_3_4,
    actividad_1_3_5,
    actividad_1_3_6,
    actividad_1_3_7 
  ],
  "1.4": [
    actividad_1_4_1,
    actividad_1_4_2,
    actividad_1_4_3,
    actividad_1_4_4,
    actividad_1_4_5,
    actividad_1_4_6,
    actividad_1_4_7,
  ],
    "1.5": [
    actividad_1_5_1,
    actividad_1_5_2,
    actividad_1_5_3,
    actividad_1_5_4,
    actividad_1_5_5,
    actividad_1_5_6,
    actividad_1_5_7,
    actividad_1_5_8,
    actividad_1_5_9,
  ],
};
