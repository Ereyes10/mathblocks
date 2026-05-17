// =====================================================
//  actividadesAprendizajeT3.js
//  Tema 3 — Operaciones con monomios y binomios
// =====================================================

const actividad_3_1_1_1 = {
  titulo: "¿Cuál es el resultado de la siguiente multiplicación: <strong>(x³)(x⁴)</strong>?",
  pasos: [
    { tipo: "variable", valor: "x7", descripcion: "Debemos sumar el valor de los exponentes para encontrar el resultado (2+4), por ello escanea el bloque x⁷." },

  ],
  validacionFinal: ["x7"]
};

const actividad_3_1_1_2 = {
  titulo: "Multiplica las siguientes potencias con la misma base: <strong>x⁴ · x⁵</strong>",
  pasos: [
    { tipo: "variable", valor: "x9", descripcion: "Para encontrar el resultado debemos sumar los exponentes (4+5), ahora escanea el bloque x⁹." },
  ],
  validacionFinal: ["x9",]
};

const actividad_3_1_1_3 = {
  titulo: "Multiplica las potencias: <strong>(3x⁴)·(2x²)</strong>",
  pasos: [
    { tipo: "numero", valor: "6", descripcion: "Primero multiplicamos coeficientes: (3 por 2), escanea el bloque número 6" },
    { tipo: "variable", valor: "x6", descripcion: "En la multiplicación de potencias se suman los exponentes (4+2), escanea el bloque x⁶." }
  ],
  validacionFinal: ["6","x6"]
};

const actividad_3_1_1_4 = {
  titulo: "Multiplica las potencias: <strong>(5x)·(x²)</strong>",
  pasos: [
    { tipo: "numero", valor: "5", descripcion: "Primero multiplicamos coeficientes: (5 por 1), escanea el bloque número 5" },
    { tipo: "variable", valor: "x3", descripcion: "En la multiplicación de potencias se suman los exponentes (1+2), escanea el bloque x³." }
  ],
  validacionFinal: ["5","x3"]
};

const actividad_3_1_1_5 = {
  titulo: "Multiplica las potencias: <strong>(x)·(7x)</strong>",
  pasos: [
    { tipo: "numero", valor: "7", descripcion: "Primero multiplicamos coeficientes: (1 por 7), escanea el bloque número 7" },
    { tipo: "variable", valor: "x2", descripcion: "En la multiplicación de potencias se suman los exponentes (1+1), escanea el bloque x²." }
  ],
  validacionFinal: ["7","x2"]
};

// ===============================
// 3.1.2 — División de potencias
// ===============================

const actividad_3_1_2_1 = {
  titulo: "¿Cuál es el resultado de la siguiente operación: <strong>(x⁸) ÷ (x³)</strong>?",
  pasos: [
    { tipo: "variable", valor: "x5", descripcion: "En la división de potencias con la misma base, restamos exponentes (8−3). Por ello, escanea el bloque x⁵." },
  ],
  validacionFinal: ["x5"]
};

const actividad_3_1_2_2 = {
  titulo: "Divide las siguientes potencias con la misma base: <strong>x⁹ ÷ x⁴</strong>",
  pasos: [
    { tipo: "variable", valor: "x5", descripcion: "Para encontrar el resultado restamos exponentes (9−4). Ahora escanea el bloque x⁵." },
  ],
  validacionFinal: ["x5"]
};

const actividad_3_1_2_3 = {
  titulo: "Divide las potencias: <strong>(6x⁷) ÷ (2x²)</strong>",
  pasos: [
    { tipo: "numero", valor: "3", descripcion: "Primero dividimos coeficientes: (6 ÷ 2). Escanea el bloque número 3." },
    { tipo: "variable", valor: "x5", descripcion: "En la división de potencias se restan los exponentes (7−2). Escanea el bloque x⁵." }
  ],
  validacionFinal: ["3","x5"]
};

const actividad_3_1_2_4 = {
  titulo: "Divide las potencias: <strong>(5x⁶) ÷ (x²)</strong>",
  pasos: [
    { tipo: "numero", valor: "5", descripcion: "Primero dividimos coeficientes: (5 ÷ 1). Escanea el bloque número 5." },
    { tipo: "variable", valor: "x4", descripcion: "En la división de potencias se restan los exponentes (6−2). Escanea el bloque x⁴." }
  ],
  validacionFinal: ["5","x4"]
};

