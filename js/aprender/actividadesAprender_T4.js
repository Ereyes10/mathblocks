// =====================================================
//  actividadesAprendizajeT4.js
//  Tema 4 — "Operaciones con Trinomios y Polinomios"
// =====================================================




const actividad_4_1_1_1 = {
  titulo: "Resuelve la suma: <strong>2x + 5x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los coeficientes: 2 + 5 = 7. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La variable permanece igual. Escanea x."
    }
  ],
  validacionFinal: ["7", "x"]
};

const actividad_4_1_1_2 = {
  titulo: "Resuelve la suma: <strong>3x² + x²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Suma los coeficientes: 3 + 1 = 4. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "La variable y el exponente permanecen iguales. Escanea x²."
    }
  ],
  validacionFinal: ["4", "x2"]
};

const actividad_4_1_1_3 = {
  titulo: "Resuelve la operación: <strong>(2x + 3) + (5x - 1)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los términos semejantes: 2x + 5x = 7x. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Suma las constantes: 3 - 1 = 2. Escanea 2."
    }
  ],
  validacionFinal: ["7", "x", "plus", "2"]
};

const actividad_4_1_1_4 = {
  titulo: "Resuelve la operación: <strong>(4x² + 2x) + (3x² + 5x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los términos con x²: 4x² + 3x² = 7x². Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los términos con x: 2x + 5x = 7x. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    }
  ],
  validacionFinal: ["7", "x2", "plus", "7", "x"]
};

const actividad_4_1_1_5 = {
  titulo: "Resuelve la operación: <strong>(6x + 4) + (2x + 3)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Suma los términos semejantes: 6x + 2x = 8x. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma las constantes: 4 + 3 = 7. Escanea 7."
    }
  ],
  validacionFinal: ["8", "x", "plus", "7"]
};



const actividad_4_1_2_1 = {
  titulo: "Resuelve la operación: <strong>(6x + 4) − (2x − 3)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Resta los términos semejantes: 6x - 2x = 4x. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Después de cambiar signos, suma las constantes. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma las constantes: 4 + 3 = 7. Escanea 7."
    }
  ],
  validacionFinal: ["4", "x", "plus", "7"]
};

const actividad_4_1_2_2 = {
  titulo: "Resuelve la operación: <strong>(8x² + 5) − (3x² + 2)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Resta los términos con x²: 8x² - 3x² = 5x². Escanea 5."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Ahora combina las constantes. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Resta las constantes: 5 - 2 = 3. Escanea 3."
    }
  ],
  validacionFinal: ["5", "x2", "plus", "3"]
};

const actividad_4_1_2_3 = {
  titulo: "Resuelve la operación: <strong>(7x + 2) − (4x + 5)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Resta los términos semejantes: 7x - 4x = 3x. Escanea 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Después de cambiar signos, las constantes quedan 2 - 5. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Resuelve: 2 - 5 = -3. Escanea 3."
    }
  ],
  validacionFinal: ["3", "x", "minus", "3"]
};

const actividad_4_1_2_4 = {
  titulo: "Resuelve la operación: <strong>(9x² + 6x) − (2x² + x)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Resta los términos con x²: 9x² - 2x² = 7x². Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Continúa con los términos semejantes. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Resta los términos con x: 6x - x = 5x. Escanea 5."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    }
  ],
  validacionFinal: ["7", "x2", "plus", "5", "x"]
};

const actividad_4_1_2_5 = {
  titulo: "Resuelve la operación: <strong>(10x + 8) − (3x − 4)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Resta los términos semejantes: 10x - 3x = 7x. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Cambia el signo de -4 y realiza la suma. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Suma las constantes: 8 + 4 = 12. Escanea 12."
    }
  ],
  validacionFinal: ["7", "x", "plus", "12"]
};


const actividad_4_1_3_1 = {
  titulo: "Resuelve la operación: <strong>(2x + 3)(x + 4)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Multiplica 2x · x = 2x². Escanea 2."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Ahora suma los términos semejantes. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,1)",
      descripcion: "Suma los términos semejantes: 8x + 3x = 11x. Escanea 11."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Multiplica 3 · 4 = 12. Escanea 12."
    }
  ],
  validacionFinal: ["2", "x2", "plus", "11", "x", "plus", "12"]
};

