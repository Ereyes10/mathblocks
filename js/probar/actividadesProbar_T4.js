const ACTIVIDADES_4_1_1 =  [

    {
    id: "4.1.1.1",
    enunciado: "Resuelve la siguiente suma de polinomios: (3x² + 2x + 5) + (4x² + 6x + 1)",
    pista: "Agrupa los términos semejantes según su exponente",
    validacion: [
        ["7","x2","plus","8","x","plus","6"],  ["7","exp(x,2)","plus","8","exp(x,1)","plus","6"], ["7","exp(x,2)","plus","8","x","plus","6"], ["7","x2","plus","8","exp(x,1)","plus","6"] 
    ]
},

{
    id: "4.1.1.2",
    enunciado: "¿Cuál es el resultado de: (5a³ - 2a + 4) + (3a³ + 7a - 6)?",
    pista: "Suma por separado términos semejantes y constantes",
    validacion: [
        ["8","exp(a,3)","plus","5","a","minus","2"], ["8","exp(a,3)","plus","5","exp(a,1)","minus","2"]
    ]
},
{
    id: "4.1.1.3",
    enunciado: "Realiza la operación: (-4y² + 8y - 3) + (6y² - 5y + 9)",
    pista: "Combina únicamente términos con la misma variable y exponente",
    validacion: [
        ["2","exp(y,2)","plus","3","y","plus","6"], ["2","exp(y,2)","plus","3","exp(y,1)","plus","6"] 
    ]
},
{
    id: "4.1.1.4",
    enunciado: "Obtén el resultado de: (7b⁴ - 3b² + 2) + (-2b⁴ + 5b² - 8)",
    pista: "Aplica correctamente la ley de signos",
    validacion: [
        ["5","exp(b,4)","plus","2","exp(b,2)","minus","6"]
    ]
},
{
    id: "4.1.1.5",
    enunciado: "Resuelve correctamente: (2z³ + 4z² - z + 1) + (5z³ - 2z² + 3z - 4)",
    pista: "Agrupa los términos semejantes antes de simplificar",
    validacion: [
        ["7","exp(z,3)","plus","2","exp(z,2)","plus","2","z","minus","3"],["7","exp(z,3)","plus","2","exp(z,2)","plus","2","exp(z,1)","minus","3"]
    ]
}

]

