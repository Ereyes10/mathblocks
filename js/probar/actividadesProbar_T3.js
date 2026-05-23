const ACTIVIDADES_3_1_1 =  [

{
    id: "3.1.1.1",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (x)(x⁴)?",
    pista: "Recuerda que la base es la misma por lo tanto solo hacemos operación con los exponentes",
    validacion: [
        ["x5"], ["exp(x,5)"]
        
    ]
},

{
    id: "3.1.1.2",
    enunciado: "Resuelve la operación: (a⁴)(a²)",
    pista: "Recuerda aplicar la ley de los exponentes para multiplicación",
    validacion: [
       ["exp(a,6)"]
        
    ]
},

{
    id: "3.1.1.3",
    enunciado: "¿Cuál es el resultado de la siguiente multiplicación de monomios: (7y)(2y⁴)?",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
       ["doble(1,4)", "exp(y,5)"]
        
    ]
},

{
    id: "3.1.1.4",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (8b²)(5b³)?",
    pista: "Multiplica coeficientes y suma exponentes",
    validacion: [
      ["doble(4,0)", "exp(b,5)"] 
        
    ]
},

{
    id: "3.1.1.5",
    enunciado: "Resuelve: (3x⁰)(3x²)?",
    pista: "Recuerda que toda base elevada a 0 vale una unidad",
    validacion: [
       ["9", "x2"], ["9", "exp(x,2)"]
        
    ]
},

];

const ACTIVIDADES_3_1_2 =  [

{
    id: "3.1.2.1",
    enunciado: "Divide las siguientes potencias con la misma base: x⁸ ÷ x²",
    pista: "Recuerda que como es la misma base solo hacemos operación con los exponentes",
    validacion: [
        ["x6"], ["exp(x,6)"]
    ]
},

{
    id: "3.1.2.2",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (8x⁶) ÷ (2x³)?",
    pista: "Primero divide los números y luego aplica la ley de exponentes",
    validacion: [
        ["4", "x3"], ["4", "exp(x,3)"]
    ]
},

{
    id: "3.1.2.3",
    enunciado: "Resuelve la siguiente división: (6b⁶) ÷ (6b³)",
    pista: "Conserva la base y resta los exponentes",
    validacion: [
        ["exp(b,3)"], ["1","exp(b,3)"]
    ]
},

{
    id: "3.1.2.4",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (20x⁴) ÷ (5x⁰)?",
    pista: "Recuerda que toda base elevada a 0 vale 1",
    validacion: [
         ["4", "x4"], ["4", "exp(x,4)"]
    ]
},

{
    id: "3.1.2.5",
    enunciado: "Resuelve la siguiente operación: (15x⁸) ÷ (3x⁵)",
    pista: "Conserva la base y resta los exponentes",
    validacion: [
        ["5", "x3"], ["5", "exp(x,3)"]
    ]
},

];

const ACTIVIDADES_3_1_3 =  [

{
    id: "3.1.3.1",
    enunciado: "¿Cuál es el resultado de la siguiente expresión: (x)³?",
    pista: "¿Recuerdas lo que es un producto? solo hacemos un producto con los exponentes",
    validacion: [

         ["x3"], ["exp(x,3)"]
    ]
       

},
    
{
    id: "3.1.3.2",
    enunciado: "Resuelve la siguiente operación: (x³)²",
    pista: "Cuando una potencia está elevada a otra potencia, los exponentes se multiplican",
    validacion: [

         ["x6"], ["exp(x,6)"]
    ]
       

},

{
    id: "3.1.3.3",
    enunciado: "Resuelve: (a²)⁴?",
    pista: "Multiplica los exponentes",
    validacion: [

         ["exp(a,8)"]
    ]
       

},

{
    id: "3.1.3.4",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (c²)²?",
    pista: "Eleva el coeficiente y multiplica los exponentes",
    validacion: [

         ["exp(c,4)"]
    ]
       

},

{
    id: "3.1.3.5",
    enunciado: "Resuelve la siguiente operación: (y⁰)³",
    pista: "Recuerda que y⁰ vale 1 antes de resolver",
    validacion: [

         ["1"]
    ]
       

},

];

