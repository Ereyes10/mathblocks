const ACTIVIDADES_6_1 = [

{
    id: "6.1.1",
    enunciado: "¿Qué valor falta para que la expresión sea una igualdad?: 4 + _ = 6",
    pista: "Encuentra el número que sumado a 4 da como resultado 6",
    validacion: [
        ["2"]
    ]
},

{
    id: "6.1.2",
    enunciado: "¿Qué valor falta para que la expresión sea una igualdad?: 7 - _ = 3",
    pista: "Busca el número que al restarse de 7 produce 3",
    validacion: [
        ["4"]
    ]
},

{
    id: "6.1.3",
    enunciado: "¿Qué valor falta para que la expresión sea una igualdad?: _ + 5 = 9",
    pista: "Determina qué número sumado a 5 resulta en 9",
    validacion: [
        ["4"]
    ]
},

{
    id: "6.1.4",
    enunciado: "¿Qué valor falta para que la expresión sea una igualdad?: 3 × _ = 12",
    pista: "Piensa qué número multiplicado por 3 da como resultado 12",
    validacion: [
        ["4"]
    ]
},

{
    id: "6.1.5",
    enunciado: "¿Qué valor falta para que la expresión sea una igualdad?: 15 ÷ _ = 5",
    pista: "Encuentra el número que divide a 15 para obtener 5",
    validacion: [
        ["3"]
    ]
}

];

const ACTIVIDADES_6_2_1 = [

{
    id: "6.2.1.1",
    enunciado: "¿Qué número debes sumar en ambos lados?: x - 4 = 9",
    pista: "Para eliminar el término negativo, aplica la operación inversa en ambos lados",
    validacion: [
        ["4"]
    ]
},

{
    id: "6.2.1.2",
    enunciado: "¿Qué número debes restar en ambos lados?: x + 6 = 11",
    pista: "Utiliza la operación contraria a la suma para despejar la variable",
    validacion: [
        ["6"]
    ]
},

{
    id: "6.2.1.3",
    enunciado: "¿Qué número debes sumar en ambos lados?: x - 8 = 3",
    pista: "Busca el valor que cancela el término que acompaña a la variable",
    validacion: [
        ["8"]
    ]
},

{
    id: "6.2.1.4",
    enunciado: "¿Qué número debes restar en ambos lados?: x + 5 = 14",
    pista: "Aplica la operación inversa para dejar sola la variable",
    validacion: [
        ["5"]
    ]
},

{
    id: "6.2.1.5",
    enunciado: "¿Qué número debes sumar en ambos lados?: x - 7 = 10",
    pista: "Identifica el número que elimina el término restado",
    validacion: [
        ["7"]
    ]
}

];

const ACTIVIDADES_6_2_2 = [

{
    id: "6.2.2.1",
    enunciado: "¿Por qué número se deben multiplicar ambos lados?: x ÷ 2 = 5",
    pista: "Aplica la operación inversa de la división para despejar la variable",
    validacion: [
        ["2"]
    ]
},

{
    id: "6.2.2.2",
    enunciado: "¿Por qué número se deben multiplicar ambos lados?: x ÷ 4 = 3",
    pista: "Busca el número que cancela la división presente en la ecuación",
    validacion: [
        ["4"]
    ]
},

{
    id: "6.2.2.3",
    enunciado: "¿Por qué número se deben dividir ambos lados?: 5x = 20",
    pista: "Utiliza la operación inversa de la multiplicación para despejar x",
    validacion: [
        ["5"]
    ]
},

{
    id: "6.2.2.4",
    enunciado: "¿Por qué número se deben dividir ambos lados?: 8x = 40",
    pista: "Identifica el coeficiente que acompaña a la variable",
    validacion: [
        ["8"]
    ]
},

{
    id: "6.2.2.5",
    enunciado: "¿Por qué número se deben multiplicar ambos lados?: x ÷ 5 = 6",
    pista: "Aplica la operación contraria a la división para eliminar el denominador",
    validacion: [
        ["5"]
    ]
}

];

const ACTIVIDADES_6_3 = [

{
    id: "6.3.1",
    enunciado: "Resuelve la ecuación: x + 4 = 10",
    pista: "Aplica la operación inversa al término que acompaña a la variable",
    validacion: [
        ["x","plus","4","minus","4","eq","doble(1,0)","minus","4"]
    ]
},

{
    id: "6.3.2",
    enunciado: "Resuelve la ecuación: x - 3 = 8",
    pista: "Realiza la misma operación en ambos lados de la igualdad",
    validacion: [
        ["x","minus","3","plus","3","eq","8","plus","3"]
    ]
},

{
    id: "6.3.3",
    enunciado: "Resuelve la ecuación: x + 6 = 14",
    pista: "Elimina el término sumando mediante su operación inversa",
    validacion: [
        ["x","plus","6","minus","6","eq","doble(1,4)","minus","6"]
    ]
},

{
    id: "6.3.4",
    enunciado: "Resuelve la ecuación: x - 5 = 9",
    pista: "Conserva el equilibrio aplicando la misma operación en ambos lados",
    validacion: [
        ["x","minus","5","plus","5","eq","9","plus","5"]
    ]
},

{
    id: "6.3.5",
    enunciado: "Resuelve la ecuación: x + 8 = 13",
    pista: "Usa la operación contraria para despejar la variable",
    validacion: [
        ["x","plus","8","minus","8","eq","doble(1,3)","minus","8"]
    ]
}

];


export const ACTIVIDADES_T6 = {
  "6.1": ACTIVIDADES_6_1,
  "6.2.1": ACTIVIDADES_6_2_1,
  "6.2.2": ACTIVIDADES_6_2_2,
  "6.3": ACTIVIDADES_6_3,

};