const actividad_4_1_3_2 = {
  titulo: "Resuelve la operación: <strong>(3x + 2)(2x + 5)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Multiplica 3x · 2x = 6x². Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Suma los términos semejantes. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,9)",
      descripcion: "Suma los términos semejantes: 15x + 4x = 19x. Escanea 19."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "Multiplica 2 · 5 = 10. Escanea 10."
    }
  ],
  validacionFinal: ["6", "x2", "plus", "19", "x", "plus", "10"]
};

const actividad_4_1_3_3 = {
  titulo: "Resuelve la operación: <strong>(x + 6)(x + 2)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Multiplica x · x = x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Ahora suma los términos semejantes. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Suma los términos semejantes: 2x + 6x = 8x. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Multiplica 6 · 2 = 12. Escanea 12."
    }
  ],
  validacionFinal: ["1", "x2", "plus", "8", "x", "plus", "12"]
};

const actividad_4_1_3_4 = {
  titulo: "Resuelve la operación: <strong>(4x + 1)(x + 3)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Multiplica 4x · x = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Combina los términos semejantes. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,3)s",
      descripcion: "Suma los términos semejantes: 12x + x = 13x. Escanea 13."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Multiplica 1 · 3 = 3. Escanea 3."
    }
  ],
  validacionFinal: ["4", "x2", "plus", "13", "x", "plus", "3"]
};

const actividad_4_1_3_5 = {
  titulo: "Resuelve la operación: <strong>(5x + 2)(x + 1)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "Multiplica 5x · x = 5x². Escanea 5."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Combina los términos semejantes. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "7",
      descripcion: "Suma los términos semejantes: 5x + 2x = 7x. Escanea 7."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "Multiplica 2 · 1 = 2. Escanea 2."
    }
  ],
  validacionFinal: ["5", "x2", "plus", "7", "x", "plus", "2"]
};


const actividad_4_2_1 = {
  titulo: "Desarrolla la potencia: <strong>(x + 2)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "El primer coeficiente del Triángulo de Pascal es 1. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Eleva x -> x². Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los términos son positivos. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "2ab = 2(x)(2) = 4x. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para completar el termino 4x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva 2 -> 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["1", "x2", "plus", "4", "x", "plus", "4"]
};

const actividad_4_2_2 = {
  titulo: "Desarrolla la potencia: <strong>(x - 3)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "El primer término es x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El binomio tiene signo negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "2(x)(3) = 6x. Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para completar el termino 6x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "El último término es positivo. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva 3 -> 3² = 9. Escanea 9."
    }
  ],
  validacionFinal: ["1", "x2", "minus", "6", "x", "plus", "9"]
};

const actividad_4_2_3 = {
  titulo: "Desarrolla la potencia: <strong>(x + 1)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x³. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los signos son positivos. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Coeficiente del Triángulo de Pascal: 3x². Escanea 3."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Siguiente término: 3x. Escanea 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Último término: 1³ = 1. Escanea 1."
    }
  ],
  validacionFinal: ["1", "x3", "plus", "3", "x2", "plus", "3", "x", "plus", "1"]
};

const actividad_4_2_4 = {
  titulo: "Desarrolla la potencia: <strong>(x - 2)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x³. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los signos se alternan. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "3(x²)(2) = 6x². Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "El siguiente término es positivo. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "3(x)(2²) = 12x. Genera 12."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x para completar el termino 12x."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El último signo es negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "2³ = 8. Escanea 8."
    }
  ],
  validacionFinal: ["1", "x3", "minus", "6", "x2", "plus", "12", "x", "minus", "8"]
};

const actividad_4_2_5 = {
  titulo: "Desarrolla la potencia: <strong>(x + 2)⁴</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x⁴. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x4",
      descripcion: "Escanea x⁴."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los signos son positivos. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "4(x³)(2) = 8x³. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,4)",
      descripcion: "6(x²)(2²) = 24x². Escanea 24."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(3,2)",
      descripcion: "4(x)(2³) = 32x. Escanea 32."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,6)",
      descripcion: "2⁴ = 16. Escanea 16."
    }
  ],
  validacionFinal: ["1", "x4", "plus", "8", "x3", "plus", "24", "x2", "plus", "32", "x", "plus", "16"]
};


const actividad_4_3_1_1 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(x + 2)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Doble producto: 2(x)(2) = 4x. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el segundo término al cuadrado: 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["1", "x2", "plus", "4", "x", "plus", "4"]
};

const actividad_4_3_1_2 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(x + 5)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,0)",
      descripcion: "Doble producto: 2(x)(5) = 10x. Escanea 10."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,5)",
      descripcion: "Eleva el segundo término al cuadrado: 5² = 25. Escanea 25."
    }
  ],
  validacionFinal: ["1", "x2", "plus", "10", "x", "plus", "25"]
};