const ACTIVIDADES_3_1_4 =  [

{
    id: "3.1.4.1",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (2x)²?",
    pista: "La potencia se aplica a cada factor del producto",
    validacion: [
         ["4", "x2"],["4", "exp(x,2)"]
    ]
},

{
    id: "3.1.4.2",
    enunciado: "Resuelve: (2x²)³",
    pista: "Eleva cada factor del producto por separado",
    validacion: [
          ["8", "x6"], ["8", "exp(x,6)"]
      
    ]
},

{
    id: "3.1.4.3",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (3x²)²?",
    pista: "Recuerda que debes multiplicar los exponentes",
    validacion: [
        ["9", "x4"], ["9", "exp(x,4)"]
      
    ]
},

{
    id: "3.1.4.4",
    enunciado: "Resuelve la siguiente operación: (2x⁰)²",
    pista: "y⁰ equivale a 1 antes de aplicar la potencia",
    validacion: [
        ["4"]
      
    ]
},


{
    id: "3.1.4.5",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (2x³)²?",
    pista: "Multiplica el exponente de la variable por el exponente exterior",
    validacion: [
        ["4", "x6"], ["4", "exp(x,6)"],
      
    ]
},

];

const ACTIVIDADES_3_1_5 =  [

{
    id: "3.1.5.1",
    enunciado: "Simplifica la expresión: x⁰",
    pista: "Toda base distinta de cero elevada a 0 vale 1",
    validacion: [
        ["1"]
      
    ]
},

{
    id: "3.1.5.2",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (5x)¹?",
    pista: "Toda variable elevada a 1 conserva su mismo valor",
    validacion: [
       ["5","x"]
      
    ]
},

{
    id: "3.1.5.3",
    enunciado: "Resuelve la siguiente multiplicación: (3x⁰)(2x¹)?",
    pista: "x⁰ vale 1 y x¹ conserva la variable",
    validacion: [
       ["6","x"]
      
    ]
},

{
    id: "3.1.5.4",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (y)³",
    pista: "Primero conserva y¹ y luego aplica la potencia",
    validacion: [
       ["exp(y,3)"]
      
    ]
},

{
    id: "3.1.5.5",
    enunciado: "Resuelve la siguiente operación: (4b⁰)²",
    pista: "b⁰ vale 1 antes de elevar al cuadrado",
    validacion: [
        ["doble(1,6)"]
      
    ]
},

];

const ACTIVIDADES_3_2_1 =  [

{
    id: "3.2.1.1",
    enunciado: "Resuelve el producto: (-2x)(x⁴)?",
    pista: "Recuerda que la ley de los signos aplica principalmente en multiplicaciones y divisiones",
    validacion: [
        ["minus","2","x5"], ["minus","2","exp(x,5)"]
        
    ]

},

{
    id: "3.2.1.2",
    enunciado: "Resuelve la siguiente multiplicación: (-3a²)(2a³)",
    pista: "Multiplica coeficientes, aplica la ley de los signos y suma exponentes",
    validacion: [
        ["minus","6","exp(a,5)"]
    ]
},

{
    id: "3.2.1.3",
    enunciado: "¿Cuál es el resultado del producto: (-4x)(-2x²)?",
    pista: "Recuerda que negativo por negativo da positivo",
    validacion: [
        ["plus","8","x3"], ["plus","8","exp(x,3)"], ["8","x3"], ["8","exp(x,3)"]
    ]
},

{
    id: "3.2.1.4",
    enunciado: "Multiplica correctamente: (5y³)(-3y²)",
    pista: "Primero aplica la ley de los signos y después trabaja los exponentes",
    validacion: [
        ["minus", "doble(1,5)", "exp(y,5)"]
    ]
},

{
    id: "3.2.1.5",
    enunciado: "Obtén el resultado de: (-6b²)(-2b⁴)",
    pista: "Dos signos negativos producen un resultado positivo",
    validacion: [
        ["plus", "doble(1,2)","exp(b,6)"], ["doble(1,2)","exp(b,6)"]
    ]
},

];

