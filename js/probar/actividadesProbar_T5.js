const ACTIVIDADES_5_1 =  [
    {
    id: "5.1.1",
    enunciado: "Representa el gasto total: Renta = x, Transporte = 25 y Comida = 30",
    pista: "Suma todos los gastos para obtener la expresión algebraica",
    validacion: [
        ["x","plus","doble(5,5)"]
    ]
},
{
    id: "5.1.2",
    enunciado: "Representa el ingreso total: Sueldo = y, Bono = 40 y Ventas = 15",
    pista: "El ingreso total es la suma de todas las entradas de dinero",
    validacion: [
        ["y","plus","doble(5,5)"]
    ]
},

{
    id: "5.1.3",
    enunciado: "Representa el gasto total: Internet = 10, Transporte = x y Comida = x",
    pista: "Suma los gastos y simplifica los términos semejantes",
    validacion: [
        ["2","x","plus","doble(1,0)"]
    ]
},
{
    id: "5.1.4",
    enunciado: "Representa el gasto total: Renta = y, Agua = 15 y Luz = y",
    pista: "Agrupa las variables iguales",
    validacion: [
        ["2","y","plus","doble(1,5)"]
    ]
},
{
    id: "5.1.5",
    enunciado: "Representa el ingreso total: Sueldo = z, Ventas = z y Bono = 20",
    pista: "Suma los ingresos semejantes",
    validacion: [
        ["2","z","plus","doble(2,0)"]
    ]
}
]

const ACTIVIDADES_5_2 =  [
{
    id: "5.2.1",
    enunciado: "Calcula la nueva cantidad: 3 litros de agua para 6 personas, ahora para 12 personas",
    pista: "Utiliza una proporción directa",
    validacion: [
        ["doble(1,2)","mul","3","div","6"]
    ]
},
{
    id: "5.2.2",
    enunciado: "Calcula la nueva cantidad: 5 tortillas para 5 personas, ahora para 10 personas",
    pista: "Compara el aumento en el número de personas",
    validacion: [
        ["doble(1,0)","mul","5","div","5"]
    ]
},
{
    id: "5.2.3",
    enunciado: "Calcula la nueva cantidad: 6 cucharadas de azúcar para 3 personas, ahora para 9 personas",
    pista: "La cantidad de personas se triplica",
    validacion: [
        ["9","mul","6","div","3"]
    ]
}, 

{
    id: "5.2.4",
    enunciado: "Calcula la nueva cantidad: 8 huevos para 8 personas, ahora para 4 personas",
    pista: "La cantidad de personas se reduce a la mitad",
    validacion: [
        ["4","mul","8","div","8"]
    ]
}, 

{
    id: "5.2.5",
    enunciado: "Calcula la nueva cantidad: 3 litros de leche para 6 personas, ahora para 9 personas",
    pista: "Aplica una regla de tres simple",
    validacion: [
        ["9","mul","3","div","6"]
    ]
}
]
const ACTIVIDADES_5_3 =  [
{
    id: "5.3.1",
    enunciado: "Calcula el precio final: $20 con 10% de descuento",
    pista: "Calcula cuánto se descuenta y réstalo al precio original",
    validacion: [
        ["doble(1,8)"]
    ]
},
{
    id: "5.3.2",
    enunciado: "Calcula el precio final: $30 con 20% de descuento",
    pista: "Obtén primero el valor del descuento",
    validacion: [
        ["doble(2,4)"]
    ]
},
{
    id: "5.3.3",
    enunciado: "Calcula el precio final: $40 con 25% de descuento",
    pista: "Recuerda que 25% equivale a la cuarta parte",
    validacion: [
        ["doble(3,0)"]
    ]
},
{
    id: "5.3.4",
    enunciado: "Calcula el precio final: $50 con 50% de descuento",
    pista: "El 50% representa la mitad del precio",
    validacion: [
        ["doble(2,5)"]
    ]
},
{
    id: "5.3.1.5",
    enunciado: "Calcula el precio final: $60 con 20% de descuento",
    pista: "Calcula el descuento antes de obtener el precio final",
    validacion: [
        ["doble(4,8)"]
    ]
}
]
export const ACTIVIDADES_T5 = {
  "5.1": ACTIVIDADES_5_1,
  "5.2": ACTIVIDADES_5_2,
  "5.3": ACTIVIDADES_5_3,
  
};