const actividad_3_1_2_5 = {
  titulo: "Divide las potencias: <strong>(x²) ÷ (x²)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Al dividir potencias con la misma base y el mismo exponente, se restan exponentes (2−2 = 0). Escanea 1."
    }
  ],
  validacionFinal: ["1"]
};

const actividad_3_1_3_1 = {
  titulo: "¿Cuál es el resultado de la siguiente expresión: <strong>(x²)³</strong>?",
  pasos: [
    {
      tipo: "variable",
      valor: "x6",
      descripcion: "En una potencia de una potencia, se multiplican los exponentes (2×3). Escanea x⁶."
    }
  ],
  validacionFinal: ["x6"]
};

const actividad_3_1_3_2 = {
  titulo: "Calcula la potencia de la potencia: <strong>(x³)³</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x9",
      descripcion: "Multiplica los exponentes (3×3 = 9). Escanea x9."
    }
  ],
  validacionFinal: ["x9"]
};

const actividad_3_1_3_3 = {
  titulo: "Simplifica la expresión: <strong>(x²)²</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x4",
      descripcion: "Multiplica los exponentes (2×2). Escanea x⁴."
    }
  ],
  validacionFinal: ["x4"]
};

const actividad_3_1_3_4 = {
  titulo: "Determina el resultado de la potencia: <strong>(x)⁵</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x5",
      descripcion: "Multiplica los exponentes (1×5 = 5). Escanea x⁵."
    }
  ],
  validacionFinal: ["x5"]
};

const actividad_3_1_3_5 = {
  titulo: "Analiza la siguiente expresión: <strong>(x⁰)³</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "1",
      descripcion: "Multiplica los exponentes (0×3= 0). Como el resultado quedaría x⁰, lo correcto es expresarlo como 1, escanea este bloque."
    }
  ],
  validacionFinal: ["1"]
};

const actividad_3_1_4_1 = {
  titulo: "¿Cuál es el resultado de la siguiente expresión: <strong>(2x)²</strong>?",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el coeficiente al cuadrado: 2² = 4. Escanea el bloque número 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "La potencia también se aplica a la variable: x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["4", "x2"]
};

const actividad_3_1_4_2 = {
  titulo: "Aplica la potencia al producto: <strong>(3x)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el coeficiente: 3² = 9. Escanea el bloque número 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Eleva la variable: x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["9", "x2"]
};

const actividad_3_1_4_3 = {
  titulo: "Simplifica la expresión: <strong>(2x)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Eleva el coeficiente al cubo: 2³ = 8. Escanea el bloque número 8."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Eleva la variable al cubo: x³. Escanea el bloque x³."
    }
  ],
  validacionFinal: ["8", "x3"]
};

const actividad_3_1_4_4 = {
  titulo: "Distribuye la potencia en el producto: <strong>(2ab)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el coeficiente: 2² = 4. Escanea el bloque número 4."
    },
    {
      tipo: "variable",
      valor: "a2",
      descripcion: "Aplica la potencia a la primera variable: a². Escanea a²."
    },
    {
      tipo: "variable",
      valor: "b2",
      descripcion: "Aplica la potencia a la segunda variable: b². Escanea b²."
    }
  ],
  validacionFinal: ["4", "a2", "b2"]
};

const actividad_3_1_4_5 = {
  titulo: "Selecciona el resultado correcto de la expresión: <strong>(xb)²</strong>",
  pasos: [
    {
      tipo: "variable",
      descripcion: "Escanea la primera variable elevada al cuadrado (ejemplo x)."
    },
    {
      tipo: "variable",
      descripcion: "Escanea la segunda variable elevada al cuadrado (ejemplo b)."
    }
  ],
  validacionFinal: ["x2", "b2"]
};

const actividad_3_1_5_1 = {
  titulo: "Simplifica la siguiente expresión: <strong>x¹</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Toda potencia con exponente uno es la misma base. Escanea el bloque x."
    }
  ],
  validacionFinal: ["x"]
};