const ACTIVIDADES_3_2_2 =  [

    {
    id: "3.2.2.1",
    enunciado: "Resuelve la siguiente división: (-12x⁵) ÷ (3x²)",
    pista: "Divide coeficientes, aplica la ley de signos y resta exponentes",
    validacion: [
        ["minus", "4", "x3"], ["minus", "4", "exp(x,3)"]
    ]
},

{
    id: "3.2.2.2",
    enunciado: "¿Cuál es el resultado de: (-18a⁶) ÷ (-3a²)?",
    pista: "Negativo entre negativo da positivo",
    validacion: [
        ["plus", "6", "exp(a,4)"], ["6", "exp(a,4)"]
    ]
},

{
    id: "3.2.2.3",
    enunciado: "Realiza la siguiente operación: (20y⁴) ÷ (-5y)",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
        ["minus", "4", "exp(y,3)"]
    ]
},

{
    id: "3.2.2.4",
    enunciado: "Obtén el resultado de la división: (-16b³) ÷ (4b⁰)",
    pista: "b⁰ vale 1 antes de resolver la división",
    validacion: [
        ["minus", "4","exp(b,3)"]
    ]
},

{
    id: "3.2.2.5",
    enunciado: "Resuelve correctamente: (-24z⁷) ÷ (-6z²)",
    pista: "Divide los coeficientes y resta los exponentes de la misma base",
    validacion: [
        ["plus", "4", "exp(z,5)"], ["4", "exp(z,5)"]
    ]
}

];

const ACTIVIDADES_3_3_1 =  [

    {
    id: "3.3.1.1",
    enunciado: "Resuelve la siguiente suma de monomios: 3x² + 5x²",
    pista: "Solo se suman los coeficientes porque las variables y exponentes son iguales",
    validacion: [
        ["8", "x2"], ["8", "exp(x,2)"]
    ]
}, 

{
    id: "3.3.1.2",
    enunciado: "¿Cuál es el resultado de la operación: 7a³ - 2a³?",
    pista: "Los monomios semejantes conservan la misma parte literal",
    validacion: [
        ["5", "exp(a,3)"]
    ]
}, 

{
    id: "3.3.1.3",
    enunciado: "Simplifica la expresión: -4y⁴ + 9y⁴",
    pista: "Suma algebraicamente los coeficientes",
    validacion: [
        ["5", "exp(y,4)"]
    ]
}, 

{
    id: "3.3.1.4",
     enunciado: "Realiza la operación: 12b² - 15b²",
    pista: "Recuerda aplicar correctamente la ley de signos",
    validacion: [
        ["minus","3","exp(b,2)"]
    ]
    
}, 

{
    id: "3.3.1.5",
      enunciado: "Obtén el resultado de: -6z + (-8z)",
    pista: "Cuando ambos términos son negativos, se suman y el signo permanece",
    validacion: [
       ["minus", "14", "exp(z,1)"]
    ]
    
}, 


];

const ACTIVIDADES_3_3_2 =  [
{
    id: "3.3.2.1",
    enunciado: "Resuelve la siguiente multiplicación de monomios: (3x²)(4x³)",
    pista: "Multiplica coeficientes y suma exponentes de la misma base",
    validacion: [
        ["doble(1,2)","x5"], ["doble(1,2)","exp(x,5)"], ["plus","doble(1,2)","x5"], ["plus","doble(1,2)","exp(x,5)"]
    ]
},

{
    id: "3.3.2.2",
    enunciado: "¿Cuál es el resultado de: (-2a⁴)(5a²)?",
    pista: "Aplica primero la ley de signos y después la ley de exponentes",
    validacion: [
        ["minus", "doble(1,0)", "exp(a,6)"]
    ]
},

{
    id: "3.3.2.3",
    enunciado: "Multiplica correctamente los siguientes monomios: (6y)(-3y³)",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
        ["minus", "doble(1.8)", "exp(y,4)"]
    ]
},

{
    id: "3.3.2.4",
    enunciado: "Obtén el resultado de la operación: (-4b²)(-2b⁵)",
    pista: "Negativo por negativo da positivo",
    validacion: [
        ["8","exp(b,7)"], ["plus","8","exp(b,7)"]
    ]
},

