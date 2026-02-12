// =====================================================
//  actividadesAprendizajeT2.js
//  Tema 2 — Clasificación de Expresiones Algebraicas
// =====================================================


const actividad_2_1_1 = {
  titulo: "Primero vamos a forma un término algebraico",
      pasos: [
        { tipo: "numero", descripcion: "Escanea un bloque número." },
        { tipo: "variable", descripcion: "Ahora escanea una variable para completar el término." }
      ],
      validacionFinal: ["numero","variable"]

};
const actividad_2_1_2 ={
        titulo: "Ahora vamos a construir una expresión con dos términos",
      pasos: [
            { tipo: "numero", descripcion: "Escanea un número para el primer coeficiente (ejemplo 3)." },
            { tipo: "variable", descripcion: "Escanea una variable para formar el primer término(ejemplo x)." },
            { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },
            { tipo: "numero", descripcion: "Escanea un número para el segundo coeficiente (ejemplo 2)." },
            { tipo: "variable", descripcion: "Escanea una variable para construir el segundo término (ejemplo y)." }
        ],
      validacionFinal: ["numero", "variable", "operador", "numero", "variable"]
};
const actividad_2_1_3 = {
    titulo: "Vamos a construir una expresión con un término algebraico y un independiente",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el coeficiente del término algebraico (ejemplo 4)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el término algebraico (ejemplo x)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },
        { tipo: "numero", descripcion: "Escanea un número para formar el término independiente (ejemplo 7)." }
    ],
    validacionFinal: ["numero", "variable", "operador", "numero"]
};
const actividad_2_1_4 = {
    titulo: "Es hora de construir una expresión con tres términos algebraicos",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el primer coeficiente (ejemplo 3)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el primer término (ejemplo x)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea un número para el segundo coeficiente (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el segundo término (ejemplo y)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea nuevamente el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea un número para el tercer coeficiente (ejemplo 5)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el tercer término (ejemplo z)." }
    ],
    validacionFinal: ["numero", "variable", "operador", "numero", "variable", "operador", "numero", "variable"]
};
const actividad_2_1_5 = {
    titulo: "Vamos a construir una expresión con dos términos algebraicos y un término independiente",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el primer coeficiente (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el primer término (ejemplo a)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea un número para el segundo coeficiente (ejemplo 3)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el segundo término (ejemplo b)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea nuevamente el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea un número para el término independiente (ejemplo 6)." }
    ],
    validacionFinal: ["numero", "variable", "operador", "numero", "variable", "operador", "numero"]
};
const actividad_2_2_1 = {
    titulo: "Vamos a construir un monomio",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el coeficiente (ejemplo 5)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el monomio (ejemplo x)." }
    ],
    validacionFinal: ["numero", "variable"]
};
const actividad_2_2_2 = {
    titulo: "Vamos a construir un binomio",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el primer coeficiente (ejemplo 3)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el primer término (ejemplo x)." },
        { tipo: "operador", descripcion: "Escanea el operador (+ o −)." },
        { tipo: "numero", descripcion: "Escanea un número para el segundo término independiente (ejemplo 7)." }
    ],
    validacionFinal: ["numero", "variable", ["minus","plus"], "numero"]
};
const actividad_2_2_3 = {
    titulo: "Vamos a construir un trinomio",
    pasos: [
        { tipo: "numero", descripcion: "Escanea un número para el primer coeficiente (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea una variable para el primer término (ejemplo x)." },
        { tipo: "operador", descripcion: "Escanea el operador (+ o −)." },

        { tipo: "numero", descripcion: "Escanea un número para el segundo coeficiente (ejemplo 3)." },
        { tipo: "variable", descripcion: "Escanea una variable para el segundo término (ejemplo y)." },
        { tipo: "operador", descripcion: "Escanea nuevamente el operador (+ o −)." },

        { tipo: "numero", descripcion: "Escanea un número para el tercer término independiente (ejemplo 5)." }
    ],
    validacionFinal: ["numero", "variable", ["minus","plus"], "numero", "variable", ["minus","plus"], "numero"]
};
const actividad_2_2_4 = {
    titulo: "Construye un polinomio de cuatro términos",
    pasos: [
        { tipo: "variable", descripcion: "Escanea una variable para el primer término (ejemplo x)." },
        { tipo: "operador", descripcion: "Escanea el operador (+ o −)." },

        { tipo: "numero", descripcion: "Escanea un número para el coeficiente del segundo término (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea una variable para formar el segundo término (ejemplo y)." },
        { tipo: "operador",  descripcion: "Escanea el operador (+ o −)." },

        { tipo: "numero", descripcion: "Escanea un número para el coeficiente del tercer término (ejemplo 3)." },
        { tipo: "variable", descripcion: "Escanea una variable para el tercer término (ejemplo z)." },
        { tipo: "operador", descripcion: "Escanea nuevamente el operador (+ o −)." },

        { tipo: "numero", descripcion: "Escanea un número para el cuarto término independiente (ejemplo 4)." }
    ],
    validacionFinal: [
        "variable", ["minus","plus"],
        "numero", "variable", ["minus","plus"],
        "numero", "variable", ["minus","plus"],
        "numero"
    ]
};
const actividad_2_3_1 = {
    titulo: "Del siguiente monomio: “7m²n” Identifica el coeficiente",
    pasos: [
        {   tipo: "numero",
            valor: "7", descripcion: "Escanea únicamente el número (coeficiente)." }
    ],
    validacionFinal: ["7"]
};
const actividad_2_3_2 = {
    titulo: "Observa el siguiente monomio: “3a²” Identifica la variable",
    pasos: [
        {
            tipo: "variable",
            valor: "a",
            descripcion: "Escanea únicamente la letra del monomio (variable)."
        }
    ],
    validacionFinal: ["a"]
};
const actividad_2_3_3 = {
    titulo: "Del monomio “7m²” identifica el exponente",
    pasos: [
        {
            tipo: "numero",
            valor: "2",
            descripcion: "Escanea únicamente el bloque del número que corresponde al exponente (2)."
        }
    ],
    validacionFinal: ["2"]
};
const actividad_2_3_4 = {
    titulo: "Identifica el grado del monomio “7m²n”",
    pasos: [
        {
            tipo: "numero",
            valor: "3",
            descripcion: "Escanea el número que representa su grado (3)."
        }
    ],
    validacionFinal: ["numero"]
};
const actividad_2_4_1 = {
    titulo: "“Cada cuaderno cuesta 9 pesos. Si compras n cuadernos, ¿el costo total es?” Representalo matemáticamente",
    pasos: [
        { tipo: "numero",valor:"9", descripcion: "Escanea el número que representa el precio de cada cuaderno (ejemplo 9)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa la cantidad de cuadernos (ejemplo n)." }
    ],
    validacionFinal: ["9", "variable"]
};
const actividad_2_4_2 = {
    titulo: "El perímetro de un rectángulo de lados a y b se expresa como:",
    pasos: [
        { tipo: "numero", valor:"2", descripcion: "Escanea el coeficiente del primer lado (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa el primer lado (ejemplo a)." },
        { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },
        { tipo: "numero", valor:"2", descripcion: "Escanea el coeficiente del segundo lado (ejemplo 2)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa el segundo lado (ejemplo b)." }
    ],
    validacionFinal: ["2", "variable", "operador", "2", "variable"]
};
const actividad_2_4_3 = {
    titulo: "Situación real: Cada boleto cuesta 7 pesos. ¿Si se venden n boletos, la expresión es?",
    pasos: [
        { tipo: "numero", valor:"7", descripcion: "Escanea el precio de cada boleto (ejemplo 7)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa el número de boletos vendidos (ejemplo n)." }
    ],
    validacionFinal: ["7", "variable"]
};
const actividad_2_4_4 = {
    titulo: "Ingresos por venta de productos $8 por playera, $6 por gorra, $4 de ganancia fija, ¿la expresión algebraica total es?",
    pasos: [
        { tipo: "numero", descripcion: "Escanea el coeficiente que representa el ingreso por cada playera (ejemplo 8)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa la cantidad de playeras (ejemplo y)." },

        { tipo: "operador", valor: "plus", descripcion: "Escanea el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea el coeficiente que representa el ingreso por cada gorra (ejemplo 6)." },
        { tipo: "variable", descripcion: "Escanea la variable que representa la cantidad de gorras (ejemplo z)." },

        { tipo: "operador", valor: "plus", descripcion: "Escanea nuevamente el operador suma (+)." },

        { tipo: "numero", descripcion: "Escanea la ganancia fija del día (ejemplo 4)." }
    ],
    validacionFinal: [
        "numero", "variable", "operador",
        "numero", "variable", "operador",
        "numero"
    ]
};



export const ACTIVIDADES_T2 = {
    "2.1": [
    actividad_2_1_1,
    actividad_2_1_2,
    actividad_2_1_3,
    actividad_2_1_4,
    actividad_2_1_5,

  ],
  "2.2": [
    actividad_2_2_1,
    actividad_2_2_2,
    actividad_2_2_3,
    actividad_2_2_4,
    ],
 "2.3":[
    actividad_2_3_1,
    actividad_2_3_2,
    actividad_2_3_3,
    actividad_2_3_4,
    ],
 "2.4":[
    actividad_2_4_1,
    actividad_2_4_2,
    actividad_2_4_3,
    actividad_2_4_4,
 ]

};