const ACTIVIDADES_4_1_2 =  [

{
    id: "4.1.2.1",
    enunciado: "Resuelve la siguiente resta de polinomios: (7x² + 4x - 5) - (2x² + x + 3)",
    pista: "Distribuye el signo negativo al segundo polinomio",
    validacion: [
        ["5","x2","plus","3","x","minus","8"], ["5","exp(x,2)","plus","3","exp(x,1)","minus","8"]  
    ]
},

{
    id: "4.1.2.2",
    enunciado: "¿Cuál es el resultado de: (9a³ - 6a + 2) - (4a³ + 3a - 7)?",
    pista: "Agrupa los términos semejantes después de cambiar signos",
    validacion: [
        ["5","exp(a,3)","minus","9","a","plus","9"]
    ]
},
{
    id: "4.1.2.3",
    enunciado: "Realiza la operación: (-8y² + 5y - 1) - (3y² - 2y + 6)",
    pista: "Recuerda distribuir el signo negativo correctamente",
    validacion: [
        ["minus","doble(1,1)","exp(y,2)","plus","7","y","minus","7"]
    ]
},
{
    id: "4.1.2.4",
    enunciado: "Obtén el resultado de: (12b⁴ - 7b² + 9) - (5b⁴ + 2b² - 4)",
    pista: "Resta términos semejantes y constantes por separado",
    validacion: [
        ["7","exp(b,4)","minus","9","exp(b,2)","plus","doble(1,3)"]
    ]
},
{
    id: "4.1.2.5",
    enunciado: "Resuelve correctamente: (10z³ + 6z² - 4z + 8) - (3z³ - 2z² + z - 5)",
    pista: "Distribuye primero el signo negativo y después simplifica",
    validacion: [
        ["7","exp(z,3)","plus","8","exp(z,2)","minus","5","z","plus","doble(1,3)"]
    ]
}
]
const ACTIVIDADES_4_1_3 =  [
{
    id: "4.1.3.1",
    enunciado: "Resuelve la siguiente multiplicación de polinomios: (x + 2)(x + 5)",
    pista: "Multiplica cada término del primer polinomio por cada término del segundo",
    validacion: [
        ["x2","plus","7","x","plus","doble(1,0)"], ["exp(x,2)","plus","7","x","plus","doble(1,0)"]
    ]
},
{
    id: "4.1.3.2",
    enunciado: "¿Cuál es el resultado de: (a - 3)(a + 4)?",
    pista: "Aplica correctamente la propiedad distributiva",
    validacion: [
        ["exp(a,2)","plus","a","minus","doble(1,2)"]
    ]
},

{
    id: "4.1.3.3",
    enunciado: "Realiza la operación: (2y + 1)(y + 6)",
    pista: "Multiplica término por término y simplifica",
    validacion: [
        ["2","exp(y,2)","plus","doble(1,3)","y","plus","6"]
    ]
},
{
    id: "4.1.3.4",
    enunciado: "Obtén el resultado de: (b - 5)(b - 2)",
    pista: "Recuerda aplicar correctamente la ley de signos",
    validacion: [
        ["exp(b,2)","minus","7","b","plus","doble(1,0)"]
    ]
},
{
    id: "4.1.3.5",
    enunciado: "Resuelve correctamente: (3z + 2)(z - 4)",
    pista: "Agrupa términos semejantes al finalizar",
    validacion: [
        ["3","exp(z,2)","minus","doble(1,0)","z","minus","8"]
    ]
}
]
const ACTIVIDADES_4_2_1 =  [
{

    id: "4.2.1.1",
    enunciado: "Desarrolla el siguiente binomio usando el triángulo de Pascal: (x + 2)²",
    pista: "Para potencia 2 utiliza los coeficientes: 1, 2, 1",
    validacion: [
        ["x2","plus","4","x","plus","4"], ["exp(x,2)","plus","4","x","plus","4"]
    ]
},
{
    id: "4.2.1.2",
    enunciado: "Expande el siguiente binomio: (a - 3)³",
    pista: "Para potencia 3 utiliza los coeficientes: 1, 3, 3, 1 y cuida los signos",
    validacion: [
        ["exp(a,3)","minus","9","exp(a,2)","plus","doble(2,7)","a","minus","doble(2,7)"]
    ]
},
{
    id: "4.2.1.3",
    enunciado: "Resuelve el desarrollo de: (y + 1)⁴",
    pista: "Utiliza la fila 1, 4, 6, 4, 1 del triángulo de Pascal",
    validacion: [
        ["exp(y,4)","plus","4","exp(y,3)","plus","6","exp(y,2)","plus","4","y","plus","1"]
    ]
},
{
    id: "4.2.1.4",
    enunciado: "Desarrolla correctamente: (b - 2)⁵",
    pista: "Recuerda alternar signos negativos en el desarrollo",
    validacion: [
        ["exp(b,5)","minus","doble(1,0)","exp(b,4)","plus","doble(4,0)","exp(b,3)","minus","doble(8,0)","exp(b,2)","plus","doble(8,0)","b","minus","doble(3,2)"]
    ]
},
{
    id: "4.2.1.5",
    enunciado: "Expande el siguiente binomio utilizando Pascal: (2z + 1)³",
    pista: "Eleva cada término según su posición y usa los coeficientes 1, 3, 3, 1",
    validacion: [
        ["8","exp(z,3)","plus","doble(1,2)","exp(z,2)","plus","6","z","plus","1"]
    ]
}

]
//forma (a + b)²
const ACTIVIDADES_4_3_1 =  [
{
    id: "4.3.1.1",
    enunciado: "Desarrolla el siguiente producto notable: (x + 5)²",
    pista: "Utiliza la fórmula: (a+b)² = a² + 2ab + b²",
    validacion: [
        ["x2","plus","doble(1,0)","x","plus","doble(2,5)"],  ["exp(x,2)","plus","doble(1,0)","x","plus","doble(2,5)"]
    ]
},
{
    id: "4.3.1.2",
    enunciado: "Resuelve correctamente: (y + 4)²",
    pista: "El término central es el doble del producto de ambos términos",
    validacion: [
        ["exp(y,2)","plus","8","y","plus","doble(1,6)"]
    ]
},

{
    id: "4.3.1.3",
    enunciado: "Desarrolla el siguiente producto notable: (z + 2)²",
    pista: "Aplica la fórmula del cuadrado de una suma",
    validacion: [
        ["exp(z,2)","plus","4","z","plus","4"]
    ]
},

{
    id: "4.3.1.4",
    enunciado: "Obtén el desarrollo de: (b + 6)²",
    pista: "Recuerda elevar al cuadrado el primer y último término",
    validacion: [
        ["exp(b,2)","plus","doble(1,2)","b","plus","doble(3,6)"]
    ]
},

{
    id: "4.3.1.5",
    enunciado: "Desarrolla el siguiente producto notable: (z + 2)²",
    pista: "Aplica la fórmula del cuadrado de una suma",
    validacion: [
        ["exp(z,2)","plus","4","z","plus","4"]
    ]
},
]
//(a + 1)(a - 1)
const ACTIVIDADES_4_3_2 =  [
{
    id: "4.3.2.1",
    enunciado: "Obtén el resultado de: (y + 1)(y - 1)",
    pista: "Aplica la fórmula de suma por diferencia",
    validacion: [
        ["exp(y,2)","minus","1"]
    ]
},
{
    id: "4.3.2.2",
    enunciado: "Resuelve correctamente: (x + 3)(x - 3)",
    pista: "Es una suma por diferencia",
    validacion: [
        ["x2","minus","9"],
        ["exp(x,2)","minus","9"]
    ]
},
{
    id: "4.3.2.3",
    enunciado: "Obtén el resultado de: (y + 5)(y - 5)",
    pista: "El resultado es el cuadrado del primero menos el cuadrado del segundo",
    validacion: [
        ["exp(y,2)","minus","doble(2,5)"]
    ]
},
{
    id: "4.3.2.4",
    enunciado: "Desarrolla correctamente: (b + 7)(b - 7)",
    pista: "Recuerda elevar ambos términos al cuadrado",
    validacion: [
        ["exp(b,2)","minus","doble(4,9)"]
    ]
},
{
    id: "4.3.2.5",
    enunciado: "Resuelve el siguiente producto notable: (z + 9)(z - 9)",
    pista: "Aplica la diferencia de cuadrados",
    validacion: [
        ["exp(z,2)","minus","doble(8,1)"]
    ]
}

]