{
    id: "3.3.2.5",
    enunciado: "Realiza la multiplicación: (7z⁰)(3z⁴)",
    pista: "z⁰ vale 1 antes de realizar la multiplicación",
    validacion: [
        ["doble(2,1)","exp(z,4)"], ["plus","doble(2,1)","exp(z,4)"]
    ]
}
];

const ACTIVIDADES_3_3_3 =  [
    {
    id: "3.3.3.1",
    enunciado: "Resuelve la siguiente división de monomios: (12x⁵) ÷ (3x²)",
    pista: "Divide coeficientes y resta exponentes de la misma base",
    validacion: [
        ["4","x3"], ["4","exp(x,3)"], ["plus","4","x3"], ["plus","4","exp(x,3)"]
    ]
},

{
    id: "3.3.3.2",
    enunciado: "¿Cuál es el resultado de: (-20a⁶) ÷ (5a²)?",
    pista: "Aplica la ley de signos y después resta exponentes",
    validacion: [
        ["minus", "4", "exp(a,4)"]
    ]
},

{
    id: "3.3.3.3",
    enunciado: "Realiza la operación: (18y⁴) ÷ (-6y)",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
        ["minus", "3", "exp(y,3)"]
    ]
},

{
    id: "3.3.3.4",
    enunciado: "Obtén el resultado de la división: (-16b⁷) ÷ (-2b³)",
    pista: "Negativo entre negativo da positivo",
    validacion: [
        ["8","exp(b,4)"], ["plus","8","exp(b,4)"]
    ]
},

{
    id: "3.3.3.5",
    enunciado: "Resuelve correctamente: (21z⁵) ÷ (7z⁰)",
    pista: "z⁰ vale 1 antes de realizar la división",
    validacion: [
        ["3","exp(z,5)"], ["plus","3","exp(z,5)"]
    ]
}
];

const ACTIVIDADES_3_4_1 =  [

{
    id: "3.4.1.1",
    enunciado: "Identifica el factor común de la expresión: 12x + 18x + 6x",
    pista: "Busca el mayor número que divide a todos los coeficientes y la variable común",
    validacion: [
        ["6", "x"],["6","exp(x,1)"]
    ]
},

{
    id: "3.4.1.2",
    enunciado: "¿Cuál es el factor común de la siguiente expresión: 15a² + 20a² + 5a²?",
    pista: "Observa el máximo común divisor de los coeficientes y la menor potencia de la variable",
    validacion: [
        ["5","exp(a,2)"]
    ]
},

{
    id: "3.4.1.3",
    enunciado: "Encuentra el factor común de: 24y³ - 16y³ + 8y³",
    pista: "Todos los términos tienen la misma variable y exponente",
    validacion: [
        ["8","exp(y,3)"]
    ]
},

{
    id: "3.4.1.4",
    enunciado: "Obtén el factor común de la expresión: 14b² + 21b² - 7b²",
    pista: "Busca el número mayor que divide a todos los coeficientes",
    validacion: [
        ["7","exp(b,2)"]
    ]
},

{
    id: "3.4.1.5",
    enunciado: "Identifica el factor común de la operación: 30z⁴ + 45z⁴ + 15z⁴",
    pista: "Recuerda considerar tanto coeficientes como variables",
    validacion: [
        ["doble(1,5)","exp(z,4)"]
    ]
}
];

