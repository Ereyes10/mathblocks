const actividad_6_1_1 = {
  titulo: "¿Qué valor falta para que la expresión sea una igualdad?: <strong>4 + _ = 6</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Piensa qué número sumado a 4 da como resultado 6. Escanea el número correcto."
    }
  ],
  validacionFinal: ["2"]
};

const actividad_6_1_2 = {
  titulo: "¿Qué valor falta para que la expresión sea una igualdad?: <strong>7 − _ = 3</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Busca el número que al restarse de 7 dé como resultado 3. Escanea el número correcto."
    }
  ],
  validacionFinal: ["4"]
};

const actividad_6_1_3 = {
  titulo: "¿Qué valor falta para que la expresión sea una igualdad?: <strong>_ + 5 = 9</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Piensa qué número sumado a 5 da como resultado 9. Escanea el número correcto."
    }
  ],
  validacionFinal: ["4"]
};

const actividad_6_1_4 = {
  titulo: "¿Qué valor falta para que la expresión sea una igualdad?: <strong>3 × _ = 12</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Busca el número que multiplicado por 3 dé como resultado 12. Escanea el número correcto."
    }
  ],
  validacionFinal: ["4"]
};

const actividad_6_1_5 = {
  titulo: "¿Qué valor falta para que la expresión sea una igualdad?: <strong>15 ÷ _ = 5</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Piensa qué número divide a 15 para obtener 5. Escanea el número correcto."
    }
  ],
  validacionFinal: ["3"]
};

const actividad_6_2_1_1 = {
  titulo: "¿Qué número debes sumar en ambos lados?: <strong>x − 4 = 9</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Para eliminar el −4 y despejar x, suma 4 en ambos lados de la igualdad. Escanea el número correcto."
    }
  ],
  validacionFinal: ["4"]
};

const actividad_6_2_1_2 = {
  titulo: "¿Qué número debes restar en ambos lados?: <strong>x + 6 = 11</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Para eliminar el +6 y despejar x, resta 6 en ambos lados de la igualdad. Escanea el número correcto."
    }
  ],
  validacionFinal: ["6"]
};

const actividad_6_2_1_3 = {
  titulo: "¿Qué número debes sumar en ambos lados?: <strong>x − 8 = 3</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Para cancelar el −8, suma 8 en ambos lados de la igualdad. Escanea el número correcto."
    }
  ],
  validacionFinal: ["8"]
};

const actividad_6_2_1_4 = {
  titulo: "¿Qué número debes restar en ambos lados?: <strong>x + 5 = 14</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Para eliminar el +5, resta 5 en ambos lados de la igualdad. Escanea el número correcto."
    }
  ],
  validacionFinal: ["5"]
};

const actividad_6_2_1_5 = {
  titulo: "¿Qué número debes sumar en ambos lados?: <strong>x − 7 = 10</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Para despejar x, suma 7 en ambos lados de la igualdad. Escanea el número correcto."
    }
  ],
  validacionFinal: ["7"]
};

const actividad_6_2_2_1 = {
  titulo: "¿Por qué número se deben multiplicar ambos lados?: <strong>x ÷ 2 = 5</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Para eliminar la división entre 2, multiplica ambos lados por 2. Escanea el número correcto."
    }
  ],
  validacionFinal: ["2"]
};

const actividad_6_2_2_2 = {
  titulo: "¿Por qué número se deben multiplicar ambos lados?: <strong>x ÷ 4 = 3</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Para despejar x, multiplica ambos lados por 4. Escanea el número correcto."
    }
  ],
  validacionFinal: ["4"]
};

const actividad_6_2_2_3 = {
  titulo: "¿Por qué número se deben dividir ambos lados?: <strong>5x = 20</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Para despejar x, divide ambos lados entre 5. Escanea el número correcto."
    }
  ],
  validacionFinal: ["5"]
};

const actividad_6_2_2_4 = {
  titulo: "¿Por qué número se deben dividir ambos lados?: <strong>8x = 40</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Para eliminar el 8 que multiplica a x, divide ambos lados entre 8. Escanea el número correcto."
    }
  ],
  validacionFinal: ["8"]
};