const actividad_3_1_5_2 = {
  titulo: "Simplifica la expresión: <strong>5x¹</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "El coeficiente se mantiene igual. Escanea el bloque número 5."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La potencia x¹ se simplifica a x. Escanea el bloque x."
    }
  ],
  validacionFinal: ["5", "x"]
};

const actividad_3_1_5_3 = {
  titulo: "Simplifica la siguiente expresión: <strong>x⁰</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Toda base distinta de cero elevada a exponente cero es 1. Escanea el bloque número 1."
    }
  ],
  validacionFinal: ["1"]
};

const actividad_3_1_5_4 = {
  titulo: "Simplifica la expresión: <strong>7x⁰</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "La potencia x⁰ es igual a 1, por lo tanto el resultado es solo el coeficiente. Escanea el bloque 7."
    }
  ],
  validacionFinal: ["7"]
};

const actividad_3_1_5_5 = {
  titulo: "Simplifica la expresión: <strong>3x¹ · x⁰</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "La potencia x⁰ es igual a 1 y x¹ es igual a x, por lo que solo queda el coeficiente. Escanea el bloque 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "El resultado conserva la variable x. Escanea el bloque x."
    }
  ],
  validacionFinal: ["3", "x"]
};

// =====================================================
//  Tema 3.2 — Regla de los signos con monomios 
// =====================================================

const actividad_3_2_1_1 = {
  titulo: "Determina el signo del siguiente producto: <strong>(+3x)(+2x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "El producto de dos números positivos es positivo. Multiplica 3×2 y escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x·x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["6", "x2"]
};
const actividad_3_2_1_2 = {
  titulo: "Resuelve el producto: <strong>(+3x)(−3x)</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El producto de un número positivo y uno negativo es negativo. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "El producto de 3 × 3 = 9. Escanea el bloque 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x·x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["minus","9", "x2"]
};

const actividad_3_2_1_3 = {
  titulo: "Calcula el resultado del producto: <strong>(−4x)(+2x)</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El producto de un número negativo y uno positivo es negativo. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "El producto de 4 x 2 = 8. Escanea el bloque 8."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x·x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["minus","8", "x2"]
};

const actividad_3_2_1_4 = {
  titulo: "Determina el resultado del producto: <strong>(−2x)(−3x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "El producto de dos números negativos es positivo. Multiplica 2×3 y escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x·x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["6", "x2"]
};

const actividad_3_2_1_5 = {
  titulo: "Selecciona el signo correcto del producto: <strong>(−x)(−x)</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "El producto de dos signos negativos es positivo. Escanea el bloque x²."
    }
  ],
  validacionFinal: ["x2"]
};

const actividad_3_2_2_1 = {
  titulo: "Determina el signo del siguiente cociente: <strong>(+6x²) ÷ (+3x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "La división de dos números positivos da un resultado positivo. Divide 6 ÷ 3 y escanea el bloque 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x² ÷ x = x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["2", "x"]
};

const actividad_3_2_2_2 = {
  titulo: "Resuelve la división: <strong>(+8x²) ÷ (−4x)</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "La división de un número positivo entre uno negativo da un resultado negativo. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "La división 8 ÷ 4 es igual a 2. Escanea el bloque 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x² ÷ x = x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["minus","2", "x"]
};

const actividad_3_2_2_3 = {
  titulo: "Calcula el resultado de la división: <strong>(−10x³) ÷ (+5x²)</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "La división de un número negativo entre uno positivo da un resultado negativo. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "La división de 10 ÷ 5 da 2. Escanea el bloque 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x³ ÷ x² = x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["minus","2", "x"]
};

const actividad_3_2_2_4 = {
  titulo: "Determina el resultado del cociente: <strong>(−12x²) ÷ (−3x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "La división de dos números negativos da un resultado positivo. Dividir 12 ÷ 3 da 4. Escanea el bloque 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x² ÷ x = x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["4", "x"]
};

const actividad_3_2_2_5 = {
  titulo: "Selecciona el resultado correcto del cociente: <strong>(−x²) ÷ (−x)</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La división de dos monomios negativos es positiva y x² ÷ x = x. Escanea el bloque x."
    }
  ],
  validacionFinal: ["x"]
};

