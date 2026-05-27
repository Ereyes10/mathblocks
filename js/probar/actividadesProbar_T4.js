const ACTIVIDADES_4_1_1 =  [

{
    id: "4.1.1.1",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (x)(x⁴)?",
    pista: "Recuerda que la base es la misma por lo tanto solo hacemos operación con los exponentes",
    validacion: [
        ["x5"], ["exp(x,5)"]
        
    ]
},

{
    id: "4.1.1.2",
    enunciado: "Resuelve la operación: (a⁴)(a²)",
    pista: "Recuerda aplicar la ley de los exponentes para multiplicación",
    validacion: [
       ["exp(a,6)"]
        
    ]
},

{
    id: "4.1.1.3",
    enunciado: "¿Cuál es el resultado de la siguiente multiplicación de monomios: (7y)(2y⁴)?",
    pista: "Recuerda que y tiene exponente 1",
    validacion: [
       ["doble(1,4)", "exp(y,5)"]
        
    ]
},

{
    id: "4.1.1.4",
    enunciado: "¿Cuál es el resultado de la siguiente operación: (8b²)(5b³)?",
    pista: "Multiplica coeficientes y suma exponentes",
    validacion: [
      ["doble(4,0)", "exp(b,5)"] 
        
    ]
},

{
    id: "4.1.1.5",
    enunciado: "Resuelve: (3x⁰)(3x²)?",
    pista: "Recuerda que toda base elevada a 0 vale una unidad",
    validacion: [
       ["9", "x2"], ["9", "exp(x,2)"]
        
    ]
},

];


export const ACTIVIDADES_T4 = {
  "4.1.1": ACTIVIDADES_4_1_1,

  

  
};