const actividad_6_2_2_5 = {
  titulo: "¿Por qué número se deben multiplicar ambos lados?: <strong>x ÷ 5 = 6</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Para cancelar la división entre 5, multiplica ambos lados por 5. Escanea el número correcto."
    }
  ],
  validacionFinal: ["5"]
};

const actividad_6_3_1 = {
  titulo: "Resuelve la ecuación: <strong>x + 4 = 10</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para iniciar la ecuación."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma porque la ecuación tiene +4."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea 4."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Para eliminar el +4, se agrega −4 en ambos lados de la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea 4 para formar −4."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el signo igual."
    },
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "Escanea 10 del lado derecho."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "También se resta 4 del lado derecho para conservar la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Escanea nuevamente 4."
    }
  ],
  validacionFinal: ["x", "plus", "4", "minus", "4", "=", "doble(1,0)", "minus", "4"]
};

const actividad_6_3_2 = {
  titulo: "Resuelve la ecuación: <strong>x - 3 = 8</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para iniciar la ecuación."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea resta porque la ecuación tiene −3."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea 3."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Para eliminar el −3, se suma +3 en ambos lados de la igualdad. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea 3 para formar +3."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el signo igual."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea 8 del lado derecho."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "También se suma 3 del lado derecho para conservar la igualdad. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Escanea nuevamente 3."
    }
  ],
  validacionFinal: ["x", "minus", "3", "plus", "3", "=", "8", "plus", "3"]
};

const actividad_6_3_3 = {
  titulo: "Resuelve la ecuación: <strong>x + 6 = 14</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para iniciar la ecuación."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma porque la ecuación tiene +6."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Escanea 6."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Para eliminar el +6, se agrega −6 en ambos lados de la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Escanea 6 para formar −6."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el signo igual."
    },
    {
      tipo: "constructor",
      valor: "doble(1,4)",
      descripcion: "Escanea 14 del lado derecho."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "También se resta 6 del lado derecho para conservar la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Escanea nuevamente 6."
    }
  ],
  validacionFinal: ["x", "plus", "6", "minus", "6", "=", "doble(1,4)", "minus", "6"]
};

const actividad_6_3_4 = {
  titulo: "Resuelve la ecuación: <strong>x - 5 = 9</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para iniciar la ecuación."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Escanea resta porque la ecuación tiene −5."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea 5."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Para eliminar el −5, se suma +5 en ambos lados de la igualdad. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea 5 para formar +5."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el signo igual."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Escanea 9 del lado derecho."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "También se suma 5 del lado derecho para conservar la igualdad. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Escanea nuevamente 5."
    }
  ],
  validacionFinal: ["x", "minus", "5", "plus", "5", "=", "9", "plus", "5"]
};

const actividad_6_3_5 = {
  titulo: "Resuelve la ecuación: <strong>x + 8 = 13</strong>",
  pasos: [
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para iniciar la ecuación."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma porque la ecuación tiene +8."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea 8."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Para eliminar el +8, se agrega −8 en ambos lados de la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea 8 para formar −8."
    },
    {
      tipo: "operador",
      valor: "eq",
      descripcion: "Escanea el signo igual."
    },
    {
      tipo: "constructor",
      valor: "doble(1,3)",
      descripcion: "Escanea 13 del lado derecho."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "También se resta 8 del lado derecho para conservar la igualdad. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Escanea nuevamente 8."
    }
  ],
  validacionFinal: ["x", "plus", "8", "minus", "8", "=", "doble(1,3)", "minus", "8"]
};

export const ACTIVIDADES_T6 = {
  "6.1": [
    actividad_6_1_1,  
    actividad_6_1_2,   
    actividad_6_1_3,   
    actividad_6_1_4,   
    actividad_6_1_5,
  ],
  "6.2.1": [
    actividad_6_2_1_1,  
    actividad_6_2_1_2,   
    actividad_6_2_1_3,   
    actividad_6_2_1_4,   
    actividad_6_2_1_5,
  ],
    "6.2.2": [
    actividad_6_2_2_1,  
    actividad_6_2_2_2,   
    actividad_6_2_2_3,   
    actividad_6_2_2_4,   
    actividad_6_2_2_5,
  ],
    "6.3": [
    actividad_6_3_1,  
    actividad_6_3_2,   
    actividad_6_3_3,   
    actividad_6_3_4,   
    actividad_6_3_5,
  ],

};