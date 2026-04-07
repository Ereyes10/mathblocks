// ==========================================================
// ACTIVIDADES PROBAR — SUBTEMA 1.1
// Conceptos aritméticos básicos en lenguaje algebraico
// ==========================================================

const ACTIVIDADES_1_1 = [

    {
        id: "1.1.1",
        enunciado: "Escribe la expresión: “La suma de un número mas 8” ",
        pista: "Escanea los bloques para formar la expresión, y luego da clic en el botón Comprobar",
        validacion: ["variable", "plus", "8"]
    },

    {
        id: "1.1.2",
        enunciado: "Escribe la expresión: “La diferencia entre un número y 9”.",
        pista: "¿Facil no? intentalo ",
        validacion: ["variable", "minus", "9"]
    },

    {
        id: "1.1.3",
        enunciado: "Escribe la expresión: “El triple de un número”.",
        pista: "¿Acaso estamos hablando del prodcuto?",
        validacion: [
            ["3", "mul", "variable"],
            ["3", "variable"],
        ]
    },

    {
        id: "1.1.4",
        enunciado: "Escribe la expresión: “La mitad de un número”.",
        pista: "Se ve interesante",
        validacion: [
            ["variable", "div", "2"],
            ["1/2","variable"],
            ["1/2","mul","variable"],
        ]
    },

    {
        id: "1.1.5",
        enunciado: "Escribe la expresión: “Un número dividido entre 8”.",
        pista: "Me suena a cociente",
        validacion: ["variable", "div", "8"]
    },

    {
        id: "1.1.6",
        enunciado: "Construye una expresión con paréntesis: (a + b).",
        pista: "Utiliza paréntesis izquierdo, variable, operador suma, variable y paréntesis derecho.",
        validacion: ["parIzq", "variable", "plus", "variable", "parDer"]
    }
];

// ==========================================================
// ACTIVIDADES PROBAR — SUBTEMA 1.2
// Clasificación de expresiones algebraicas
// ==========================================================

const ACTIVIDADES_1_2 = [

   {
        id: "1.2.1",
        enunciado: "¿Qué símbolo se usa para representar 'dos manzanas más dos naranjas'?",
        pista: "Escanea un solo bloque.",
        validacion: ["plus"]
    },

    {
        id: "1.2.2",
        enunciado: "¿Qué símbolo representa 2 pesos menos 1?",
        pista: "Escanea un solo bloque.",
        validacion: ["minus"]
    },

    {
        id: "1.2.3",
        enunciado: "¿Qué símbolo se usa para indicar que dos cantidades son iguales?",
        pista: "Busca el bloque",
        validacion: ["eq"]
    },

    {
        id: "1.2.4",
        enunciado: "¿Qué símbolo indica Juan es mayor que Samuel?",
        pista: "Escanea el bloque.",
        validacion: ["gt"]
    },

    {
        id: "1.2.5",
        enunciado: "¿Qué símbolo indica Ana es menor que Sugey?",
        pista: "Escanea el bloque.",
        validacion: ["lt"]
    },

    {
        id: "1.2.6",
        enunciado: "¿Qué símbolo representa el doble de una cantidad?",
        pista: "Busca el bloque con el punto o cruz de multiplicar.",
        validacion: ["mul"]
    },

    {
        id: "1.2.7",
        enunciado: "¿Qué símbolo se usa para representar la mitad de un pastel?",
        pista: "Escanea solo bloque.",
        validacion: ["div"]
    },
    {
        id: "1.2.8",
        enunciado: "¿Qué símbolo se usa para representar que dos cantidades son distintas?",
        pista: "Escanea el bloque correspondiente.",
        validacion: ["neq"]
    },
    {
        id: "1.2.9",
        enunciado: "Representa la frase con letras: “Un número es mayor que 4”.",
        pista: "Utiliza el simbolo adecuado.",
        validacion: ["gt"]
    },
    {
        id: "1.2.10",
        enunciado: "Representa la frase con letras: “Un número es mayor que 4”.",
        pista: "Utiliza el simbolo adecuado.",
        validacion: ["gt"]
    },
    {
        id: "1.2.12",
        enunciado: "Representa la frase con letras: “Un número es igual a 1”.",
        pista: "Utiliza el símbolo adecuado.",
        validacion: ["eq"]
    },
    {
        id: "1.2.13",
        enunciado: "Representa la frase con letras:“La cantidad de lápices es igual al doble de cuadernos”.",
        pista: "Utiliza el símbolo adecuado.",
        validacion:[
            ["variable","eq","2","variable"],
            ["variable","eq","2","mul","variable"]
        ]
    },
    
];