const actividad_4_3_1_3 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(2x + 3)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el primer término al cuadrado: (2x)² = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Doble producto: 2(2x)(3) = 12x. Escanea 12."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el segundo término al cuadrado: 3² = 9. Escanea 9."
    }
  ],
  validacionFinal: ["4", "x2", "plus", "12", "x", "plus", "9"]
};

const actividad_4_3_1_4 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(3x + 1)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el primer término al cuadrado: (3x)² = 9x². Escanea 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Doble producto: 2(3x)(1) = 6x. Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el segundo término al cuadrado: 1² = 1. Escanea 1."
    }
  ],
  validacionFinal: ["9", "x2", "plus", "6", "x", "plus", "1"]
};

const actividad_4_3_1_5 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(2x + 5)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el primer término al cuadrado: (2x)² = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,0)",
      descripcion: "Doble producto: 2(2x)(5) = 20x. Escanea 20."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea nuevamente suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,5)",
      descripcion: "Eleva el segundo término al cuadrado: 5² = 25. Escanea 25."
    }
  ],
  validacionFinal: ["4", "x2", "plus", "20", "x", "plus", "25"]
};


const actividad_4_3_2_1 = {
  titulo: "Resuelve el producto notable: <strong>(x + 2)(x − 2)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Es una diferencia de cuadrados. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el segundo término al cuadrado: 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["1", "x2", "minus", "4"]
};

const actividad_4_3_2_2 = {
  titulo: "Resuelve el producto notable: <strong>(x + 5)(x − 5)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los términos centrales se cancelan. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(2,5)",
      descripcion: "Eleva el segundo término al cuadrado: 5² = 25. Escanea 25."
    }
  ],
  validacionFinal: ["1", "x2", "minus", "25"]
};

const actividad_4_3_2_3 = {
  titulo: "Resuelve el producto notable: <strong>(2x + 3)(2x − 3)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el primer término al cuadrado: (2x)² = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los términos centrales desaparecen. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el segundo término al cuadrado: 3² = 9. Escanea 9."
    }
  ],
  validacionFinal: ["4", "x2", "minus", "9"]
};

const actividad_4_3_2_4 = {
  titulo: "Resuelve el producto notable: <strong>(3x + 1)(3x − 1)</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el primer término al cuadrado: (3x)² = 9x². Escanea 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Es una diferencia de cuadrados. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el segundo término al cuadrado: 1² = 1. Escanea 1."
    }
  ],
  validacionFinal: ["9", "x2", "minus", "1"]
};

const actividad_4_3_2_5 = {
  titulo: "Resuelve el producto notable: <strong>(4x + 2)(4x − 2)</strong>",
  pasos: [
    {
      tipo: "constructor",
      valor: "doble(1,6)",
      descripcion: "Eleva el primer término al cuadrado: (4x)² = 16x². Escanea 16."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los términos centrales se cancelan. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el segundo término al cuadrado: 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["16", "x2", "minus", "4"]
};


const actividad_4_3_3_1 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(x - 2)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El término central es negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Calcula el doble producto: 2(x)(2) = 4x. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "El último término siempre es positivo. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el segundo término al cuadrado: 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["1", "x2", "minus", "4", "x", "plus", "4"]
};

const actividad_4_3_3_2 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(x - 4)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Eleva el primer término al cuadrado: x². Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El término central es negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Calcula el doble producto: 2(x)(4) = 8x. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,6)",
      descripcion: "Eleva el segundo término al cuadrado: 4² = 16."
    }
  ],
  validacionFinal: ["1", "x2", "minus", "8", "x", "plus", "16"]
};

const actividad_4_3_3_3 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(2x - 3)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el primer término al cuadrado: (2x)² = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El término central es negativo. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Calcula el doble producto: 2(2x)(3) = 12x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el segundo término al cuadrado: 3² = 9. Escanea 9."
    }
  ],
  validacionFinal: ["4", "x2", "minus", "12", "x", "plus", "9"]
};

const actividad_4_3_3_4 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(3x - 2)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Eleva el primer término al cuadrado: (3x)² = 9x². Escanea 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El término central es negativo. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Calcula el doble producto: 2(3x)(2) = 12x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el segundo término al cuadrado: 2² = 4. Escanea 4."
    }
  ],
  validacionFinal: ["9", "x2", "minus", "12", "x", "plus", "4"]
};

