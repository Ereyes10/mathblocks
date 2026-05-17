const ACTIVIDADES_3_1 =  [

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

const ACTIVIDADES_3_2 =  [

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

const ACTIVIDADES_3_3 =  [

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

const ACTIVIDADES_3_4 =  [

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
        ["4", "x6"], ["4", "exp(x,6)"]
      
    ]
},

];

const ACTIVIDADES_3_5 =  [

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


export const ACTIVIDADES_T3 = {
  "3.1.1": ACTIVIDADES_3_1,
  "3.1.2": ACTIVIDADES_3_2,
  "3.1.3": ACTIVIDADES_3_3,
  "3.1.4": ACTIVIDADES_3_4,
  "3.1.5": ACTIVIDADES_3_5,
  

  
};