const ACTIVIDADES_3_4_2 =  [
{
    id: "3.4.2.1",
    enunciado: "Determina el factor común de la expresión: 18a² + 30a",
    pista: "Busca el máximo común divisor de los coeficientes y la variable con menor exponente",
    validacion: [
        ["6","exp(a,1)"]
    ]
},

{
    id: "3.4.2.2",
    enunciado: "Identifica el factor común de: 24x³ + 36x²",
    pista: "Observa el número mayor que divide ambos coeficientes y la menor potencia de x",
    validacion: [
        ["doble(1,2)","x2"], ["doble(1,2)","exp(x,2)"]
    ]
},

{
    id: "3.4.2.3",
    enunciado: "Obtén el factor común de: −20y² − 45y³",
    pista: "Encuentra el MCD de los coeficientes y la menor potencia de y",
    validacion: [
        ["5","exp(y,2)"]
    ]
},

{
    id: "3.4.2.4",
    enunciado: "Encuentra el factor común de: 14b⁴ + 21b²",
    pista: "Busca el número y la variable común con menor exponente",
    validacion: [
        ["7","exp(b,2)"]
    ]
},

{
    id: "3.4.2.5",
    enunciado: "Determina el factor común de: 32z⁵ − 16z³ + 48z²",
    pista: "Todos los términos comparten un número y una potencia de z",
    validacion: [
        ["doble(1,6)","exp(z,2)"]
    ]
}

];

const ACTIVIDADES_3_5_1 =  [

  {
    id: "3.5.1.1",
    enunciado: "Resuelve la siguiente suma de fracciones algebraicas: (3x / 5) + (2x / 5)",
    pista: "Cuando los denominadores son iguales, solo se suman los numeradores",
    validacion: [
        ["5","x","div","5"]
    ]
},
  
{
    id: "3.5.1.2",
    enunciado: "¿Cuál es el resultado de: (7a² / 4) - (3a² / 4)?",
    pista: "Conserva el denominador y resta los numeradores",
    validacion: [
        ["4","exp(a,2)","div","4"]
    ]
},

{
    id: "3.5.1.3",
    enunciado: "Realiza la operación: (5y³ / 6) + (7y³ / 6)",
    pista: "Suma únicamente los coeficientes del numerador",
    validacion: [
        ["doble(1,2)","exp(y,3)","div","6"]
    ]
},

{
    id: "3.5.1.4",
    enunciado: "Obtén el resultado de: (9b / 8) - (5b / 8)",
    pista: "El denominador permanece igual",
    validacion: [
        ["4","b","div","8"], ["4","exp(b,1)","div","8"], 
    ]
},

{
    id: "3.5.1.5",
    enunciado: "Resuelve correctamente: (4z² / 3) + (2z² / 3)",
    pista: "Primero suma los numeradores y luego simplifica si es posible",
    validacion: [
        ["6","exp(z,2)","div","3"]
    ]
}
];

const ACTIVIDADES_3_5_2 =  [
{
    id: "3.5.2.1",
    enunciado: "Resuelve la siguiente multiplicación de fracciones algebraicas: (2x / 3)(3x² / 4)",
    pista: "Multiplica numeradores entre sí y denominadores entre sí",
    validacion: [
        ["6","x3","div","doble(1,2)"], ["6","exp(x,3)","div","doble(1,2)"]
    ]
},

{
    id: "3.5.2.2",
    enunciado: "¿Cuál es el resultado de: (-5a² / 6)(3a / 2)?",
    pista: "Aplica la ley de signos y suma exponentes de la misma base",
    validacion: [
        ["minus","doble(1,5)","exp(a,3)","div","doble(1,2)"]
    ]
},
{
    id: "3.5.2.3",
    enunciado: "Realiza la operación: (4y³ / 5)(10y² / 8)",
    pista: "Multiplica coeficientes y suma exponentes",
    validacion: [
        ["doble(4,0)","exp(y,5)","div","doble(4,0)"]
    ]
},
{
    id: "3.5.2.4",
    enunciado: "Obtén el resultado de la multiplicación: (-3b / 7)(14b² / 9)",
    pista: "Simplifica la fracción al finalizar",
    validacion: [
        ["minus","doble(4,2)","exp(b,3)","div","doble(6,3)"]
    ]
},
{
    id: "3.5.2.5",
    enunciado: "Resuelve correctamente: (6z² / 11)(-2z / 3)",
    pista: "Multiplica numeradores y denominadores y después simplifica",
    validacion: [
        ["minus","doble(1,2)","exp(z,3)","div","doble(3,3)"]   
     ]
}

];