// ==========================================================
//     ACTIVIDADES PARA EL TEMA 1.3 — Concepto de incógnita
// ==========================================================

const ACTIVIDADES_1_3 = [

        {
            id: "1.3.1",
            enunciado: "Identifica la incógnita en la expresión: x + 5 = 9",
            pista: "Escanea la letra desconocida.",
            validacion: ["x"]
        },

        {
            id: "1.3.2",
            enunciado: "¿Cuál es la incógnita en la ecuación: 10 = 3y – 2?",
            pista: "Busca la letra que representa al valor a encontrar.",
            validacion: ["variable"]
        },

        {
            id: "1.3.3",
            enunciado: "En la expresión: 4a = 19, identifica la incógnita.",
            pista: "La incógnita siempre es una letra.",
            validacion: ["variable"]
        },

        {
            id: "1.3.4",
            enunciado: "Observa la expresión: m + n = 20. Escanea una incógnita.",
            pista: "Ambas letras representan valores desconocidos.",
            validacion: [
                ["m"], ["n"]
            ]     
        },
        {
            id: "1.3.5",
            enunciado: "Plantea una ecuación con una incógnita para representar: “Al sumar un número con 2 se obtiene 7”.",
            pista: "Forma la expresión completa.",
            validacion:["variable", "plus", "2", "eq", "7"]
   
        },
        {
            id: "1.3.6",
            enunciado: "Plantea una ecuación con una incógnita para representar: “Al restar 3 a un número se obtiene 9”.",
            pista: "Forma la expresión completa.",
            validacion: [
                ["variable", "minus", "3", "eq", "9"],
                ["3", "minus", "variable", "eq", "9"]
            ]      
        },
        {
            id: "1.3.7",
            enunciado: "Plantea una ecuación con una incógnita para representar: “El doble de un número es igual a 8”.",
            pista: "Utiliza el número 2 junto con una letra para representar el doble de un número, y completa con el signo igual seguido de 14.",
            validacion: [
                ["2", "variable", "eq", "8"],
                ["2", "mul", "variable", "eq", "8"],
            ]
        }
];

// ==========================================================
//  ACTIVIDADES PARA EL TEMA 1.4 — Términos y expresiones algebraicas
// ==========================================================