const actividad_3_3_1_1 = {
  titulo: "Simplifica la siguiente suma de monomios: <strong>x + 8x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Suma los coeficientes de los monomios semejantes: 1 + 8 = 9. Escanea el bloque 9."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La parte literal se mantiene igual. Escanea el bloque x."
    }
  ],
  validacionFinal: ["8", "x"]
};

const actividad_3_3_1_2 = {
  titulo: "Simplifica la siguiente resta: <strong>25x − 21x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Resta los coeficientes: 25 − 21 = 4. Escanea el bloque 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La parte literal no cambia. Escanea el bloque x."
    }
  ],
  validacionFinal: ["4", "x"]
};


const actividad_3_3_1_3 = {
  titulo: "Simplifica la expresión: <strong>4x² + 3x²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los coeficientes de los monomios semejantes: 4 + 3 = 7. Escanea el bloque 7."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "La parte literal x² permanece igual. Escanea el bloque x²."
    }
  ],
  validacionFinal: ["7", "x2"]
};

const actividad_3_3_1_4 = {
  titulo: "Calcula el resultado de la operación: <strong>15x² − 9x²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Resta los coeficientes: 15 − 9 = 6. Escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "El exponente se conserva al ser monomios semejantes. Escanea x²."
    }
  ],
  validacionFinal: ["6", "x2"]
};

const actividad_3_3_1_5 = {
  titulo: "Simplifica la siguiente expresión: <strong>−27x + 35x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Suma algebraicamente los coeficientes: −27 + 35 = 8. Escanea el bloque 8."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La parte literal se mantiene. Escanea el bloque x."
    }
  ],
  validacionFinal: ["8", "x"]
};

const actividad_3_3_2_1 = {
  titulo: "Multiplica los siguientes monomios: <strong>3x · 3x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Multiplica los coeficientes: 3 × 3 = 9. Escanea el bloque 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x · x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["9", "x2"]
};

const actividad_3_3_2_2 = {
  titulo: "Calcula el producto: <strong> (4x)(2x²)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Multiplica los coeficientes: 4 × 2 = 8. Escanea el bloque 8."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x · x² = x³. Escanea x³."
    }
  ],
  validacionFinal: ["8", "x3"]
};

const actividad_3_3_2_3 = {
  titulo: "Multiplica los monomios: <strong>−3x² · 2x²</strong>",
  pasos: [
   {
      tipo: "operador",
      valor: "minus",
      descripcion: "El producto de un negativo por un positivo es negativo. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "El producto de: 3 × 2 = 6. Escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x² · x² = x⁴. Escanea x⁴."
    }
  ],
  validacionFinal: ["minus","6", "x4"]
};

const actividad_3_3_2_4 = {
  titulo: "Determina el resultado de: <strong>−2x · −3x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "El producto de dos números negativos es positivo. 2 × 3 = 6. Escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Multiplica las variables: x · x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["6", "x2"]
};

const actividad_3_3_2_5 = {
  titulo: "Selecciona el resultado correcto del producto: <strong>(9x)(x³)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Multiplica los coeficientes: 9 × 1 = 9. Escanea el bloque 9."
    },
    {
      tipo: "variable",
      valor: "x4",
      descripcion: "La parte literal se multiplica: x · x³ = x⁴. Escanea x⁴."
    }
  ],
  validacionFinal: ["9", "x4"]
};

const actividad_3_3_3_1 = {
  titulo: "Divide los siguientes monomios: <strong>21x³ ÷ 3x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Divide los coeficientes: 21 ÷ 3 = 7. Escanea el bloque 7."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Divide las potencias: x³ ÷ x = x². Escanea el bloque x²."
    }
  ],
  validacionFinal: ["7", "x2"]
};

const actividad_3_3_3_2 = {
  titulo: "Simplifica el cociente: <strong>18x² ÷ 3x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Divide los coeficientes: 18 ÷ 3 = 6. Escanea el bloque 6."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Resta los exponentes: 2 − 1 = 1. Escanea el bloque x."
    }
  ],
  validacionFinal: ["6", "x"]
};