const ACTIVIDADES_3_5_3 =  [
    {
    id: "3.5.3.1",
    enunciado: "Resuelve la siguiente división de fracciones algebraicas: (6x² / 5) ÷ (3x / 2)",
    pista: "Convierte la división en multiplicación usando el recíproco",
    validacion: [
        ["doble(1,2)","x2","div","doble(1,5)","x"]
    ]
},
{
    id: "3.5.3.2",
    enunciado: "¿Cuál es el resultado de: (-8a³ / 7) ÷ (4a / 3)?",
    pista: "Multiplica por el inverso de la segunda fracción",
    validacion: [
        ["minus","doble(2,4)","exp(a,3)","div","doble(2,8)","a"]
    ]
},
{
    id: "3.5.3.3",
    enunciado: "Realiza la operación: (10y⁴ / 9) ÷ (5y² / 6)",
    pista: "Recuerda restar exponentes después de simplificar",
    validacion: [
        ["doble(6,0)","exp(y,4)","div","doble(4,5)","exp(y,2)"]
    ]
},
{
    id: "3.5.3.4",
    enunciado: "Obtén el resultado de: (-2b² / 5) ÷ (-3b / 10)",
    pista: "Negativo entre negativo da positivo",
    validacion: [
        ["doble(2,0)","exp(b,2)","div","minus","doble(1,5)","b"]    ]
},
{
    id: "3.5.3.5",
    enunciado: "Resuelve correctamente: (4z³ / 11) ÷ (7z / 2)",
    pista: "Multiplica por el recíproco y simplifica la fracción final",
    validacion: [
        ["8","exp(z,3)","div","doble(7,7)","z"]
    ]
}
];

const ACTIVIDADES_3_6_1 =  [
{
    id: "3.6.1.1",
    enunciado: "Resuelve la siguiente suma de monomios: 3x² + 6x²",
    pista: "Suma los coeficientes y conserva la misma parte literal",
    validacion: [
        ["9","x2"], ["9", "exp(x,2)"]
    ]
},

{
    id: "3.6.1.2",
    enunciado: "Realiza la operación: 12y + (-8y)",
    pista: "Aplica correctamente la ley de signos",
    validacion: [
        ["4","y"], ["4","exp(y,1)"]
    ]
},

{
    id: "3.6.1.3",
    enunciado: "Obtén el resultado de: -6b² + (-4b²)",
    pista: "Cuando ambos términos son negativos, se suman y el signo permanece",
    validacion: [
        ["minus","doble(1,0)","exp(b,2)"]
    ]
},

{
    id: "3.6.1.4",
    enunciado: "Resuelve la siguiente suma de binomios: (3x + 5) + (2x + 4)",
    pista: "Agrupa los términos semejantes",
    validacion: [
        ["5","x", "plus","9"],  ["5","exp(x,1)", "plus","9"]
    ]
},

{
    id: "3.6.1.5",
    enunciado: "Realiza la operación: (-2y + 7) + (5y - 4)",
    pista: "Recuerda aplicar correctamente los signos",
    validacion: [
        ["3","y","plus","3"], ["3","exp(y,1)","plus","3"]
    ]
},

{
    id: "3.6.1.6",
    enunciado: "Resuelve correctamente: (-6z² - 5) + (10z² + 1)",
    pista: "Agrupa variables semejantes y términos independientes",
    validacion: [
        ["4","exp(z,2)","minus","4"]
    ]
}
];