//(a - 1)²
const ACTIVIDADES_4_3_3 =  [

{
    id: "4.3.3.1",
    enunciado: "Desarrolla el siguiente producto notable: (a - 1)²",
    pista: "Utiliza la fórmula: (a-b)² = a² - 2ab + b²",
    validacion: [
       
        ["exp(a,2)","minus","2","a","plus","1"]
    ]
},
{
    id: "4.3.3.2",
    enunciado: "Resuelve correctamente: (x - 3)²",
    pista: "El término central es negativo porque el binomio es una diferencia",
    validacion: [
        ["x2","minus","6","x","plus","9"],
        ["exp(x,2)","minus","6","x","plus","9"]
    ]
},
{
    id: "4.3.3.3",
    enunciado: "Obtén el desarrollo de: (y - 4)²",
    pista: "Recuerda elevar al cuadrado ambos términos",
    validacion: [
        
        ["exp(y,2)","minus","8","y","plus","doble(1,6)"]
    ]
},
{
    id: "4.3.3.4",
    enunciado: "Desarrolla correctamente: (b - 6)²",
    pista: "Aplica la fórmula del cuadrado de una diferencia",
    validacion: [
        ["exp(b,2)","minus","doble(1,2)","b","plus","doble(3,6)"]
    ]
},
{
    id: "4.3.3.5",
    enunciado: "Resuelve el siguiente producto notable: (z - 8)²",
    pista: "El término independiente es el cuadrado del segundo término",
    validacion: [
        ["exp(z,2)","minus","doble(1,6)","z","plus","doble(6,4)"]
    ]
}
]

//(z + 1)³
const ACTIVIDADES_4_3_4 =  [

{
    id: "4.3.4.1",
    enunciado: "Desarrolla el siguiente producto notable: (z + 1)³",
    pista: "Utiliza la fórmula: (a+b)³ = a³ + 3a²b + 3ab² + b³",
    validacion: [
        ["exp(z,3)","plus","3","exp(z,2)","plus","3","z","plus","1"]
    ]
},
{
    id: "4.3.4.2",
    enunciado: "Resuelve correctamente: (a + 2)³",
    pista: "Recuerda que los coeficientes del cubo perfecto son 1, 3, 3 y 1",
    validacion: [
        ["exp(a,3)","plus","6","exp(a,2)","plus","doble(1,2)","a","plus","8"]
    ]
},
{
    id: "4.3.4.3",
    enunciado: "Obtén el desarrollo de: (x + 3)³",
    pista: "Eleva correctamente cada término del binomio",
    validacion: [
        ["x3","plus","9","x2","plus","doble(2,7)","x","plus","doble(2,7)"],
        ["exp(x,3)","plus","9","exp(x,2)","plus","doble(2,7)","x","plus","doble(2,7)"]
    ]
},
{
    id: "4.3.4.4",
    enunciado: "Desarrolla correctamente: (y + 4)³",
    pista: "Aplica la fórmula del cubo de una suma",
    validacion: [
        ["exp(y,3)","plus","doble(1,2)","exp(y,2)","plus","doble(4,8)","y","plus","doble(6,4)"]
    ]
},
{
    id: "4.3.4.5",
    enunciado: "Resuelve el siguiente producto notable: (b + 5)³",
    pista: "El término independiente es el cubo del segundo término",
    validacion: [
        ["exp(b,3)","plus","doble(1,5)","exp(b,2)","plus","doble(7,5)","b","plus","125"]
    ]
}

]
export const ACTIVIDADES_T4 = {
  "4.1.1": ACTIVIDADES_4_1_1,
  "4.1.2": ACTIVIDADES_4_1_2,
  "4.1.3": ACTIVIDADES_4_1_3,
  "4.2.1": ACTIVIDADES_4_2_1,
  "4.3.1": ACTIVIDADES_4_3_1,
  "4.3.2": ACTIVIDADES_4_3_2,
  "4.3.3": ACTIVIDADES_4_3_3,
  "4.3.4": ACTIVIDADES_4_3_4,
};