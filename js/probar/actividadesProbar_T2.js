const ACTIVIDADES_2_1 =  [

{
    id: "2.1.1",
    enunciado: "Traduce la frase: “Forma una expresión algebráica de un término”.",
    pista: "Suena muy sencillo",
    validacion: [
        ["numero", "variable"],
        ["variable"],
         ["numero", "mul", "variable"],
    ]
},

{
    id: "2.1.2",
    enunciado: "Genera la expresión algebráica: “cinco veces un numero desconocido”.",
    pista: "me suena a producto",
    validacion: [
        ["5", "mul", "variable"],
        ["5", "variable"],
    ]
},

{
    id: "2.1.3",
    enunciado: "Genera la expresión algebráica: “ocho veces un numero desconocido más tres”.",
    pista: "Fácil ¿verdad?",
    validacion: [
        ["8", "mul", "variable","plus","3"],
        ["8", "variable","plus","3"],
        ]
    },

{
    id: "2.1.4",
    enunciado: "Escanea la opción que corresponde a una expresión algebráica: a) 2x - 5 b) -4 c) 10x + 2 = 10",
    pista: "Recuerda las características de un expresión algebráica",
    validacion: [
        ["2", "mul", "variable","minus","5"],
        ]
    },

    {
    id: "2.1.5",
    enunciado: "Forma una expresión de un término algebráico menos un término independiente ",
    pista: "Esto ya lo vimos en el apartado aprender y es muy fácil",
    validacion: [
        ["variable", "minus", "numero"],
        ["numero","variable", "minus", "numero"],
        ]
    }


    ];

    // ==========================================================
// ACTIVIDADES PROBAR — SUBTEMA 2.2
// Clasificación de expresiones algebraicas
// ==========================================================

    const ACTIVIDADES_2_2 =  [

{
    id: "2.2.1",
    enunciado: "Forma un monomio positivo”.",
    pista: "Suena muy sencillo",
    validacion: [
        ["numero", "variable"],
        ["variable"],
        ["numero"],
        
    ]
},

{
    id: "2.2.2",
    enunciado: "Forma un monomio negativo",
    pista: "Esto ya lo vimos en el apartado aprender y es muy fácil",
    validacion: [
        ["minus", "numero", "variable"],
        ["minus", "variable"],
     
        ]
    },

    {
    id: "2.2.3",
    enunciado: "Forma un binomio",
    pista: "Fácil ¿verdad?",
    validacion: [
        ["variable", "plus", "numero"],
        ["variable", "minus", "numero"],
        ["numero", "plus","numero"],
        
        ["numero", "minus","numero"],
        ["numero", "plus","variable"],
        ["numero", "minus","variable"],
        ["numero", "variable", "plus", "numero"],
        ["numero", "variable", "minus","numero"],
        ["numero", "variable", "plus","variable", "numero"],
        ["numero", "variable", "minus","variable", "numero"],
        ["minus","numero", "plus","numero"],
        ["minus","numero", "minus","numero"],
        ["minus","numero", "plus","variable"],
        ["minus","numero", "minus","variable"],
        ["minus", "variable", "plus", "numero"],
        ["minus", "variable", "minus", "numero"],
        ["minus", "numero", "variable", "plus", "numero"],
        ["minus", "numero", "variable", "minus","numero"],
        ["minus", "numero", "variable", "plus","variable", "numero"],
        ["minus", "numero", "variable", "minus","variable", "numero"],
        
        ]
    }, 

    {
    id: "2.2.4",
    enunciado: "Escanea la expresión que representa un trinomio: a) 2x  b) -4x + 2  c) 6x + y - 2",
    pista: "Fácil ¿verdad?",
    validacion: [
        ["6", "x", "plus", "y", "minus", "2"],
        
        ]
    },

    {
    id: "2.2.5",
    enunciado: "Escanea la expresión que representa un polinomio: a) -x + 2  b) 4x + 5  c) 3x + y - 2z + 1",
    pista: "Es muy fácil identificar un polinomio",
    validacion: [
        ["3", "x", "plus", "y", "minus", "2", "z", "plus", "1"],
        ]
    }

     ]; 

 const ACTIVIDADES_2_3 =  [

{
    id: "2.3.1",
    enunciado: "Del siguiente monomio escanea el elemento que pertenece al coeficiente: -5xy˄2”.",
    pista: "¿Facil no? intentalo",
    validacion: [

        ["minus", "5"],
        
    ]
},

{
    id: "2.3.2",
    enunciado: "Del siguiente monomio escanea el elemento que pertenece a las variables: 8xy˄3”.",
    pista: "Escanea los bloques correspondientes",
    validacion: [
        ["x", "y"],
        
    ]
},

{
    id: "2.3.3",
    enunciado: "Del siguiente monomio escanea el elemento que pertenece al exponente: -5xy”.",
    pista: "Escanea el bloque correspondiente",
    validacion: [
        ["1"],
        
    ]
},

{
    id: "2.3.4",
    enunciado: "Del siguiente monomio escanea el elemento que pertenece al grado: 7x˄2y˄3z”.",
    pista: "Escanea el bloque correspondiente",
    validacion: [
        ["6"],
        
    ]
},

{
    id: "2.3.5",
    enunciado: "Del siguiente monomio escanea su signo: -2x˄2”.",
    pista: "Escanea el bloque correspondiente",
    validacion: [
        ["minus"],
        
    ]
},
]; 
const ACTIVIDADES_2_4 =  [

{
    id: "2.4.1",
    enunciado: "Cada lápiz cuesta 5 pesos. Si compras x lapices, ¿cuál es el costo total?”.",
    pista: "Suena muy sencillo",
    validacion: [
        ["5", "x"],
        
    ]
},

{
    id: "2.4.2",
    enunciado: "Un terreno tiene un largo de x metros y un ancho de 7 metros. ¿Cuál es su área?”.",
    pista: "¿Facil no? intentalo",
    validacion: [
        ["7", "x"],

        
    ]
},


{
    id: "2.4.3",
    enunciado: "Una bolsa contiene x canicas. Si tienes 6 bolsas iguales, ¿cuántas canicas hay en total?”.",
    pista: "Suena muy sencillo",
    validacion: [
        ["6", "x"],
        
    ]
},

{
    id: "2.4.4",
    enunciado: "Un niño tiene x caramelos y le regalan 7 más. ¿Cuántos caramelos tiene ahora?”.",
    pista: "¿Facil no? intentalo",
    validacion: [
        ["x", "plus", "7"],
        
    ]
},

{
    id: "2.4.5",
    enunciado: "Un jardín tiene 2 filas de plantas x rosas y y tulipanes ¿Cuántas plantas hay en total?”.",
    pista: "escanea las variables correspondientes",
    validacion: [
        ["x", "plus", "y"],
        
    ]
},
];
export const ACTIVIDADES_T2 = {
  "2.1": ACTIVIDADES_2_1,
  "2.2": ACTIVIDADES_2_2,
  "2.3": ACTIVIDADES_2_3,
  "2.4": ACTIVIDADES_2_4,
  
};