const ACTIVIDADES_3_6_2 =  [

{
    id: "3.6.2.1",
    enunciado: "Resuelve la siguiente resta de monomios: 9x² - 4x²",
    pista: "Resta únicamente los coeficientes y conserva la parte literal",
    validacion: [
        ["5","x2"], ["5","exp(x,2)"]
    ]
},

{
    id: "3.6.2.2",
    enunciado: "¿Cuál es el resultado de: 12a³ - 15a³?",
    pista: "Aplica correctamente la ley de signos",
    validacion: [
        ["minus","3","exp(a,3)"]
    ]
},

{
    id: "3.6.2.3",
    enunciado: "Realiza la operación: -7y - 5y",
    pista: "Cuando ambos términos son negativos, se suman y el signo permanece",
    validacion: [
        ["minus","doble(1,2)","y"], ["minus","doble(1,2)","exp(y,1)"]
    ]
},

{
    id: "3.6.2.4",
    enunciado: "Resuelve la siguiente resta de binomios: (8x + 5) - (3x + 2)",
    pista: "Distribuye primero el signo negativo",
    validacion: [
        ["5","x","plus","3"], ["5","exp(x,1)","plus","3"]
    ]
},
{
    id: "3.6.2.5",
    enunciado: "¿Cuál es el resultado de: (10a² - 4) - (6a² + 1)?",
    pista: "Cambia los signos del segundo binomio",
    validacion: [
        ["4","exp(a,2)","minus","5"]
    ]
},

{
    id: "3.6.2.6",
    enunciado: "Resuelve correctamente: (-6z² - 5) - (2z² + 7)",
    pista: "Distribuye el signo negativo antes de simplificar",
    validacion: [
        ["minus","8","exp(z,2)","minus","doble(1,2)"]
    ]
}
];

const ACTIVIDADES_3_6_3 =  [

    {
    id: "3.6.3.1",
    enunciado: "Resuelve la siguiente multiplicación de monomios: (3x²)(5x³)",
    pista: "Multiplica coeficientes y suma exponentes",
    validacion: [
        ["doble(1,5)","x5"], ["doble(1,5)","exp(x,5)"]
    ]
},

{
    id: "3.6.3.2",
    enunciado: "Realiza la operación: (6y)(-3y⁴)",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
        ["minus","doble(1,8)","exp(y,5)"]
    ]
},

{
    id: "3.6.3.3",
    enunciado: "Obtén el resultado de: (-5b²)(-2b³)",
    pista: "Negativo por negativo da positivo",
    validacion: [
        ["doble(1,0)","exp(b,5)"]
    ]
},
{
    id: "3.6.3.4",
    enunciado: "Resuelve la siguiente multiplicación: (x + 3)(x + 2)",
    pista: "Multiplica cada término del primer binomio por cada término del segundo",
    validacion: [
        ["x2","plus","5","x","plus","6"], ["exp(x,2)","plus","5","exp(x,1)","plus","6"], ["exp(x,2)","plus","5","x","plus","6"], ["x2","plus","5","exp(x,1)","plus","6"],
    ]
},
{
    id: "3.6.3.5",
    enunciado: "¿Cuál es el resultado de: (a + 4)(a - 2)?",
    pista: "Aplica la propiedad distributiva",
    validacion: [
        ["exp(a,2)","plus","2","a","minus","8"]
    ]
},

{
    id: "3.6.3.6",
    enunciado: "Realiza la operación: (y + 5)(y + 1)",
    pista: "Multiplica término por término y simplifica",
    validacion: [
        ["exp(y,2)","plus","6","y","plus","5"], ["exp(y,2)","plus","6","exp(y,1)","plus","5"]
    ]
}
];





export const ACTIVIDADES_T3 = {
  "3.1.1": ACTIVIDADES_3_1_1,
  "3.1.2": ACTIVIDADES_3_1_2,
  "3.1.3": ACTIVIDADES_3_1_3,
  "3.1.4": ACTIVIDADES_3_1_4,
  "3.1.5": ACTIVIDADES_3_1_5,
  "3.2.1": ACTIVIDADES_3_2_1,
  "3.2.1": ACTIVIDADES_3_2_1,
  "3.2.2": ACTIVIDADES_3_2_2,
  "3.3.1": ACTIVIDADES_3_3_1,
  "3.3.2": ACTIVIDADES_3_3_2,
  "3.3.3": ACTIVIDADES_3_3_3,
  "3.4.1": ACTIVIDADES_3_4_1,
  "3.4.2": ACTIVIDADES_3_4_2,
  "3.5.1": ACTIVIDADES_3_5_1,
  "3.5.2": ACTIVIDADES_3_5_2,
  "3.5.3": ACTIVIDADES_3_5_3,
  "3.6.1": ACTIVIDADES_3_6_1,
  "3.6.2": ACTIVIDADES_3_6_2,
  "3.6.3": ACTIVIDADES_3_6_3,
  

  
};