const actividad_3_3_3_3 = {
  titulo: "Calcula el resultado de la división: <strong>−9x² ÷ 3x</strong>",
  pasos: [
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "La división de un número negativo entre uno positivo es negativa. Escanea el bloque negativo (-)."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "La división de 9 ÷ 3 = 3. Escanea el bloque 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x² ÷ x = x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["minus","3", "x"]
};

const actividad_3_3_3_4 = {
  titulo: "Determina el resultado del cociente: <strong>-12x⁵ ÷ −3x²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "La división de dos números negativos es positiva. -12 ÷ -3 = 4. Escanea el bloque 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Divide las potencias: x⁵ ÷ x² = x³. Escanea el bloque x³."
    }
  ],
  validacionFinal: ["4", "x3"]
};

const actividad_3_3_3_5 = {
  titulo: "Simplifica la siguiente división: <strong>5x ÷ x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Al dividir x ÷ x el resultado es 1, por lo que solo queda el coeficiente. Escanea el bloque 5."
    }
  ],
  validacionFinal: ["5"]
};

const actividad_3_4_1_1 = {
  titulo: "Identifica el factor común de la expresión: <strong>12x + 8x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Busca el mayor número que divide a ambos coeficientes (12 y 8). Escanea el bloque 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ambos términos tienen la variable x. Escanea el bloque x."
    }
  ],
  validacionFinal: ["4", "x"]
};

const actividad_3_4_1_2 = {
  titulo: "Encuentra el factor común de: <strong>18x + 27x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Determina el máximo común divisor de 18 y 27. Escanea el bloque 9."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ambos términos tienen la misma variable. Escanea x."
    }
  ],
  validacionFinal: ["9", "x"]
};

const actividad_3_4_1_3 = {
  titulo: "Determina el factor común de: <strong>20x² + 12x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Busca el número mayor que divide a ambos coeficientes (20 y 12). Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "El menor exponente común es x¹. Escanea el bloque x."
    }
  ],
  validacionFinal: ["4", "x"]
};

const actividad_3_4_1_4 = {
  titulo: "Identifica el factor común de la expresión: <strong>16x + 24x + 8x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Busca el mayor número que divide a 16, 24 y 8. Escanea el bloque 8."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Todos los términos contienen la variable x. Escanea x."
    }
  ],
  validacionFinal: ["8", "x"]
};

const actividad_3_4_1_5 = {
  titulo: "Determina el factor común de: <strong>−15x − 25x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Busca el mayor número que divide a 15 y 25. Escanea el bloque 5."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ambos términos contienen la variable x. Escanea el bloque x."
    }
  ],
  validacionFinal: ["5", "x"]
};

