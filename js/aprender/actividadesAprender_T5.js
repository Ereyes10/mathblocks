const actividad_5_1_1 = {
  titulo: "Representa el gasto total: <strong>Renta = x, Transporte = 20 y Comida = 15</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La renta está representada por x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Suma el siguiente gasto. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,0)",
      descripcion: "El transporte cuesta 20. Forma 20."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Agrega el último gasto. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,5)",
      descripcion: "La comida cuesta 15. Forma 15."
    }
  ],
  validacionFinal: ["x", "plus", "doble(2,0)", "plus", "doble(1,5)"]
};

const actividad_5_1_2 = {
  titulo: "Calcula el ahorro: <strong>Ingreso = 90 y gastos = 30 + 40</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(9,0)",
      descripcion: "El ingreso total es 90. Forma 90."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El ahorro se obtiene restando gastos. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(7,0)",
      descripcion: "Los gastos totales son 70. Forma 70."
    }
  ],
  validacionFinal: ["doble(9,0)", "minus", "doble(7,0)"]
};

const actividad_5_1_3 = {
  titulo: "Representa el gasto total: <strong>Alimentación = x y entretenimiento = 2x</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "El gasto en alimentación es x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Suma el gasto en entretenimiento. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "El entretenimiento cuesta el doble. Escanea 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    }
  ],
  validacionFinal: ["x", "plus", "2", "x"]
};

const actividad_5_1_4 = {
  titulo: "Calcula el ahorro: <strong>Ingreso = 80 y gastos = 20 + 30 + 10</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(8,0)",
      descripcion: "El ingreso total es 80. Forma 80."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El ahorro se obtiene restando los gastos. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(6,0)",
      descripcion: "Los gastos totales son 60. Forma 60."
    }
  ],
  validacionFinal: ["doble(8,0)", "minus", "doble(6,0)"]
};

const actividad_5_1_5 = {
  titulo: "Representa el gasto total: <strong>Internet = 10, Transporte = x y Comida = x</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "El gasto de internet es 10. Forma 10."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Suma el gasto de transporte. Escanea suma."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "El transporte está representado por x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Suma el gasto de comida. Escanea suma."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La comida también está representada por x. Escanea x."
    }
  ],
  validacionFinal: ["doble(1,0)", "plus", "x", "plus", "x"]
};

const actividad_5_2_1 = {
  titulo: "Calcula la nueva cantidad: <strong>2 huevos para 4 personas, ahora para 6 personas</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Cantidad original: 2 huevos. Escanea 2."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Multiplica por las nuevas porciones. Escanea multiplicación."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Las nuevas porciones son 6. Escanea 6."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Divide entre las porciones originales. Escanea división."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Las porciones originales son 4. Escanea 4."
    }
  ],
  validacionFinal: ["2", "mul", "6", "div", "4"]
};

const actividad_5_2_2 = {
  titulo: "Duplica la receta: <strong>3 tazas de leche</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "La receta usa 3 tazas de leche. Escanea 3."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Duplicar significa multiplicar por 2. Escanea multiplicación."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Escanea 2."
    }
  ],
  validacionFinal: ["3", "mul", "2"]
};

const actividad_5_2_3 = {
  titulo: "Calcula la nueva cantidad: <strong>20 g de harina para 5 personas, ahora para 10 personas</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(2,0)",
      descripcion: "Cantidad original: 20."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Multiplica por las nuevas porciones. Escanea multiplicación."
    },
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "Las nuevas porciones son 10. Forma 10."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Divide entre las porciones originales. Escanea división."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Las porciones originales son 5. Escanea 5."
    }
  ],
  validacionFinal: ["doble(2,0)", "mul", "doble(1,0)", "div", "5"]
};

const actividad_5_2_4 = {
  titulo: "Reduce la receta: <strong>80 g de azúcar para 4 personas, ahora para 2 personas</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(8,0)",
      descripcion: "Cantidad original: 80."
    },
    {
      tipo: "operador",
      valor: "mult",
      descripcion: "Multiplica por las nuevas porciones. Escanea multiplicación."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Las nuevas porciones son 2. Escanea 2."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Divide entre las porciones originales. Escanea división."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Las porciones originales son 4. Escanea 4."
    }
  ],
  validacionFinal: ["doble(8,0)", "mult", "2", "div", "4"]
};

const actividad_5_2_5 = {
  titulo: "Calcula la nueva cantidad: <strong>5 vasos de agua para 5 personas, ahora para 15 personas</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Cantidad original: 5 vasos. Escanea 5."
    },
    {
      tipo: "operador",
      valor: "mul",
      descripcion: "Multiplica por las nuevas porciones. Escanea multiplicación."
    },
    {
      tipo: "constructor",
      valor: "doble(1,5)",
      descripcion: "Las nuevas porciones son 15. Forma 15."
    },
    {
      tipo: "operador",
      valor: "div",
      descripcion: "Divide entre las porciones originales. Escanea división."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Las porciones originales son 5. Escanea 5."
    }
  ],
  validacionFinal: ["5", "mul", "doble(1,5)", "div", "5"]
};

const actividad_5_3_1 = {
  titulo: "Calcula el precio final: <strong>$50 con 20% de descuento</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(4,0)",
      descripcion: "Primero calcula el 20% de 50: 50 × 20 ÷ 100 = 10. Luego resta: 50 − 10. Escanea el resultado final."
    }
  ],
  validacionFinal: ["doble(4,0)"]
};

const actividad_5_3_2 = {
  titulo: "Calcula el precio final: <strong>$80 con 25% de descuento</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(6,0)",
      descripcion: "Primero calcula el 25% de 80: 80 × 25 ÷ 100 = 20. Luego resta: 80 − 20. Escanea el resultado final."
    }
  ],
  validacionFinal: ["doble(6,0)"]
};

const actividad_5_3_3 = {
  titulo: "Calcula el precio final: <strong>$60 con 10% de descuento</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(5,4)",
      descripcion: "Primero calcula el 10% de 60: 60 × 10 ÷ 100 = 6. Luego resta: 60 − 6. Escanea el resultado final."
    }
  ],
  validacionFinal: ["doble(5,4)"]
};

const actividad_5_3_4 = {
  titulo: "Calcula el precio final: <strong>$40 con 50% de descuento</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(2,0)",
      descripcion: "Primero calcula el 50% de 40: 40 × 50 ÷ 100 = 20. Luego resta: 40 − 20. Escanea el resultado final."
    }
  ],
  validacionFinal: ["doble(2,0)"]
};

const actividad_5_3_5 = {
  titulo: "Calcula el precio final: <strong>$90 con 30% de descuento</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(6,3)",
      descripcion: "Primero calcula el 30% de 90: 90 × 30 ÷ 100 = 27. Luego resta: 90 − 27. Escanea el resultado final."
    }
  ],
  validacionFinal: ["doble(6,3)"]
};





export const ACTIVIDADES_T5 = {
  "5.1": [
    actividad_5_1_1,  
    actividad_5_1_2,   
    actividad_5_1_3,   
    actividad_5_1_4,   
    actividad_5_1_5,
  ],
    "5.2": [
    actividad_5_2_1,  
    actividad_5_2_2,   
    actividad_5_2_3,   
    actividad_5_2_4,   
    actividad_5_2_5,
  ],

    "5.3": [
    actividad_5_3_1,  
    actividad_5_3_2,   
    actividad_5_3_3,   
    actividad_5_3_4,   
    actividad_5_3_5,
  ],
};