const actividad_4_3_3_5 = {
  titulo: "Desarrolla el binomio al cuadrado: <strong>(2x - 5)²</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "Eleva el primer término al cuadrado: (2x)² = 4x². Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El término central es negativo. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(2,0)",
      descripcion: "Calcula el doble producto: 2(2x)(5) = 20x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,5)",
      descripcion: "Eleva el segundo término al cuadrado: 5² = 25."
    }
  ],
  validacionFinal: ["4", "x2", "minus", "20", "x", "plus", "25"]
};


const actividad_4_3_4_1 = {
  titulo: "Desarrolla el cubo del binomio: <strong>(x + 2)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x³. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los términos son positivos. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Segundo término: 3(x²)(2) = 6x². Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Tercer término: 3(x)(2²) = 12x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Último término: 2³ = 8. Escanea 8."
    }
  ],
  validacionFinal: ["1", "x3", "plus", "6", "x2", "plus", "12", "x", "plus", "8"]
};

const actividad_4_3_4_2 = {
  titulo: "Desarrolla el cubo del binomio: <strong>(x - 2)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x³. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los signos se alternan. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Segundo término: 3(x²)(2) = 6x². Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "El siguiente término es positivo. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Tercer término: 3(x)(2²) = 12x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El último término es negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Último término: 2³ = 8. Escanea 8."
    }
  ],
  validacionFinal: ["1", "x3", "minus", "6", "x2", "plus", "12", "x", "minus", "8"]
};

const actividad_4_3_4_3 = {
  titulo: "Desarrolla el cubo del binomio: <strong>(2x + 1)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Primer término: (2x)³ = 8x³. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los términos son positivos. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(1,2)",
      descripcion: "Segundo término: 3(2x)²(1) = 12x²."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Tercer término: 3(2x)(1²) = 6x. Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Último término: 1³ = 1. Escanea 1."
    }
  ],
  validacionFinal: ["8", "x3", "plus", "12", "x2", "plus", "6", "x", "plus", "1"]
};

const actividad_4_3_4_4 = {
  titulo: "Desarrolla el cubo del binomio: <strong>(x + 3)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "1",
      descripcion: "Primer término: x³. Escanea 1."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Todos los signos son positivos. Escanea suma."
    },
    {
      tipo: "numero",
      valor: "9",
      descripcion: "Segundo término: 3(x²)(3) = 9x². Escanea 9."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,7)",
      descripcion: "Tercer término: 3(x)(3²) = 27x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,7)",
      descripcion: "Último término: 3³ = 27."
    }
  ],
  validacionFinal: ["1", "x3", "plus", "9", "x2", "plus", "27", "x", "plus", "27"]
};

const actividad_4_3_4_5 = {
  titulo: "Desarrolla el cubo del binomio: <strong>(2x - 2)³</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Primer término: (2x)³ = 8x³. Escanea 8."
    },
    {
      tipo: "variable",
      valor: "x3",
      descripcion: "Escanea x³."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "Los signos se alternan. Escanea resta."
    },
    {
      tipo: "constructor",
      valor: "doble(2,4)",
      descripcion: "Segundo término: 3(2x)²(2) = 24x²."
    },
    {
      tipo: "variable",
      valor: "x2",
      descripcion: "Escanea x²."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "El siguiente término es positivo. Escanea suma."
    },
    {
      tipo: "constructor",
      valor: "doble(2,4)",
      descripcion: "Tercer término: 3(2x)(2²) = 24x."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "minus",
      descripcion: "El último término es negativo. Escanea resta."
    },
    {
      tipo: "numero",
      valor: "8",
      descripcion: "Último término: 2³ = 8. Escanea 8."
    }
  ],
  validacionFinal: ["8", "x3", "minus", "24", "x2", "plus", "24", "x", "minus", "8"]
};









const actividad_4_4_1_1 = {
  titulo: "Factoriza la expresión: <strong>6x + 12</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "Identifica el factor común: 6. Escanea 6."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Abre paréntesis."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "6x ÷ 6 = x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "12 ÷ 6 = 2. Escanea 2."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Cierra paréntesis."
    }
  ],
  validacionFinal: ["6", "parIzq", "x", "plus", "2", "parDer"]
};

