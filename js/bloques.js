// ==========================================
// BLOQUES NORMALES
// ==========================================

export const bloquesNormales = {

    // VARIABLES
    "a":  { tipo: "variable", simbolo: "a", descripcion: "Representa un valor desconocido o una cantidad cualquiera." },
    "b":  { tipo: "variable", simbolo: "b", descripcion: "Variable común usada para representar un valor distinto de a." },
    "c":  { tipo: "variable", simbolo: "c", descripcion: "Variable que frecuentemente se usa como constante o parámetro." },
    "x":  { tipo: "variable", simbolo: "x", descripcion: "La incógnita más común en el álgebra." },
    "y":  { tipo: "variable", simbolo: "y", descripcion: "Segunda incógnita más usada en ecuaciones." },
    "z":  { tipo: "variable", simbolo: "z", descripcion: "Variable adicional usada en ecuaciones y sistemas." },
    "n":  { tipo: "variable", simbolo: "n", descripcion: "Representa números naturales o conteos." },

    "x2": { tipo: "variable", simbolo: "x²", descripcion: "La variable x elevada al cuadrado." },
    "x3": { tipo: "variable", simbolo: "x³", descripcion: "La variable x elevada al cubo." },
    "x4": { tipo: "variable", simbolo: "x⁴", descripcion: "La variable x elevada a la cuarta potencia." },
    "x5": { tipo: "variable", simbolo: "x⁵", descripcion: "La variable x elevada a la quinta potencia." },
    "x6": { tipo: "variable", simbolo: "x⁶", descripcion: "La variable x elevada a la sexta potencia." },
    "x7": { tipo: "variable", simbolo: "x⁷", descripcion: "La variable x elevada a la séptima potencia."},
    "x8": { tipo: "variable", simbolo: "x⁸", descripcion: "La variable x elevada a la octava potencia." },
    "x9": { tipo: "variable", simbolo: "x⁹", descripcion: "La variable x elevada a la novena potencia." },

    "a2": { tipo: "variable", simbolo: "a²", descripcion: "La variable a al cuadrado." },
    "b2": { tipo: "variable", simbolo: "b²", descripcion: "La variable b al cuadrado." },

    // NÚMEROS
    "0":  { tipo: "numero", simbolo: "0", descripcion: "El número cero." },
    "1":  { tipo: "numero", simbolo: "1", descripcion: "El número uno." },
    "2":  { tipo: "numero", simbolo: "2", descripcion: "El número dos." },
    "3":  { tipo: "numero", simbolo: "3", descripcion: "El número tres." },
    "4":  { tipo: "numero", simbolo: "4", descripcion: "El número cuatro." },
    "5":  { tipo: "numero", simbolo: "5", descripcion: "El número cinco." },
    "6":  { tipo: "numero", simbolo: "6", descripcion: "El número seis." },
    "7":  { tipo: "numero", simbolo: "7", descripcion: "El número siete." },
    "8":  { tipo: "numero", simbolo: "8", descripcion: "El número ocho." },
    "9":  { tipo: "numero", simbolo: "9", descripcion: "El número nueve." },

    "1_2": { tipo: "numero", simbolo: "½", descripcion: "Fracción equivalente a un medio." },
    "1_3": { tipo: "numero", simbolo: "⅓", descripcion: "Fracción equivalente a un tercio." },
    "1_4": { tipo: "numero", simbolo: "¼", descripcion: "Fracción equivalente a un cuarto." },
    "1_5": { tipo: "numero", simbolo: "⅕", descripcion: "Fracción equivalente a un quinto." },

    // OPERADORES
    "plus":  { tipo: "operador", simbolo: "+", descripcion: "Operador de suma." },
    "minus": { tipo: "operador", simbolo: "-", descripcion: "Operador de resta." },
    "mul":   { tipo: "operador", simbolo: "·", descripcion: "Operador de multiplicación." },
    "div":   { tipo: "operador", simbolo: "/", descripcion: "Operador de división." },
    "eq":    { tipo: "operador", simbolo: "=", descripcion: "Indica igualdad entre expresiones." },
    "lt":    { tipo: "operador", simbolo: "<", descripcion: "Operador menor que." },
    "gt":    { tipo: "operador", simbolo: ">", descripcion: "Operador mayor que." },
    "neq":   { tipo: "operador", simbolo: "≠", descripcion: "Indica desigualdad entre expresiones." },
    "parIzq":   { tipo: "operador", simbolo: "(", descripcion: "Agrupación." },
    "parDer":   { tipo: "operador", simbolo: ")", descripcion: "Agrupación." },
    
};


// ==========================================
// BLOQUES CONSTRUCTORES
// ==========================================

export const bloquesConstructores = {

    "raiz": {
        tipo: "constructor",
        categoria: "raiz",
        descripcion: "Construye una raíz donde el siguiente bloque será el radicando."
    },

    "exp": {
        tipo: "constructor",
        categoria: "exponente",
        descripcion: "Aplica un exponente al bloque previamente escaneado."
    },

    "frac": {
        tipo: "constructor",
        categoria: "fraccion",
        descripcion: "Forma una fracción utilizando un numerador y luego un denominador."
    },

    "doble": {
        tipo: "constructor",
        categoria: "doble",
        descripcion: "Crea un número de doble digito."
    }
};