const ACTIVIDADES_1_4 =  [

        // ============================================
        // 1.4.1 — Identificar un término algebraico
        // ============================================
        {
            id: "1.4.1",
            enunciado: "Indica cuál es el término algebraico de la siguiente expresión: 8n − 5",
            pista: "Escanea el término correcto.",
            validacion: [
                
                ["8", "n"],                // 8m
                ["8", "mul", "n"],         // 8 × m
            ]
        },

        // ============================================
        // 1.4.2 — Identificar término constante
        // ============================================
        {
            id: "1.4.2",
            enunciado: "Indica cuál es el término constante en la expresión: 7x + 3",
            pista: "Escanea el término correcto.",
            validacion: [
                ["3"]
            ]
        },

        // ============================================
        // 1.4.3 — Identificar coeficiente
        // ============================================
        {
            id: "1.4.3",
            enunciado: "Indica cuál es el coeficiente del término algebraico: 9y",
            pista: "¿El coeficiente es?.",
            validacion: [
                ["9"],
            ]
        },

        // ============================================
        // 1.4.4 — Identificar segundo término
        // ============================================
        {
            id: "1.4.4",
            enunciado: "Identifica el segundo término de la expresión: 6m + 3n − 8 + p",
            pista: "El segundo término es el que contiene:",
            validacion: [
                ["3", "n"], 
                ["n", "3"],
                ["3", "mul", "n"],
                ["n", "mul", "3"],
                ["plus","3", "n",]
            ]
        },

        // ============================================
        // 1.4.5 — Identificar parte literal
        // ============================================
        {
            id: "1.4.5",
            enunciado: "Identifica coeficiente del segundo termino de la expresión: 12xy + 5m",
            pista: "El coeficietne del término es:",
            validacion: [
                ["5"]                   
            ]
        },

        // ============================================
        // 1.4.6 — Identificar coeficiente del segundo término
        // ============================================
        {
            id: "1.4.6",
            enunciado: "Identifica el coeficiente del segundo término en la expresión: 4x + 7y − 3",
            pista: "El coeficiente es:",
            validacion: [
                ["7"]
            ]
        },

        // ============================================
        // 1.4.7 — Identificar parte literal del segundo término
        // ============================================
        {
            id: "1.4.7",
            enunciado: "Identifica la parte literal del segundo término en la expresión: 9k − 4p + 2",
            pista: "La letra que acompaña es.",
            validacion: [
                ["p"]           
            ]
        }

];

const ACTIVIDADES_1_5 =  [
    {
    id: "1.5.1",
    enunciado: "Traduce la frase: “Dos pesos menos que lo que tiene Sofía”.",
    pista: "Representa lo que tiene Sofía con una letra.",
    validacion: [
        ["variable", "minus", "2"]
    ]
},
{
    id: "1.5.2",
    enunciado: "Traduce la frase: “Cinco más que el doble de un número”.",
    pista: "Forma el doble del número y luego súmale 5.",
    validacion: [
        ["2", "mul", "variable", "plus", "5"],
        ["2", "variable", "plus", "5"],
        ["5", "plus", "2", "variable"],
        ["5", "plus", "2", "mul", "variable"]
    ]
},

{
    id: "1.5.3",
    enunciado: "En una caja hay 7 dulces y agregas x más. ¿Cuántos dulces hay?",
    pista: "Forma la expresión matematica.",
    validacion: [
        ["7", "plus", "variable"],        
        ["variable", "plus", "7"]
    ]
},
{
    id: "1.5.4",
    enunciado: "Una libreta cuesta n pesos y un lápiz vale 4 pesos. Escribe una expresión para comprar 3 libretas y 2 lápices.",
    pista: "Tu puedes.",
    validacion: [
        ["3", "variable", "plus", "8"],
        ["3", "mul", "variable", "plus", "8"],
    ]
},
{
    id: "1.5.5",
    enunciado: "Un taxi cobra 9 pesos de base más 8 pesos por kilómetro. Escribe la expresión del costo si se recorren n kilómetros.",
    pista: "Suma la tarifa base con el costo por cada kilómetro recorrido.",
    validacion: [
        ["9", "plus", "8", "variable"],
        ["9", "plus", "8", "mul", "variable"],
        ["8", "variable", "plus", "9",],
        ["8", "mul","variable", "plus", "9"],

    ]
},
{
    id: "1.5.6",
    enunciado: "Traduce la frase: “La tercera parte de la suma de un número y 7”.",
    pista: "Puedes usar el bloque de fracción.",
    validacion: [
        ["1_3", "parIzq", "variable", "plus", "7","parDer"],
        ["parIzq", "variable", "plus", "7","parDer", "div","3"]
    ]
}


];


export const ACTIVIDADES_T1 = {
  "1.1": ACTIVIDADES_1_1,
  "1.2": ACTIVIDADES_1_2,
  "1.3": ACTIVIDADES_1_3,
  "1.4": ACTIVIDADES_1_4,
  "1.5": ACTIVIDADES_1_5,
};