const actividad_4_4_1_2 = {
  titulo: "Factoriza la expresión: <strong>8x² + 4x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "4",
      descripcion: "El factor común es 4. Escanea 4."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La variable común es x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Abre paréntesis."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "8x² ÷ 4x = 2x. Escanea 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "4x ÷ 4x = 1. Escanea 1."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Cierra paréntesis."
    }
  ],
  validacionFinal: ["4", "x", "parIzq", "2", "x", "plus", "1", "parDer"]
};

const actividad_4_4_1_3 = {
  titulo: "Factoriza la expresión: <strong>9x + 3</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "3",
      descripcion: "Identifica el factor común: 3. Escanea 3."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Abre paréntesis."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "9x ÷ 3 = 3x. Escanea 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "3 ÷ 3 = 1. Escanea 1."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Cierra paréntesis."
    }
  ],
  validacionFinal: ["3", "parIzq", "3", "x", "plus", "1", "parDer"]
};

const actividad_4_4_1_4 = {
  titulo: "Factoriza la expresión: <strong>12x² + 6x</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "6",
      descripcion: "El factor común es 6. Escanea 6."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "La variable común es x. Escanea x."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Abre paréntesis."
    },
    {
      tipo: "numero",
      valor: "2",
      descripcion: "12x² ÷ 6x = 2x. Escanea 2."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "1",
      descripcion: "6x ÷ 6x = 1. Escanea 1."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Cierra paréntesis."
    }
  ],
  validacionFinal: ["6", "x", "parIzq", "2", "x", "plus", "1", "parDer"]
};

const actividad_4_4_1_5 = {
  titulo: "Factoriza la expresión: <strong>15x + 20</strong>",
  pasos: [
    {
      tipo: "numero",
      valor: "5",
      descripcion: "El factor común es 5. Escanea 5."
    },
    {
      tipo: "operador",
      valor: "parIzq",
      descripcion: "Abre paréntesis."
    },
    {
      tipo: "numero",
      valor: "3",
      descripcion: "15x ÷ 5 = 3x. Escanea 3."
    },
    {
      tipo: "variable",
      valor: "x",
      descripcion: "Escanea x."
    },
    {
      tipo: "operador",
      valor: "plus",
      descripcion: "Escanea suma."
    },
    {
      tipo: "numero",
      valor: "4",
      descripcion: "20 ÷ 5 = 4. Escanea 4."
    },
    {
      tipo: "operador",
      valor: "parDer",
      descripcion: "Cierra paréntesis."
    }
  ],
  validacionFinal: ["5", "parIzq", "3", "x", "plus", "4", "parDer"]
};







export const ACTIVIDADES_T4 = {
  "4.1.1": [
    actividad_4_1_1_1,  
    actividad_4_1_1_2, 
    actividad_4_1_1_3, 
    actividad_4_1_1_4, 
    actividad_4_1_1_5, 
  ],

  "4.1.2": [
    actividad_4_1_2_1,  
    actividad_4_1_2_2, 
    actividad_4_1_2_3, 
    actividad_4_1_2_4, 
    actividad_4_1_2_5, 
  ],

  "4.1.3": [
    actividad_4_1_3_1,  
    actividad_4_1_3_2, 
    actividad_4_1_3_3, 
    actividad_4_1_3_4, 
    actividad_4_1_3_5, 
  ],
    "4.2": [
    actividad_4_2_1,  
    actividad_4_2_2,   
    actividad_4_2_3,   
    actividad_4_2_4,   
    actividad_4_2_5,   
  ],
    "4.3.1": [
    actividad_4_3_1_1,  
    actividad_4_3_1_2,   
    actividad_4_3_1_3,   
    actividad_4_3_1_4,   
    actividad_4_3_1_5,   
  ],
    "4.3.2": [
    actividad_4_3_2_1,  
    actividad_4_3_2_2,   
    actividad_4_3_2_3,   
    actividad_4_3_2_4,   
    actividad_4_3_2_5,   
  ],
    "4.3.3": [
    actividad_4_3_3_1,  
    actividad_4_3_3_2,   
    actividad_4_3_3_3,   
    actividad_4_3_3_4,   
    actividad_4_3_3_5,   
  ],
    "4.3.4": [
    actividad_4_3_4_1,  
    actividad_4_3_4_2,   
    actividad_4_3_4_3,   
    actividad_4_3_4_4,   
    actividad_4_3_4_5,   
  ],



    "4.4.1": [
    actividad_4_4_1_1,  
    actividad_4_4_1_2, 
    actividad_4_4_1_3, 
    actividad_4_4_1_4, 
    actividad_4_4_1_5, 
  ],

};