const actividad_3_4_2_1 = {
  titulo: "Factoriza la expresión: <strong>12x + 8x</strong>",
  pasos: [
    { tipo: "numero", valor: "4", descripcion: "Escanea el factor común numérico. (Escanea número 4)" },
    { tipo: "variable", valor: "x", descripcion: "Escanea la variable común. (Escanea x)" },
    { tipo: "operador", valor: "parIzq", descripcion: "Abre el paréntesis." },
    { tipo: "numero", valor: "3", descripcion: "Divide 12 entre 4. Escanea 3." },
    { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma." },
    { tipo: "numero", valor: "2", descripcion: "Divide 8 entre 4. Escanea 2." },
    { tipo: "operador", valor: "parDer", descripcion: "Cierra el paréntesis."
    }
  ],
  validacionFinal: ["4", "x", "parIzq", "3", "plus", "2", "parDer"]
};

const actividad_3_4_2_2 = {
  titulo: "Factoriza: <strong>18x + 27x</strong>",
  pasos: [
    { tipo: "numero", valor: "9", descripcion: "Escanea el factor común. Escanea número 9" },
    { tipo: "variable", valor: "x", descripcion: "Escanea la variable común. (Escanea x)" },
    { tipo: "operador", valor: "parIzq", descripcion: "Abre el paréntesis." },
    { tipo: "numero", valor: "2", descripcion: "Divide 18 entre 9. Escanea número 2" },
    { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma." },
    { tipo: "numero", valor: "3", descripcion: "Divide 27 entre 9. Escanea número 3" },
    { tipo: "operador", valor: "parDer", descripcion: "Cierra el paréntesis." }
  ],
  validacionFinal: ["9", "x", "parIzq", "2", "plus", "3", "parDer"]
};

const actividad_3_4_2_3 = {
  titulo: "Factoriza la expresión: <strong>20x² + 12x</strong>",
  pasos: [
    { tipo: "numero", valor: "4", descripcion: "Escanea el factor común numérico. Escanea número 3" },
    { tipo: "variable", valor: "x", descripcion: "Escanea la variable común (Escanea x)." },
    { tipo: "operador", valor: "parIzq", descripcion: "Abre paréntesis." },
    { tipo: "numero", valor: "5", descripcion: "Divide 20 entre 4. Escanea número 5" },
    { tipo: "variable", valor: "x", descripcion: "x² ÷ x = x. Escanea x." },
    { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma." },
    { tipo: "numero", valor: "3", descripcion: "Divide 12 entre 4. Escanea número 3" },
    { tipo: "operador", valor: "parDer", descripcion: "Cierra paréntesis." }
  ],
  validacionFinal: ["4", "x", "parIzq", "5", "x", "plus", "3", "parDer"]
};

const actividad_3_4_2_4 = {
  titulo: "Factoriza: <strong>16x + 24x + 8x</strong>",
  pasos: [
    { tipo: "numero", valor: "8", descripcion: "Escanea el factor común. Escanea número 8" },
    { tipo: "variable", valor: "x", descripcion: "Escanea la variable común. Escanea x" },
    { tipo: "operador", valor: "parIzq", descripcion: "Abre paréntesis." },

    { tipo: "numero", valor: "2", descripcion: "Divide 16 entre 8. Escanea número 2" },
    { tipo: "operador", valor: "plus", descripcion: "Escanea +." },

    { tipo: "numero", valor: "3", descripcion: "Divide 24 entre 8. Escanea número 3" },
    { tipo: "operador", valor: "plus", descripcion: "Escanea +." },

    { tipo: "numero", valor: "1", descripcion: "Divide 8 entre 8. Escanea número 1" },
    { tipo: "operador", valor: "parDer", descripcion: "Cierra paréntesis." }
  ],
  validacionFinal: ["8", "x", "parIzq", "2", "plus", "3", "plus", "1", "parDer"]
};

const actividad_3_4_2_5 = {
  titulo: "Factoriza la expresión: <strong>−15x − 25x</strong>",
  pasos: [
    { tipo: "numero", valor: "5", descripcion: "Escanea el factor común. Escanea número 5" },
    { tipo: "variable", valor: "x", descripcion: "Escanea la variable común. Escanea x" },
    { tipo: "operador", valor: "parIzq", descripcion: "Abre paréntesis." },

    { tipo: "numero", valor: "3", descripcion: "Divide 15 entre 5. Escanea número 3" },
    { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (se conserva estructura)." },

    { tipo: "numero", valor: "5", descripcion: "Divide 25 entre 5. Escanea número 5" },
    { tipo: "operador", valor: "parDer", descripcion: "Cierra paréntesis." }
  ],
  validacionFinal: ["5", "x", "parIzq", "3", "plus", "5", "parDer"]
};

const actividad_3_5_1_1 = {
  titulo: "Resuelve la suma de fracciones algebraicas: <strong>2x/5 + 3x/5</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Suma los numeradores: 2x + 3x = 5x. Escanea el coeficiente 5."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completa el termino 5x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "El denominador permanece igual. Escanea 5."
    }
  ],
  validacionFinal: ["5", "x", "div","5"]
};

const actividad_3_5_1_2 = {
  titulo: "Simplifica la operación: <strong>4x/7 + 6x/7</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "Suma los coeficientes de los numeradores: 4 + 6 = 10. Escanea el bloque constructor doble dígito para formar el 10."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completar el término 10x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "El denominador permanece igual. Escanea 7."
    }
  ],
  validacionFinal: ["10", "x", "div", "7"]
};

const actividad_3_5_1_3 = {
  titulo: "Resuelve la suma: <strong>8x/9 + 5x/9</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(1,3)",
      descripcion: "Suma los numeradores: 8x + 5x = 13x. Escanea bloque constructor doble dígito para formar el 13."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completar el término 13x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "El denominador permanece igual. Escanea 9."
    }
  ],
  validacionFinal: ["13", "x", "div", "9"]
};

const actividad_3_5_1_4 = {
  titulo: "Resuelve la resta de fracciones algebraicas: <strong>9x/4 − 2x/4</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Resta los numeradores: 9x − 2x = 7x. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completar el término 7x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "El denominador permanece igual. Escanea 4."
    }
  ],
  validacionFinal: ["7", "x", "div", "4"]
};

const actividad_3_5_1_5 = {
  titulo: "Simplifica la operación: <strong>12x/8 − 3x/8</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Resta los coeficientes de los numeradores: 12 − 3 = 9. Escanea 9."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completar el término 9x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "El denominador permanece igual. Escanea 8."
    }
  ],
  validacionFinal: ["9", "x", "div", "8"]
};

const actividad_3_5_1_6 = {
  titulo: "Resuelve la resta: <strong>20x/11 − 6x/11</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(1,4)",
      descripcion: "Resta los numeradores: 20x − 6x = 14x. Escanea el bloque doble dígito para formar el 14."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Ahora escanea x (para completar el término 14x)."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Escanea el operador de división. (para formar la fracción)"
    },
    {
      tipo: "constructor",
      valor: "doble(1,1)",
      descripcion: "El denominador permanece igual. Escanea el bloque doble dígito para formar el 11."
    }
  ],
  validacionFinal: ["14", "x", "div", "11"]
};



export const ACTIVIDADES_T3 = {
  "3.1.1": [
    actividad_3_1_1_1,
    actividad_3_1_1_2,
    actividad_3_1_1_3,
    actividad_3_1_1_4,
    actividad_3_1_1_5,   

  ],
  "3.1.2": [
    actividad_3_1_2_1,
    actividad_3_1_2_2,
    actividad_3_1_2_3,
    actividad_3_1_2_4,
    actividad_3_1_2_5,  

  ],
  "3.1.3": [
    actividad_3_1_3_1,
    actividad_3_1_3_2,
    actividad_3_1_3_3,
    actividad_3_1_3_4,
    actividad_3_1_3_5,
  ],

    "3.1.4": [
    actividad_3_1_4_1,
    actividad_3_1_4_2,
    actividad_3_1_4_3,
    actividad_3_1_4_4,
    actividad_3_1_4_5,
  ],

    "3.1.5": [
    actividad_3_1_5_1,
    actividad_3_1_5_2,
    actividad_3_1_5_3,
    actividad_3_1_5_4,
    actividad_3_1_5_5,
  ],

    "3.2.1": [
    actividad_3_2_1_1,
    actividad_3_2_1_2,
    actividad_3_2_1_3,
    actividad_3_2_1_4,
    actividad_3_2_1_5,
  ],

    "3.2.2": [
    actividad_3_2_2_1,
    actividad_3_2_2_2,
    actividad_3_2_2_3,
    actividad_3_2_2_4,
    actividad_3_2_2_5,
  ],

    "3.3.1": [
    actividad_3_3_1_1,
    actividad_3_3_1_2,
    actividad_3_3_1_3,
    actividad_3_3_1_4,
    actividad_3_3_1_5,
  ],

    "3.3.2": [
    actividad_3_3_2_1,
    actividad_3_3_2_2,
    actividad_3_3_2_3,
    actividad_3_3_2_4,
    actividad_3_3_2_5,
  ],

    "3.3.3": [
    actividad_3_3_3_1,
    actividad_3_3_3_2,
    actividad_3_3_3_3,
    actividad_3_3_3_4,
    actividad_3_3_3_5,
  ],
    "3.4.1": [
    actividad_3_4_1_1,
    actividad_3_4_1_2,
    actividad_3_4_1_3,
    actividad_3_4_1_4,
    actividad_3_4_1_5,
  ],
    "3.4.2": [
    actividad_3_4_2_1,
    actividad_3_4_2_2,
    actividad_3_4_2_3,
    actividad_3_4_2_4,
    actividad_3_4_2_5,
  ],
    "3.5.1": [
    actividad_3_5_1_1,
    actividad_3_5_1_2,
    actividad_3_5_1_3,
    actividad_3_5_1_4,
    actividad_3_5_1_5,
    actividad_3_5_1_6,
  ]


};