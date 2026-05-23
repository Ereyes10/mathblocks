export const POPUP_DATOS = {
  "1.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente la suma de dos números cualesquiera.",
  extra: `
    <strong>Expresión formada:</strong> a + b<br><br>

    <strong>Interpretación:</strong><br>
    Dos variables representan números cuyo valor desconocemos.<br>
    La suma combina ambas cantidades en un solo resultado.<br><br>

    <strong>Idea clave:</strong><br>
    Las letras (variables) permiten escribir operaciones sin saber los valores exactos.
  `
},
"1.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente la diferencia entre dos números desconocidos.",
  extra: `
    <strong>Expresión formada:</strong> a − b<br><br>

    <strong>Interpretación:</strong><br>
    Una variable representa un número inicial.<br>
    Otra variable representa el número que se le quita.<br><br>

    <strong>Idea clave:</strong><br>
    La resta muestra cómo cambia una cantidad cuando se disminuye otra.
  `
},
"1.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Has formado correctamente el producto de un número por una variable.",
  extra: `
    <strong>Expresión formada:</strong> 2x<br><br>

    <strong>Interpretación:</strong><br>
    • 2 es el <em>coeficiente</em>.<br>
    • x es la <em>variable</em>.<br><br>

    <strong>2x</strong> significa “dos veces un número desconocido”.<br><br>

    Este tipo de términos son la base del álgebra.
  `
},
"1.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente la división de un número entre 5.",
  extra: `
    <strong>Expresión formada:</strong> x ÷ 5<br><br>

    <strong>Interpretación:</strong><br>
    La variable representa un número desconocido.<br>
    Dividirlo entre 5 indica repartir esa cantidad en partes iguales.<br><br>

    Las divisiones con variables permiten modelar problemas reales de reparto.
  `
},
"1.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Has formado correctamente la diferencia entre un número y 3.",
  extra: `
    <strong>Expresión formada:</strong> x − 3<br><br>

    <strong>Interpretación:</strong><br>
    • x representa el número inicial.<br>
    • 3 es la cantidad que se resta.<br><br>

    Esta estructura aparece frecuentemente en problemas de disminución o comparación.
  `
},


  // =====================================
  // 1.2.1 — Suma (+)
  // =====================================
  "1.2.1": {
    titulo: "¡Bien hecho!",
    mensaje: "Identificaste correctamente el símbolo de suma.",
    extra: `
      <strong>Ejemplos de uso:</strong><br>
      1 + 2 <br>
      3 + x<br>
      x + y
    `
  },

  // =====================================
  // 1.2.2 — Resta (−)
  // =====================================
  "1.2.2": {
    titulo: "¡Correcto!",
    mensaje: "Reconociste el símbolo que representa la resta o diferencia.",
    extra: `
      <strong>Ejemplos de uso:</strong><br>
      2 - 1<br>
      3 - x<br>
      a - b
    `
  },

  // =====================================
  // 1.2.3 — Multiplicación (·)
  // =====================================
  "1.2.3": {
    titulo: "¡Excelente!",
    mensaje: "Identificaste correctamente el símbolo de multiplicación.",
    extra: `
      <strong>Símbolos:</strong><br>
      "·" punto intermedio, el más usado en álgebra <br>
      "x" solo en aritmética básica; se evita en álgebra porque confunde con la variable x<br>
      ( ) multiplicación implícita, ejemplo: 3(a + b)
    `
  },

  // =====================================
  // 1.2.4 — División (÷)
  // =====================================
  "1.2.4": {
    titulo: "¡Muy bien!",
    mensaje: "Seleccionaste correctamente el símbolo de división.",
    extra: `
      <strong>Símbolos:</strong><br>
      "÷" división en primaria y secundaria<br>
      "/" uso en programación y expresiones matemáticas<br>
      a⁄b (fracción: la forma preferida en álgebra)
    `
  },

  // =====================================
  // 1.2.5 — Igualdad (=)
  // =====================================
  "1.2.5": {
    titulo: "¡Perfecto!",
    mensaje: "Reconociste el símbolo de igualdad.",
    extra: `
      <strong>Propósito del símbolo:</strong><br>
      = (indica que dos expresiones tienen el mismo valor)<br><br>
      <strong>Ejemplos:</strong><br>
      a = b<br>
      x = 1<br>
    `
  },

  // =====================================
  // 1.2.6 — Mayor que ( > )
  // =====================================
  "1.2.6": {
    titulo: "¡Correcto!",
    mensaje: "Identificaste el símbolo 'mayor que'.",
    extra: `
      <strong>Propósito del símbolo:</strong><br>
      ">" se usa cuando el valor de la izquierda es estrictamente mayor.<br><br>
      <strong>Ejemplos:</strong><br>
      5 > 1<br>
      x > 2<br>
      
    `
  },

  // =====================================
  // 1.2.7 — Menor que ( < )
  // =====================================
  "1.2.7": {
    titulo: "¡Bien hecho!",
    mensaje: "Seleccionaste correctamente el símbolo 'menor que'.",
    extra: `
      <strong>Propósito del símbolo:</strong><br>
      "<" se usa cuando el valor de la izquierda es estrictamente menor.<br><br>
      <strong>Ejemplos:</strong><br>
      2 < 6<br>
      x < 3<br>
    `
  },

  // =====================================
  // 1.2.8 — Diferente de ( ≠ )
  // =====================================
  "1.2.8": {
    titulo: "¡Excelente!",
    mensaje: "Identificaste el símbolo de desigualdad 'diferente de'.",
    extra: `

      <strong>Propósito del símbolo:</strong><br>
      "≠" se usa cuando dos expresiones NO tienen el mismo valor.<br><br>
      <strong>Ejemplos:</strong><br>
      3 ≠ 6<br>
      x ≠ 3<br>
    `
  },

  "1.2.9": {
  titulo: "¡Correcto!",
  mensaje: "Has formado correctamente una expresión de comparación.",
  extra: `
    <strong>Expresión formada:</strong><br>
    x &gt; 9<br><br>

    <strong>¿Qué significa?</strong><br>
    Indica que el valor de la variable es <em>mayor que 9</em>.<br><br>

    <strong>Lectura correcta:</strong><br>
    “x es mayor que nueve”.<br><br>

    <strong>Idea clave:</strong><br>
    El símbolo &gt; se utiliza para comparar cantidades cuando una es mayor que otra.
  `
},
"1.2.10": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente una relación de igualdad.",
  extra: `
    <strong>Expresión formada:</strong><br>
    x = 2c<br><br>

    <strong>Interpretación:</strong><br>
    • x representa la cantidad de lápices.<br>
    • c representa la cantidad de cuadernos.<br>
    • 2c significa “el doble de cuadernos”.<br><br>

    <strong>Lectura correcta:</strong><br>
    “La cantidad de lápices es igual al doble de cuadernos”.<br><br>
  `
},
"1.2.11": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente una desigualdad.",
  extra: `
    <strong>Expresión formada:</strong><br>
    x ≠ 3<br><br>

    <strong>¿Qué significa?</strong><br>
    Indica que el valor de la variable <em>no es igual</em> a 3.<br><br>

    <strong>Lectura correcta:</strong><br>
    “x es diferente de tres”.<br><br>

    <strong>Idea clave:</strong><br>
    El símbolo ≠ se utiliza cuando queremos expresar que dos valores no coinciden.
  `
},


"1.3.1": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente una incógnita.",
  extra: `
    <strong>La incógnita se simboliza simplemente con una letra</strong><br>
    <br>

    <strong>Ejemplos comunes:</strong><br>
    x, y, n, a, b<br><br>

    <strong>¿Por qué usamos letras?</strong><br>
    Porque permiten expresar cantidades generales sin conocer su valor exacto.
  `
 },
 "1.3.2": {
  titulo: "¡Muy bien!",
  mensaje: "Has formado correctamente la ecuación del problema.",
  extra: `
    <strong>¿Por qué usamos la letra a?</strong><br>
    La letra <strong>a</strong> representa un número desconocido, llamado <em>incógnita</em>.<br><br>

    <strong>Ecuación formada:</strong> a + 5 = 9<br><br>

    <strong>¿Qué significa?</strong><br>
    Significa que estamos buscando el número que, al sumarle 5, dé como resultado 9.<br><br>

    Esta ecuación se resuelve encontrando el valor que hace verdadera la igualdad.
  `
},
"1.3.3": {
  titulo: "¡Excelente!",
  mensaje: "Has formado correctamente la ecuación del enunciado.",
  extra: `
    <strong>¿Qué representa la variable?</strong><br>
    La letra elegida (como x) representa un número desconocido, es decir, la <em>incógnita</em> del problema.<br><br>

    <strong>Ecuación formada:</strong> x − 4 = 8<br><br>

    <strong>¿Qué significa?</strong><br>
    Significa que buscamos un número que, al restarle 4, dé como resultado 8.<br><br>

    Este tipo de ecuaciones ayudan a expresar relaciones numéricas de manera clara y ordenada.
  `
},
"1.3.4": {
  titulo: "¡Muy bien!",
  mensaje: "Has formado correctamente la expresión del doble de un número.",
  extra: `
    <strong>¿Por qué usamos una letra?</strong><br>
    La letra representa un valor desconocido. Es nuestra <em>incógnita</em>.<br><br>

    <strong>Expresión formada:</strong> 2 · x<br><br>

    <strong>¿Qué significa?</strong><br>
    Significa “dos veces un número”.<br><br>

    Este tipo de expresiones permite modelar situaciones reales donde el valor aún no se conoce.
  `
},
"1.3.5": {
  titulo: "¡Excelente!",
  mensaje: "Has representado una división con incógnita de forma correcta.",
  extra: `
    <strong>Incógnita:</strong><br>
    La letra utilizada representa un valor desconocido, el cual estamos dividiendo.<br><br>

    <strong>Expresión formada:</strong> x ÷ 3<br><br>

    <strong>¿Qué representa?</strong><br>
    Significa que un número desconocido se está repartiendo o dividiendo en 3 partes iguales.<br><br>

    Estas expresiones son la base para resolver ecuaciones de división.
  `
},
"1.3.6": {
  titulo: "¡Muy bien!",
  mensaje: "Has identificado correctamente la incógnita de la expresión.",
  extra: `
    <strong>Expresión analizada:</strong><br>
    x + 7 = 15<br><br>

    <strong>¿Cuál es la incógnita?</strong><br>
    La variable <strong>x</strong> es la incógnita porque es el valor que debemos encontrar para que la igualdad sea verdadera.<br><br>

    <strong>¿Por qué no son incógnitas 7 o 15?</strong><br>
    Porque esos valores ya se conocen. Sólo x representa un valor desconocido.
  `
},
"1.3.7": {
  titulo: "¡Excelente!",
  mensaje: "Has identificado la incógnita correctamente.",
  extra: `
    <strong>Expresión analizada:</strong><br>
    3n = 6<br><br>

    <strong>¿Cuál es la incógnita?</strong><br>
    La letra <strong>n</strong> es la incógnita porque representa el valor desconocido que multiplicado por 3 da como resultado 6.<br><br>

    <strong>Idea clave:</strong><br>
    En las expresiones algebraicas, las letras representan los valores que queremos encontrar.
  `
},
"1.4.1": {
  titulo: "¡Excelente!",
  mensaje: "Has formado correctamente el término algebraico 4x.",
  extra: `
    <strong>¿Qué es un término algebraico?</strong><br>
    Es una expresión que combina un número (coeficiente) con una letra (incógnita).<br><br>

    <strong>En 4x:</strong><br>
    • 4 es el <em>coeficiente</em>.<br>
    • x es la <em>incógnita</em> o variable.<br><br>

    <strong>¿Qué representa?</strong><br>
    Representa “cuatro veces un número desconocido”.<br><br>
  `
},
"1.4.2": {
  titulo: "¡Muy bien!",
  mensaje: "Has generado correctamente el término algebraico negativo -7y.",
  extra: `
    <strong>¿Qué significa -7y?</strong><br>
    Es un término algebraico formado por:<br>
    • <strong>-7</strong>: coeficiente negativo<br>
    • <strong>y</strong>: incógnita o variable<br><br>

    <strong>Interpretación:</strong><br>
    Representa “siete veces un número desconocido, pero en negativo”.<br><br>
  `
},
"1.4.3": {
  titulo: "¡Excelente!",
  mensaje: "Has formado correctamente la expresión algebraica 3a + 2b.",
  extra: `
    <strong>¿Qué representa esta expresión?</strong><br>
    Está formada por dos términos:<br><br>

    • <strong>3a</strong>: “tres veces la variable a”<br>
    • <strong>2b</strong>: “dos veces la variable b”<br><br>

    <strong>¿Qué tipo de expresión es?</strong><br>
    Es una expresión algebraica con dos términos, unidos por una suma.<br><br>

  `
},
"1.4.4": {
  titulo: "¡Excelente!",
  mensaje: "Has construido una expresión con dos términos algebraicos negativos.",
  extra: `
    <strong>Ejemplo construido:</strong> −3x − 5y<br><br>

    <strong>¿Qué significa?</strong><br>
    • Ambos términos tienen coeficientes negativos.<br>
    • x e y son variables independientes.<br><br>

    <strong>Idea clave:</strong><br>
    Una expresión puede tener varios términos y cada uno puede ser positivo o negativo.
  `
},
"1.4.5": {
  titulo: "¡Muy bien!",
  mensaje: "Has construido una expresión con dos términos algebraicos y un término independiente.",
  extra: `
    <strong>Ejemplo formado:</strong> 4x + 2y + 7<br><br>

    <strong>Partes de la expresión:</strong><br>
    • <strong>4x</strong>: primer término algebraico<br>
    • <strong>2y</strong>: segundo término algebraico<br>
    • <strong>7</strong>: término independiente<br><br>

    <strong>Idea clave:</strong><br>
    Los términos independientes no tienen variable y son esenciales para formar expresiones completas.
  `
},
"1.4.6": {
  titulo: "¡Excelente!",
  mensaje: "Has identificado correctamente el segundo término de la expresión.",
  extra: `
    <strong>Expresión completa:</strong> 3x + 2y + 7<br><br>

    <strong>Segundo término:</strong> 2y<br><br>

    <strong>Partes:</strong><br>
    • <strong>2</strong>: coeficiente<br>
    • <strong>y</strong>: variable<br><br>

    Reconocer cada parte de una expresión ayuda a comprender su estructura y significado.
  `
},
"1.4.7": {
  titulo: "¡Excelente!",
  mensaje: "Has identificado correctamente el término independiente.",
  extra: `
    <strong>Expresión analizada:</strong><br>
    4x + 2y + 5<br><br>

    <strong>¿Cuál es el término independiente?</strong><br>
    El número <strong>5</strong> porque es el único término que <em>no tiene variable</em>.<br><br>

    <strong>Idea clave:</strong><br>
    En una expresión algebraica, el término independiente es un valor constante que no cambia y no depende de una variable.
  `
},
"1.5.1": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente la expresión de la edad de Ana dentro de 5 años.",
  extra: `
    <strong>Interpretación:</strong><br>
    Si <strong>a</strong> representa la edad actual de Ana, entonces <strong>a + 5</strong> representa su edad dentro de 5 años.<br><br>

    <strong>Idea clave:</strong><br>
    El lenguaje común puede convertirse en expresiones algebraicas cuando identificamos:<br>
    • La cantidad desconocida (la edad actual).<br>
    • El cambio que ocurre (pasar 5 años).<br><br>

    <strong>Resultado:</strong><br>
    La expresión <strong>a + 5</strong> modela perfectamente la situación verbal.
  `
},
"1.5.2": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente el triple de un número disminuido en 4.",
  extra: `
    <strong>Expresión formada:</strong> 3x − 4<br><br>

    <strong>Interpretación:</strong><br>
    • 3x → tres veces un número desconocido.<br>
    • −4 → disminuido en cuatro unidades.<br><br>

    Esta expresión representa una operación compuesta expresada en lenguaje común.
  `
},
"1.5.3": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente la mitad de la suma de dos números.",
  extra: `
    <strong>Expresión formada:</strong> (a + b) ÷ 2<br><br>

    <strong>Interpretación:</strong><br>
    La suma de dos cantidades, dividida entre dos, representa su promedio.<br><br>

    Este tipo de expresiones aparece mucho en estadísticas y problemas reales.
  `
},
"1.5.4": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente el doble de la suma de un número y 3.",
  extra: `
    <strong>Expresión formada:</strong> 2(x + 3)<br><br>

    <strong>Interpretación:</strong><br>
    • x es un número desconocido.<br>
    • x + 3 representa “un número aumentado en tres”.<br>
    • 2(x + 3) indica que el resultado se duplica.<br><br>

    <strong>Idea clave:</strong><br>
    Las expresiones con paréntesis representan operaciones que deben
    realizarse antes de multiplicar, siguiendo las reglas del álgebra.
  `
},
"1.5.5": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente la edad de Beto hace 3 años.",
  extra: `
    <strong>Expresión formada:</strong> b − 3<br><br>

    <strong>Interpretación:</strong><br>
    Si b representa la edad actual, entonces b − 3 es su edad tres años atrás.<br><br>

    Este tipo de expresiones ayudan a modelar cambios en el tiempo.
  `
},
"1.5.6": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente el precio tres pesos menor al costo del cuaderno.",
  extra: `
    <strong>Expresión formada:</strong> c − 3<br><br>

    <strong>Interpretación:</strong><br>
    Si c es el costo del cuaderno, entonces c − 3 representa un precio menor por tres pesos.<br><br>

    Este tipo de expresiones es común en descuentos y comparaciones de precios.
  `
},
"1.5.7": {
  titulo: "¡Muy bien!",
  mensaje: "Has representado correctamente el costo total de las entradas.",
  extra: `
    <strong>Expresión formada:</strong> 50n<br><br>

    <strong>Interpretación:</strong><br>
    • 9 representa el precio de una entrada.<br>
    • n representa la cantidad de entradas.<br><br>

    <strong>9n</strong> es el costo total al multiplicar precio por cantidad.
  `
},
"1.5.8": {
  titulo: "¡Correcto!",
  mensaje: "Has representado correctamente la cantidad total de dulces.",
  extra: `
    <strong>Expresión formada:</strong> 8 + x<br><br>

    <strong>Interpretación:</strong><br>
    • 8 dulces estaban inicialmente en la caja.<br>
    • x dulces se agregan después.<br><br>

    <strong>8 + x</strong> representa el total de dulces después de agregar más.
  `
},
"1.5.9": {
  titulo: "¡Excelente!",
  mensaje: "Has representado correctamente el costo total de libretas y lápices.",
  extra: `
    <strong>Expresión formada:</strong> 3p + 2·5<br><br>

    <strong>Interpretación:</strong><br>
    • 3p → costo de 3 libretas.<br>
    • 2·5 → costo de 2 lápices de 5 pesos cada uno.<br><br>

    También puede simplificarse a:<br>
    <strong>3p + 10</strong><br><br>

    Esta expresión combina precio y cantidad en una sola representación algebraica.
  `
},
"2.1.1": {
    titulo: "¡Muy bien!",
    mensaje: "Has formado un término algebraico correctamente.",
    extra: `
        <strong>¿Qué lograste?</strong><br>
        Construiste un término como <em>4x</em> o <em>7m</em>.<br><br>

        <strong>Partes del término:</strong><br>
        • Número → coeficiente<br>
        • Letra → variable<br><br>

        Este es el elemento básico de todas las expresiones algebraicas.
    `
},

"2.1.2": {
    titulo: "¡Excelente!",
    mensaje: "Construiste una expresión con dos términos.",
    extra: `
        <strong>Ejemplo formado:</strong> 3x + 2y<br><br>

        Una <strong>expresión algebraica</strong> puede tener varios términos unidos por suma o resta.<br><br>

        Cada término combina coeficientes y variables. ¡Muy buen trabajo!
    `
},
"2.1.3": {
    titulo: "¡Muy bien!",
    mensaje: "Has construido correctamente una expresión con un término algebraico y un término independiente.",
    extra: `
        <strong>¿Qué lograste?</strong><br>
        Formaste una expresión como: <em>4x + 7</em>.<br><br>

        <strong>Partes de la expresión:</strong><br>
        • <strong>4x</strong>: término algebraico (coeficiente + variable).<br>
        • <strong>7</strong>: término independiente (no tiene variable).<br><br>

        <strong>Idea clave:</strong><br>
        Una expresión algebraica puede combinar términos con variables y valores constantes para representar cantidades reales.
    `
},
"2.1.4": {
    titulo: "¡Excelente!",
    mensaje: "Has formado correctamente una expresión con tres términos algebraicos.",
    extra: `
        <strong>Ejemplo de expresión:</strong><br>
        3x + 2y + 5z<br><br>

        <strong>¿Qué representa?</strong><br>
        Cada término está formado por un coeficiente y una variable:<br>
        • <strong>3x</strong>: tres veces la variable x<br>
        • <strong>2y</strong>: dos veces la variable y<br>
        • <strong>5z</strong>: cinco veces la variable z<br><br>

        <strong>Idea clave:</strong><br>
        Las expresiones algebraicas pueden tener varios términos unidos por suma o resta.  
        Cada término aporta información diferente sobre la cantidad representada.
    `
},
"2.1.5": {
    titulo: "¡Perfecto!",
    mensaje: "Has construido correctamente una expresión con dos términos algebraicos y un término independiente.",
    extra: `
        <strong>Ejemplo de expresión:</strong><br>
        2a + 3b + 6<br><br>

        <strong>¿Qué significa?</strong><br>
        • <strong>2a</strong>: primer término algebraico<br>
        • <strong>3b</strong>: segundo término algebraico<br>
        • <strong>6</strong>: término independiente<br><br>

        <strong>Idea clave:</strong><br>
        El término independiente aporta un valor fijo.  
        Los términos algebraicos representan cantidades variables.  
        Juntos forman expresiones más ricas y completas.
    `
},
"2.2.1": {
    titulo: "¡Muy bien!",
    mensaje: "Construiste un monomio correctamente.",
    extra: `
        <strong>¿Qué es un monomio?</strong><br>
        Es una expresión de un solo término, como <em>5x</em> o <em>3m</em>.<br><br>

        Se compone de:<br>
        • Un coeficiente (número)<br>
        • Una variable (letra)<br><br>

        Son la base de todas las expresiones algebraicas más complejas.
    `
},
"2.2.2": {
    titulo: "¡Excelente!",
    mensaje: "Has construido un binomio.",
    extra: `
        <strong>¿Qué es un binomio?</strong><br>
        Es una expresión con dos términos, como <em>3x + 7</em>.<br><br>

        Los términos están separados por suma o resta.<br>
        Cada término puede ser algebraico o independiente.<br><br>

        ¡Vas entendiendo muy bien cómo se clasifican las expresiones!
    `
},
"2.2.3": {
    titulo: "¡Perfecto!",
    mensaje: "Has formado un trinomio correctamente.",
    extra: `
        <strong>¿Qué es un trinomio?</strong><br>
        Es una expresión con tres términos, por ejemplo:<br>
        <em>2x + 3y + 5</em><br><br>

        Cada término aporta una parte de la expresión total.<br><br>

        Comprender los trinomios es esencial antes de estudiar polinomios más grandes.
    `
},
"2.2.4": {
    titulo: "¡Excelente trabajo!",
    mensaje: "Has construido correctamente un polinomio.",
    extra: `
        <strong>¿Qué es un polinomio?</strong><br>
        Es una expresión de cuatro o más términos.<br><br>

        Ejemplo:<br>
        <em>x + 2y + 3z + 4</em><br><br>

        Los polinomios son expresiones más generales que permiten modelar situaciones reales más complejas.
    `
},
"2.3.1": {
    titulo: "¡Muy bien!",
    mensaje: "Has identificado correctamente el coeficiente del monomio.",
    extra: `
        <strong>Monomio analizado:</strong> 7m²n<br><br>

        <strong>¿Qué es el coeficiente?</strong><br>
        Es el <em>número</em> que multiplica a todas las variables del monomio.<br><br>

        <strong>Coeficiente del monomio 7m²n:</strong><br>
        • <strong>7</strong> es el valor numérico que acompaña a las variables m y n.<br><br>

        <strong>Idea clave:</strong><br>
        El coeficiente siempre indica cuántas veces se toma el producto de las variables con sus exponentes.  
        En este caso, el número <strong>7</strong> es el coeficiente del monomio completo.
    `
},
"2.3.2": {
    titulo: "¡Excelente!",
    mensaje: "Has identificado correctamente la variable del monomio.",
    extra: `
        <strong>Monomio analizado:</strong> 7m²n<br><br>

        <strong>¿Qué es la variable?</strong><br>
        Es la letra o símbolo que representa una cantidad desconocida y que puede cambiar su valor.<br><br>

        <strong>Variables del monomio 7m²n:</strong><br>
        • <strong>m</strong> es una variable.<br>
        • <strong>n</strong> también es una variable.<br><br>

        <strong>Idea clave:</strong><br>
        Los monomios pueden tener una o varias variables.  
        Las variables siempre son letras y representan cantidades que pueden variar.
    `
},
"2.3.3": {
    titulo: "¡Muy bien!",
    mensaje: "Has identificado correctamente el exponente del monomio.",
    extra: `
        <strong>Monomio analizado:</strong> 7m²n<br><br>

        <strong>¿Qué es el exponente?</strong><br>
        Es el número que indica cuántas veces se multiplica una variable por sí misma.<br><br>

        <strong>Exponentes en el monomio 7m²n:</strong><br>
        • La variable <strong>m</strong> tiene exponente <strong>2</strong> (m²).<br>
        • La variable <strong>n</strong> tiene exponente <strong>1</strong> (aunque no se escriba).<br><br>

        <strong>Idea clave:</strong><br>
        Si una variable no tiene exponente escrito, se asume que es <strong>1</strong>.  
        Los exponentes determinan el comportamiento algebraico del monomio.
    `
},
"2.3.4": {
    titulo: "¡Perfecto!",
    mensaje: "Has identificado correctamente el grado del monomio.",
    extra: `
        <strong>Monomio analizado:</strong> 7m²n<br><br>

        <strong>¿Qué es el grado?</strong><br>
        Es la suma de los exponentes de todas las variables que aparecen en el monomio.<br><br>

        <strong>Cálculo del grado de 7m²n:</strong><br>
        • Exponente de m: <strong>2</strong><br>
        • Exponente de n: <strong>1</strong><br>
        • <strong>Grado total = 2 + 1 = 3</strong><br><br>

        <strong>Idea clave:</strong><br>
        El grado del monomio describe su “nivel” algebraico y es fundamental para clasificar y operar expresiones algebraicas.
    `
},

// =============================
// POPUPS PREMIUM — TEMA 3.1.1 Multriplicaciòn de potencias
// =============================

"3.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la regla de multiplicación de potencias con la misma base.",
  extra: `
    <strong>Regla:</strong> x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup><br><br>
    <strong>En el ejercicio:</strong> (x³)(x⁴) = x<sup>3+4</sup> = x⁷<br><br>
    <strong>Idea clave:</strong> Al multiplicar potencias con la misma base, <em>se suman los exponentes</em>.
  `
},

"3.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Sumaste los exponentes correctamente para obtener el resultado.",
  extra: `
    <strong>Regla:</strong> x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup><br><br>
    <strong>En el ejercicio:</strong> x⁴ · x⁵ = x<sup>4+5</sup> = x⁹<br><br>
    <strong>Consejo:</strong> Si la base es la misma (x), la operación principal es sumar exponentes.
  `
},

"3.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Combinaste coeficientes y exponentes de forma adecuada.",
  extra: `
    <strong>Paso 1 (coeficientes):</strong> 3 · 2 = 6<br>
    <strong>Paso 2 (potencias):</strong> x⁴ · x² = x<sup>4+2</sup> = x⁶<br><br>
    <strong>Resultado:</strong> (3x⁴)(2x²) = 6x⁶<br><br>
    <strong>Idea clave:</strong> En monomios: <em>multiplica números</em> y <em>suma exponentes</em>.
  `
},

"3.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste la regla con exponentes y mantuviste el coeficiente.",
  extra: `
    <strong>Paso 1 (coeficientes):</strong> 5 · 1 = 5<br>
    <strong>Paso 2 (potencias):</strong> x¹ · x² = x<sup>1+2</sup> = x³<br><br>
    <strong>Resultado:</strong> (5x)(x²) = 5x³<br><br>
    <strong>Tip:</strong> Cuando no se ve exponente, es <strong>1</strong> (x = x¹).
  `
},

"3.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Identificaste correctamente el coeficiente y sumaste los exponentes.",
  extra: `
    <strong>Paso 1 (coeficientes):</strong> 1 · 7 = 7<br>
    <strong>Paso 2 (potencias):</strong> x¹ · x¹ = x<sup>1+1</sup> = x²<br><br>
    <strong>Resultado:</strong> (x)(7x) = 7x²<br><br>
    <strong>Idea clave:</strong> x = x¹, por eso también se suma 1 + 1.
  `
},

// =============================
// POPUPS PREMIUM — 3.1.2 División de potencias
// =============================

"3.1.2.1": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la regla de división de potencias con la misma base.",
  extra: `
    <strong>Regla:</strong> x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup><br><br>
    <strong>En el ejercicio:</strong> x⁸ ÷ x³ = x<sup>8−3</sup> = x⁵<br><br>
    <strong>Idea clave:</strong> En división con la misma base, <em>se restan los exponentes</em>.
  `
},

"3.1.2.2": {
  titulo: "¡Muy bien!",
  mensaje: "Restaste los exponentes correctamente para obtener el resultado.",
  extra: `
    <strong>Regla:</strong> x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a−b</sup><br><br>
    <strong>En el ejercicio:</strong> x⁹ ÷ x⁴ = x<sup>9−4</sup> = x⁵<br><br>
    <strong>Consejo:</strong> Si la base es la misma, el trabajo está en el exponente.
  `
},

"3.1.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Dividiste coeficientes y aplicaste la regla de exponentes de forma adecuada.",
  extra: `
    <strong>Paso 1 (coeficientes):</strong> 6 ÷ 2 = 3<br>
    <strong>Paso 2 (potencias):</strong> x⁷ ÷ x² = x<sup>7−2</sup> = x⁵<br><br>
    <strong>Resultado:</strong> (6x⁷) ÷ (2x²) = 3x⁵<br><br>
    <strong>Idea clave:</strong> En monomios, <em>divide números</em> y <em>resta exponentes</em>.
  `
},

"3.1.2.4": {
  titulo: "¡Excelente!",
  mensaje: "Mantuviste el coeficiente y restaste correctamente los exponentes.",
  extra: `
    <strong>Paso 1 (coeficiente):</strong> 5 ÷ 1 = 5<br>
    <strong>Paso 2 (potencias):</strong> x⁶ ÷ x² = x<sup>6−2</sup> = x⁴<br><br>
    <strong>Resultado:</strong> (5x⁶) ÷ (x²) = 5x⁴<br><br>
    <strong>Tip:</strong> Cuando no se ve coeficiente, es <strong>1</strong>.
  `
},

"3.1.2.5": {
  titulo: "¡Excelente!",
  mensaje: "Has aplicado correctamente la regla del exponente cero.",
  extra: `
    <strong>Regla:</strong><br>
    x<sup>a</sup> ÷ x<sup>a</sup> = x<sup>a−a</sup> = x⁰<br><br>

    <strong>En el ejercicio:</strong><br>
    x² ÷ x² = x<sup>2−2</sup> = x⁰ = 1<br><br>

    <strong>Idea clave:</strong><br>
    Cualquier número distinto de cero elevado a la potencia cero es <strong>1</strong>.<br><br>

    Esta regla es fundamental para simplificar expresiones algebraicas.
  `
},

"3.1.3.1": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la regla de potencia de una potencia.",
  extra: `
    <strong>Regla:</strong><br>
    (x<sup>a</sup>)<sup>b</sup> = x<sup>a·b</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (x²)³ = x<sup>2·3</sup> = x⁶<br><br>

    <strong>Idea clave:</strong><br>
    Cuando una potencia se eleva a otra potencia, <em>los exponentes se multiplican</em>.
  `
},

"3.1.3.2": {
  titulo: "¡Muy bien!",
  mensaje: "Multiplicaste correctamente los exponentes.",
  extra: `
    <strong>Regla:</strong><br>
    (x<sup>a</sup>)<sup>b</sup> = x<sup>a·b</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (x³)³ = x<sup>3·3</sup> = x⁹<br><br>

    <strong>Consejo:</strong><br>
    No se suman exponentes: <strong>se multiplican</strong>.
  `
},

"3.1.3.3": {
  titulo: "¡Correcto!",
  mensaje: "Simplificaste correctamente la potencia.",
  extra: `
    <strong>Regla:</strong><br>
    (x<sup>a</sup>)<sup>b</sup> = x<sup>a·b</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (x²)² = x<sup>2·2</sup> = x⁴<br><br>

    <strong>Idea clave:</strong><br>
    Una potencia elevada al cuadrado multiplica su exponente por 2.
  `
},

"3.1.3.4": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente el exponente implícito.",
  extra: `
    <strong>Observación importante:</strong><br>
    x = x¹<br><br>

    <strong>En el ejercicio:</strong><br>
    (x)⁵ = (x¹)⁵ = x<sup>1·5</sup> = x⁵<br><br>

    <strong>Idea clave:</strong><br>
    Cuando no se ve exponente, siempre es <strong>1</strong>.
  `
},

"3.1.3.5": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la regla del exponente cero.",
  extra: `
    <strong>Paso 1:</strong><br>
    (x⁰)³ = x<sup>0·3</sup> = x⁰<br><br>

    <strong>Paso 2:</strong><br>
    x⁰ = 1 (si x ≠ 0)<br><br>

    <strong>Resultado final:</strong><br>
    (x⁰)³ = 1<br><br>

    <strong>Idea clave:</strong><br>
    Cualquier potencia con exponente cero equivale a <strong>1</strong>.
  `
},

"3.1.4.1": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la potencia a cada factor del producto.",
  extra: `
    <strong>Regla:</strong><br>
    (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (2x)² = 2² · x² = 4x²<br><br>

    <strong>Idea clave:</strong><br>
    La potencia se distribuye tanto al número como a la variable.
  `
},

"3.1.4.2": {
  titulo: "¡Muy bien!",
  mensaje: "Distribuiste correctamente la potencia en el producto.",
  extra: `
    <strong>Regla:</strong><br>
    (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (3x)² = 3² · x² = 9x²<br><br>

    <strong>Consejo:</strong><br>
    No se eleva solo la variable; <em>todos los factores</em> reciben la potencia.
  `
},

"3.1.4.3": {
  titulo: "¡Correcto!",
  mensaje: "Elevaste correctamente cada factor del producto al cubo.",
  extra: `
    <strong>Regla:</strong><br>
    (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (2x)³ = 2³ · x³ = 8x³<br><br>

    <strong>Idea clave:</strong><br>
    Primero eleva el coeficiente y luego la variable.
  `
},

"3.1.4.4": {
  titulo: "¡Excelente!",
  mensaje: "Distribuiste la potencia correctamente en todos los factores.",
  extra: `
    <strong>Regla:</strong><br>
    (abc)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>c<sup>n</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (2ab)² = 2² · a² · b² = 4a²b²<br><br>

    <strong>Idea clave:</strong><br>
    La potencia se aplica a <em>cada elemento</em> del producto.
  `
},

"3.1.4.5": {
  titulo: "¡Muy bien!",
  mensaje: "Identificaste correctamente la potencia aplicada a cada variable.",
  extra: `
    <strong>Regla:</strong><br>
    (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup><br><br>

    <strong>En el ejercicio:</strong><br>
    (xb)² = x² · b²<br><br>

    <strong>Idea clave:</strong><br>
    Cada variable conserva su identidad y recibe la misma potencia.
  `
},

"3.1.5.1": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente el exponente uno.",
  extra: `
    <strong>Regla:</strong><br>
    x¹ = x<br><br>

    <strong>Interpretación:</strong><br>
    Cuando una base tiene exponente 1, el resultado es la misma base.<br><br>

    <strong>Idea clave:</strong><br>
    El exponente uno no cambia el valor de la expresión.
  `
},

"3.1.5.2": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la potencia con exponente uno.",
  extra: `
    <strong>Regla:</strong><br>
    x¹ = x<br><br>

    <strong>En el ejercicio:</strong><br>
    5x¹ = 5x<br><br>

    <strong>Idea clave:</strong><br>
    El coeficiente permanece igual y la potencia se simplifica.
  `
},

"3.1.5.3": {
  titulo: "¡Correcto!",
  mensaje: "Aplicaste correctamente la regla del exponente cero.",
  extra: `
    <strong>Regla:</strong><br>
    x⁰ = 1 &nbsp;&nbsp;(x ≠ 0)<br><br>

    <strong>Interpretación:</strong><br>
    Cualquier base distinta de cero elevada a exponente cero es 1.<br><br>

    <strong>Idea clave:</strong><br>
    El exponente cero elimina la variable.
  `
},

"3.1.5.4": {
  titulo: "¡Excelente!",
  mensaje: "Simplificaste correctamente la expresión con exponente cero.",
  extra: `
    <strong>Regla:</strong><br>
    x⁰ = 1<br><br>

    <strong>En el ejercicio:</strong><br>
    7x⁰ = 7 · 1 = 7<br><br>

    <strong>Idea clave:</strong><br>
    Cuando una variable tiene exponente cero, solo queda el coeficiente.
  `
},

"3.1.5.5": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente usando las reglas de los exponentes.",
  extra: `
    <strong>Paso 1:</strong><br>
    x¹ = x &nbsp; y &nbsp; x⁰ = 1<br><br>

    <strong>Paso 2:</strong><br>
    3x¹ · x⁰ = 3 · x · 1 = 3x<br><br>

    <strong>Idea clave:</strong><br>
    El exponente cero elimina la variable y el exponente uno la conserva.
  `
},

"3.2.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Determinaste correctamente el signo y el resultado del producto.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (+) · (+) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 3 · 2 = 6<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    +6x²<br><br>

    <strong>Idea clave:</strong><br>
    El producto de dos monomios positivos siempre es positivo.
  `
},

"3.2.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la regla de los signos.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (+) · (−) = (−)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 3 · 3 = 9<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    −9x²<br><br>

    <strong>Idea clave:</strong><br>
    Cuando los signos son distintos, el resultado es negativo.
  `
},

"3.2.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Determinaste correctamente el signo y el valor del producto.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) · (+) = (−)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 4 · 2 = 8<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    −8x²<br><br>

    <strong>Idea clave:</strong><br>
    Un signo negativo y uno positivo siempre producen un resultado negativo.
  `
},

"3.2.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente que dos negativos producen un positivo.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) · (−) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 2 · 3 = 6<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    +6x²<br><br>

    <strong>Idea clave:</strong><br>
    El producto de dos números negativos siempre es positivo.
  `
},

"3.2.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Identificaste correctamente el signo del producto.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) · (−) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    +x²<br><br>

    <strong>Idea clave:</strong><br>
    Aunque no haya números visibles, las reglas de los signos siguen aplicando.
  `
},

"3.2.2.1": {
  titulo: "¡Excelente!",
  mensaje: "Determinaste correctamente el signo y simplificaste la división.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (+) ÷ (+) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 6 ÷ 3 = 2<br>
    • Variables: x² ÷ x = x¹ = x<br><br>

    <strong>Resultado:</strong><br>
    +2x<br><br>

    <strong>Idea clave:</strong><br>
    En la división de monomios, se <em>dividen coeficientes</em> y se <em>restan exponentes</em>.
  `
},

"3.2.2.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la regla de los signos en la división.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (+) ÷ (−) = (−)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 8 ÷ 4 = 2<br>
    • Variables: x² ÷ x = x¹ = x<br><br>

    <strong>Resultado:</strong><br>
    −2x<br><br>

    <strong>Idea clave:</strong><br>
    Cuando los signos son distintos, el resultado es negativo.
  `
},

"3.2.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Determinaste correctamente el signo y simplificaste la potencia.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) ÷ (+) = (−)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 10 ÷ 5 = 2<br>
    • Variables: x³ ÷ x² = x¹ = x<br><br>

    <strong>Resultado:</strong><br>
    −2x<br><br>

    <strong>Idea clave:</strong><br>
    En la división de potencias con la misma base, <em>se restan exponentes</em>.
  `
},

"3.2.2.4": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente que dos negativos producen un positivo.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) ÷ (−) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 12 ÷ 3 = 4<br>
    • Variables: x² ÷ x = x¹ = x<br><br>

    <strong>Resultado:</strong><br>
    +4x<br><br>

    <strong>Idea clave:</strong><br>
    La división sigue las mismas reglas de signos que la multiplicación.
  `
},

"3.2.2.5": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente el cociente.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) ÷ (−) = (+)<br><br>

    <strong>En el ejercicio:</strong><br>
    • Variables: x² ÷ x = x¹ = x<br><br>

    <strong>Resultado:</strong><br>
    +x<br><br>

    <strong>Idea clave:</strong><br>
    Aunque no haya números visibles, las reglas de los signos y de los exponentes siguen aplicando.
  `
},

"3.3.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Sumaste correctamente monomios semejantes.",
  extra: `
    <strong>Idea clave:</strong><br>
    Solo se pueden sumar monomios con la <em>misma parte literal</em>.<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 1 + 8 = 9<br>
    • Parte literal: x se mantiene<br><br>

    <strong>Resultado:</strong><br>
    9x
  `
},

"3.3.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la resta de monomios semejantes.",
  extra: `
    <strong>Idea clave:</strong><br>
    En la resta, se operan solo los <em>coeficientes</em>.<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 25 − 21 = 4<br>
    • Parte literal: x se conserva<br><br>

    <strong>Resultado:</strong><br>
    4x
  `
},

"3.3.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Sumaste correctamente monomios con la misma potencia.",
  extra: `
    <strong>Idea clave:</strong><br>
    Para sumar monomios, deben tener la <em>misma variable y el mismo exponente</em>.<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 4 + 3 = 7<br>
    • Parte literal: x² se mantiene<br><br>

    <strong>Resultado:</strong><br>
    7x²
  `
},

"3.3.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Restaste correctamente monomios semejantes.",
  extra: `
    <strong>Idea clave:</strong><br>
    La resta no afecta al exponente cuando los monomios son semejantes.<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: 15 − 9 = 6<br>
    • Parte literal: x² permanece igual<br><br>

    <strong>Resultado:</strong><br>
    6x²
  `
},

"3.3.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Sumaste correctamente coeficientes con signos distintos.",
  extra: `
    <strong>Idea clave:</strong><br>
    En la suma algebraica, los <em>signos influyen en el resultado</em>.<br><br>

    <strong>En el ejercicio:</strong><br>
    • Coeficientes: −27 + 35 = 8<br>
    • Parte literal: x se mantiene<br><br>

    <strong>Resultado:</strong><br>
    8x
  `
},

"3.3.2.1": {
  titulo: "¡Excelente!",
  mensaje: "Multiplicaste correctamente los monomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: 3 · 3 = 9<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    9x²<br><br>

    <strong>Idea clave:</strong><br>
    Al multiplicar monomios, se multiplican coeficientes y se <em>suman exponentes</em>.
  `
},

"3.3.2.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la multiplicación de monomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: 4 · 2 = 8<br>
    • Variables: x¹ · x² = x³<br><br>

    <strong>Resultado:</strong><br>
    8x³<br><br>

    <strong>Idea clave:</strong><br>
    Cuando se multiplican potencias con la misma base, <em>se suman los exponentes</em>.
  `
},

"3.3.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Determinaste correctamente el signo y el resultado del producto.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) · (+) = (−)<br><br>

    <strong>Pasos clave:</strong><br>
    • Coeficientes: 3 · 2 = 6<br>
    • Variables: x² · x² = x⁴<br><br>

    <strong>Resultado:</strong><br>
    −6x⁴<br><br>

    <strong>Idea clave:</strong><br>
    En la multiplicación de monomios, el signo se analiza antes de operar.
  `
},

"3.3.2.4": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente que dos negativos producen un positivo.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) · (−) = (+)<br><br>

    <strong>Pasos clave:</strong><br>
    • Coeficientes: 2 · 3 = 6<br>
    • Variables: x · x = x²<br><br>

    <strong>Resultado:</strong><br>
    6x²<br><br>

    <strong>Idea clave:</strong><br>
    El signo del resultado depende solo de los signos de los factores.
  `
},

"3.3.2.5": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente el producto de monomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: 9 · 1 = 9<br>
    • Variables: x¹ · x³ = x⁴<br><br>

    <strong>Resultado:</strong><br>
    9x⁴<br><br>

    <strong>Idea clave:</strong><br>
    Aunque no se vea, una variable sola tiene exponente <strong>1</strong>.
  `
},

"3.3.3.1": {
  titulo: "¡Excelente!",
  mensaje: "Dividiste correctamente los monomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: 21 ÷ 3 = 7<br>
    • Variables: x³ ÷ x = x<sup>3−1</sup> = x²<br><br>

    <strong>Resultado:</strong><br>
    7x²<br><br>

    <strong>Idea clave:</strong><br>
    En la división de monomios, se <em>dividen coeficientes</em> y se <em>restan exponentes</em>.
  `
},

"3.3.3.2": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente el cociente.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: 18 ÷ 3 = 6<br>
    • Variables: x² ÷ x = x<sup>2−1</sup> = x<br><br>

    <strong>Resultado:</strong><br>
    6x<br><br>

    <strong>Idea clave:</strong><br>
    Cuando el exponente final es 1, la variable se escribe sin exponente.
  `
},

"3.3.3.3": {
  titulo: "¡Correcto!",
  mensaje: "Aplicaste correctamente la regla de los signos y de los exponentes.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) ÷ (+) = (−)<br><br>

    <strong>Pasos clave:</strong><br>
    • Coeficientes: 9 ÷ 3 = 3<br>
    • Variables: x² ÷ x = x<br><br>

    <strong>Resultado:</strong><br>
    −3x<br><br>

    <strong>Idea clave:</strong><br>
    El signo del resultado depende de los signos del dividendo y del divisor.
  `
},

"3.3.3.4": {
  titulo: "¡Excelente!",
  mensaje: "Reconociste correctamente que dos negativos producen un positivo.",
  extra: `
    <strong>Regla de los signos:</strong><br>
    (−) ÷ (−) = (+)<br><br>

    <strong>Pasos clave:</strong><br>
    • Coeficientes: 12 ÷ 3 = 4<br>
    • Variables: x⁵ ÷ x² = x<sup>5−2</sup> = x³<br><br>

    <strong>Resultado:</strong><br>
    4x³<br><br>

    <strong>Idea clave:</strong><br>
    En la división de potencias con la misma base, siempre se restan los exponentes.
  `
},

"3.3.3.5": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la división.",
  extra: `
    <strong>Observación importante:</strong><br>
    x ÷ x = 1 &nbsp;(x ≠ 0)<br><br>

    <strong>En el ejercicio:</strong><br>
    5x ÷ x = 5 · 1 = 5<br><br>

    <strong>Idea clave:</strong><br>
    Cuando la misma variable aparece en numerador y denominador, se cancela.
  `
},

"3.4.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Identificaste correctamente el factor común.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: MCD(12, 8) = 4<br>
    • Variable: x está en ambos términos<br><br>

    <strong>Factor común:</strong><br>
    4x<br><br>

    <strong>Idea clave:</strong><br>
    El factor común es el mayor número y las variables que se repiten en todos los términos.
  `
},

"3.4.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Determinaste correctamente el factor común.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: MCD(18, 27) = 9<br>
    • Variable: x se repite en ambos términos<br><br>

    <strong>Factor común:</strong><br>
    9x<br><br>

    <strong>Idea clave:</strong><br>
    Siempre busca el <em>máximo común divisor</em> entre los coeficientes.
  `
},

"3.4.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Identificaste correctamente el factor común con diferentes exponentes.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: MCD(20, 12) = 4<br>
    • Variables: x² y x → menor exponente = x¹<br><br>

    <strong>Factor común:</strong><br>
    4x<br><br>

    <strong>Idea clave:</strong><br>
    Cuando los exponentes son diferentes, se toma el <em>menor exponente común</em>.
  `
},

"3.4.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Encontraste correctamente el factor común en varios términos.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: MCD(16, 24, 8) = 8<br>
    • Variable: x está en todos los términos<br><br>

    <strong>Factor común:</strong><br>
    8x<br><br>

    <strong>Idea clave:</strong><br>
    El factor común debe estar presente en <em>todos</em> los términos.
  `
},

"3.4.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Identificaste correctamente el factor común en una expresión con signos negativos.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Coeficientes: MCD(15, 25) = 5<br>
    • Variable: x está en ambos términos<br><br>

    <strong>Factor común:</strong><br>
    5x<br><br>

    <strong>Observación:</strong><br>
    El signo negativo puede factorizarse después si se desea.<br><br>

    <strong>Idea clave:</strong><br>
    El factor común se obtiene ignorando temporalmente los signos.
  `
},

"3.4.2.1": {
  titulo: "¡Excelente!",
  mensaje: "Factorizaste correctamente la expresión.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común: 4x<br>
    • 12x ÷ 4x = 3<br>
    • 8x ÷ 4x = 2<br><br>

    <strong>Resultado:</strong><br>
    4x(3 + 2)<br><br>

    <strong>Idea clave:</strong><br>
    Factorizar significa escribir una expresión como el producto de un factor común y un paréntesis.
  `
},

"3.4.2.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente el factor común.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común: 9x<br>
    • 18x ÷ 9x = 2<br>
    • 27x ÷ 9x = 3<br><br>

    <strong>Resultado:</strong><br>
    9x(2 + 3)<br><br>

    <strong>Idea clave:</strong><br>
    Después de extraer el factor común, cada término debe dividirse correctamente.
  `
},

"3.4.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Factorizaste correctamente una expresión con exponentes diferentes.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común: 4x<br>
    • 20x² ÷ 4x = 5x<br>
    • 12x ÷ 4x = 3<br><br>

    <strong>Resultado:</strong><br>
    4x(5x + 3)<br><br>

    <strong>Idea clave:</strong><br>
    Al dividir potencias con la misma base, se restan exponentes.
  `
},

"3.4.2.4": {
  titulo: "¡Excelente!",
  mensaje: "Factorizaste correctamente una expresión con tres términos.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común: 8x<br>
    • 16x ÷ 8x = 2<br>
    • 24x ÷ 8x = 3<br>
    • 8x ÷ 8x = 1<br><br>

    <strong>Resultado:</strong><br>
    8x(2 + 3 + 1)<br><br>

    <strong>Idea clave:</strong><br>
    El factor común debe dividir exactamente a todos los términos.
  `
},

"3.4.2.5": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la factorización por factor común.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común: 5x<br>
    • 15x ÷ 5x = 3<br>
    • 25x ÷ 5x = 5<br><br>

    <strong>Resultado:</strong><br>
    5x(3 + 5)<br><br>

    <strong>Observación:</strong><br>
    También podría factorizarse usando −5x para conservar signos negativos.<br><br>

    <strong>Idea clave:</strong><br>
    Factorizar permite simplificar y reorganizar expresiones algebraicas.
  `
},

"3.5.1.1": {
  titulo: "¡Excelente!",
  mensaje: "Sumaste correctamente las fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 2x + 3x = 5x<br>
    • Denominador: permanece igual (5)<br><br>

    <strong>Resultado:</strong><br>
    5x/5<br><br>

    <strong>Idea clave:</strong><br>
    Cuando las fracciones tienen el mismo denominador, solo se suman los numeradores.
  `
},

"3.5.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la suma de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 4x + 6x = 10x<br>
    • Denominador: permanece igual (7)<br><br>

    <strong>Resultado:</strong><br>
    10x/7<br><br>

    <strong>Idea clave:</strong><br>
    El denominador común se conserva durante toda la operación.
  `
},

"3.5.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Aplicaste correctamente la suma de numeradores semejantes.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 8x + 5x = 13x<br>
    • Denominador: permanece igual (9)<br><br>

    <strong>Resultado:</strong><br>
    13x/9<br><br>

    <strong>Idea clave:</strong><br>
    Solo pueden sumarse términos semejantes dentro del numerador.
  `
},

"3.5.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Resolviste correctamente la resta de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 9x − 2x = 7x<br>
    • Denominador: permanece igual (4)<br><br>

    <strong>Resultado:</strong><br>
    7x/4<br><br>

    <strong>Idea clave:</strong><br>
    Cuando los denominadores son iguales, únicamente se restan los numeradores.
  `
},

"3.5.1.5": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la operación algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 12x − 3x = 9x<br>
    • Denominador: permanece igual (8)<br><br>

    <strong>Resultado:</strong><br>
    9x/8<br><br>

    <strong>Idea clave:</strong><br>
    El denominador actúa como una base común para toda la operación.
  `
},

"3.5.1.6": {
  titulo: "¡Excelente!",
  mensaje: "Resolvista correctamente la resta de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 20x − 6x = 14x<br>
    • Denominador: permanece igual (11)<br><br>

    <strong>Resultado:</strong><br>
    14x/11<br><br>

    <strong>Idea clave:</strong><br>
    En fracciones algebraicas con el mismo denominador, el denominador nunca cambia.
  `
},
"3.5.2.1": {
  titulo: "¡Excelente!",
  mensaje: "Multiplicaste correctamente las fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 2x · 3 = 6x<br>
    • Denominadores: 5 · 4 = 20<br><br>

    <strong>Resultado:</strong><br>
    6x/20<br><br>

    <strong>Si simplificamos:</strong><br>
    6 y 20 tienen como factor común el 2.<br>
    • 6 ÷ 2 = 3<br>
    • 20 ÷ 2 = 10<br><br>

    <strong>Resultado simplificado:</strong><br>
    3x/10
  `
},
"3.5.2.2": {
  titulo: "¡Muy bien!",
  mensaje: "Resolviste correctamente la multiplicación algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 3x · 5 = 15x<br>
    • Denominadores: 2 · 6 = 12<br><br>

    <strong>Resultado:</strong><br>
    15x/12<br><br>

    <strong>Si simplificamos:</strong><br>
    15 y 12 tienen como factor común el 3.<br>
    • 15 ÷ 3 = 5<br>
    • 12 ÷ 3 = 4<br><br>

    <strong>Resultado simplificado:</strong><br>
    5x/4
  `
},
"3.5.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Aplicaste correctamente la multiplicación de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 4x · 2 = 8x<br>
    • Denominadores: 3 · 5 = 15<br><br>

    <strong>Resultado:</strong><br>
    8x/15<br><br>

    <strong>Observación:</strong><br>
    La fracción ya está simplificada porque 8 y 15 no tienen factores comunes distintos de 1.
  `
},
"3.5.2.4": {
  titulo: "¡Excelente!",
  mensaje: "Simplificaste correctamente la fracción algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Factor común entre 6 y 20: 2<br>
    • 6 ÷ 2 = 3<br>
    • 20 ÷ 2 = 10<br><br>

    <strong>Resultado simplificado:</strong><br>
    3x/10<br><br>

    <strong>Idea clave:</strong><br>
    Simplificar una fracción significa dividir numerador y denominador entre el mismo número.
  `
},
"3.5.2.5": {
  titulo: "¡Muy bien!",
  mensaje: "Multiplicaste correctamente las fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Numeradores: 2x · 6 = 12x<br>
    • Denominadores: 4 · 3 = 12<br><br>

    <strong>Resultado:</strong><br>
    12x/12<br><br>

    <strong>Si simplificamos:</strong><br>
    12 ÷ 12 = 1<br><br>

    <strong>Resultado simplificado:</strong><br>
    x<br><br>

    <strong>Idea clave:</strong><br>
    Cuando numerador y denominador son iguales, la fracción vale 1.
  `
},

"3.5.3.1": {
  titulo: "¡Excelente!",
  mensaje: "Resolviste correctamente la división de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • En una división de fracciones, la segunda fracción se invierte.<br>
    • (2x/5) ÷ (3/4) se transforma en:<br>
    • (2x/5) · (4/3)<br><br>

    <strong>Ahora multiplicamos:</strong><br>
    • Numeradores: 2x · 4 = 8x<br>
    • Denominadores: 5 · 3 = 15<br><br>

    <strong>Resultado:</strong><br>
    8x/15<br><br>

    <strong>Observación:</strong><br>
    La fracción ya está simplificada porque 8 y 15 no tienen factores comunes.
  `
},

"3.5.3.2": {
  titulo: "¡Muy bien!",
  mensaje: "Aplicaste correctamente la división de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Primero invertimos la segunda fracción:<br>
    • (5x/4) · (3/2x)<br><br>

    <strong>Multiplicamos:</strong><br>
    • Numeradores: 5x · 3 = 15x<br>
    • Denominadores: 4 · 2x = 8x<br><br>

    <strong>Resultado:</strong><br>
    15x/8x<br><br>

    <strong>Si simplificamos:</strong><br>
    La variable x aparece arriba y abajo, por lo que se cancela.<br><br>

    <strong>Resultado simplificado:</strong><br>
    15/8
  `
},


"3.5.3.3": {
  titulo: "¡Correcto!",
  mensaje: "Resolviste correctamente la operación algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Invertimos la segunda fracción:<br>
    • (3x/7) · (5/2)<br><br>

    <strong>Multiplicamos:</strong><br>
    • Numeradores: 3x · 5 = 15x<br>
    • Denominadores: 7 · 2 = 14<br><br>

    <strong>Resultado:</strong><br>
    15x/14<br><br>

    <strong>Observación:</strong><br>
    La fracción ya está simplificada.
  `
},

"3.5.3.4": {
  titulo: "¡Excelente!",
  mensaje: "Aplicaste correctamente la división de fracciones algebraicas.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Invertimos la segunda fracción:<br>
    • (6x/5) · (2/3)<br><br>

    <strong>Multiplicamos:</strong><br>
    • Numeradores: 6x · 2 = 12x<br>
    • Denominadores: 5 · 3 = 15<br><br>

    <strong>Resultado:</strong><br>
    12x/15<br><br>

    <strong>Si simplificamos:</strong><br>
    12 y 15 tienen factor común 3.<br>
    • 12 ÷ 3 = 4<br>
    • 15 ÷ 3 = 5<br><br>

    <strong>Resultado simplificado:</strong><br>
    4x/5
  `
},

"3.5.3.5": {
  titulo: "¡Muy bien!",
  mensaje: "Resolviste correctamente la división y simplificación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Invertimos la segunda fracción:<br>
    • (4x/3) · (5/2x)<br><br>

    <strong>Multiplicamos:</strong><br>
    • Numeradores: 4x · 5 = 20x<br>
    • Denominadores: 3 · 2x = 6x<br><br>

    <strong>Resultado:</strong><br>
    20x/6x<br><br>

    <strong>Si simplificamos:</strong><br>
    • La variable x se cancela.<br>
    • 20 y 6 tienen factor común 2.<br>
    • 20 ÷ 2 = 10<br>
    • 6 ÷ 2 = 3<br><br>

    <strong>Resultado simplificado:</strong><br>
    10/3
  `
},

"3.6.1.1": {
  titulo: "¡Excelente trabajo!",
  mensaje: "Resolviste correctamente la suma de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Sumamos los términos semejantes:<br>
    • 3x + 5x = 8x<br><br>

    <strong>Después:</strong><br>
    • Sumamos los términos independientes:<br>
    • 2 + 1 = 3<br><br>

    <strong>Resultado final:</strong><br>
    8x + 3<br><br>

    <strong>Recuerda:</strong><br>
    Solo los términos semejantes pueden sumarse entre sí.
  `
},

"3.6.1.2": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la expresión algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Sumamos los términos semejantes:<br>
    • 4x + 2x = 6x<br><br>

    <strong>Después:</strong><br>
    • Sumamos las constantes:<br>
    • 6 + 5 = 11<br><br>

    <strong>Resultado final:</strong><br>
    6x + 11<br><br>

    <strong>Importante:</strong><br>
    La variable x permanece porque ambos términos son semejantes.
  `
},

"3.6.1.3": {
  titulo: "¡Correcto!",
  mensaje: "Combinaste correctamente los términos del binomio.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Sumamos los términos algebraicos:<br>
    • 7x + 2x = 9x<br><br>

    <strong>Después:</strong><br>
    • Sumamos las constantes:<br>
    • 3 + 4 = 7<br><br>

    <strong>Resultado final:</strong><br>
    9x + 7<br><br>

    <strong>Recuerda:</strong><br>
    Los términos con la misma variable y exponente se pueden combinar.
  `
},

"3.6.1.4": {
  titulo: "¡Excelente!",
  mensaje: "Resolvista correctamente la suma de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Sumamos términos semejantes:<br>
    • 5x + 6x = 11x<br><br>

    <strong>Después:</strong><br>
    • Sumamos las constantes:<br>
    • 8 + 2 = 10<br><br>

    <strong>Resultado final:</strong><br>
    11x + 10<br><br>

    <strong>Importante:</strong><br>
    Primero se agrupan los términos semejantes y después las constantes.
  `
},

"3.6.1.5": {
  titulo: "¡Fantástico!",
  mensaje: "Has resuelto correctamente la operación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Sumamos los términos semejantes:<br>
    • 8x + 4x = 12x<br><br>

    <strong>Después:</strong><br>
    • Sumamos las constantes:<br>
    • 1 + 9 = 10<br><br>

    <strong>Resultado final:</strong><br>
    12x + 10<br><br>

    <strong>Recuerda:</strong><br>
    Las expresiones algebraicas se simplifican agrupando términos semejantes.
  `
},


"3.6.2.1": {
  titulo: "¡Muy bien!",
  mensaje: "Resolviste correctamente la resta de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Restamos los términos semejantes:<br>
    • 4x − 2x = 2x<br><br>

    <strong>Después:</strong><br>
    • Restamos las constantes:<br>
    • −3 − 1 = −4<br><br>

    <strong>Resultado final:</strong><br>
    2x − 4<br><br>

    <strong>Recuerda:</strong><br>
    Al restar binomios también cambian los signos del segundo paréntesis.
  `
},

"3.6.2.2": {
  titulo: "¡Excelente!",
  mensaje: "Simplificaste correctamente la expresión algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Restamos términos semejantes:<br>
    • 7x − 3x = 4x<br><br>

    <strong>Después:</strong><br>
    • Restamos las constantes:<br>
    • −5 − 2 = −7<br><br>

    <strong>Resultado final:</strong><br>
    4x − 7<br><br>

    <strong>Importante:</strong><br>
    Las constantes negativas conservan su signo al operar.
  `
},

"3.6.2.3": {
  titulo: "¡Correcto!",
  mensaje: "Has resuelto correctamente la operación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Restamos los términos semejantes:<br>
    • 9x − 5x = 4x<br><br>

    <strong>Después:</strong><br>
    • Restamos las constantes:<br>
    • −4 − 3 = −7<br><br>

    <strong>Resultado final:</strong><br>
    4x − 7<br><br>

    <strong>Recuerda:</strong><br>
    Solo los términos semejantes pueden combinarse entre sí.
  `
},

"3.6.2.4": {
  titulo: "¡Fantástico!",
  mensaje: "Resolvista correctamente la resta de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Restamos los términos semejantes:<br>
    • 8x − 2x = 6x<br><br>

    <strong>Después:</strong><br>
    • Restamos las constantes:<br>
    • −6 − 5 = −11<br><br>

    <strong>Resultado final:</strong><br>
    6x − 11<br><br>

    <strong>Importante:</strong><br>
    Los signos negativos afectan el resultado de las constantes.
  `
},

"3.6.2.5": {
  titulo: "¡Excelente trabajo!",
  mensaje: "Completaste correctamente la simplificación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Restamos los términos semejantes:<br>
    • 10x − 4x = 6x<br><br>

    <strong>Después:</strong><br>
    • Restamos las constantes:<br>
    • −8 − 1 = −9<br><br>

    <strong>Resultado final:</strong><br>
    6x − 9<br><br>

    <strong>Recuerda:</strong><br>
    Al eliminar paréntesis en una resta, los signos deben cuidarse correctamente.
  `
},

"3.6.3.1": {
  titulo: "¡Excelente trabajo!",
  mensaje: "Resolviste correctamente la multiplicación de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Aplicamos la propiedad distributiva:<br><br>

    • 2x · x = 2x²<br>
    • 2x · 1 = 2x<br>
    • 3 · x = 3x<br>
    • 3 · 1 = 3<br><br>

    <strong>Después:</strong><br>
    • Sumamos términos semejantes:<br>
    • 2x + 3x = 5x<br><br>

    <strong>Resultado final:</strong><br>
    2x² + 5x + 3
  `
},

"3.6.3.2": {
  titulo: "¡Muy bien!",
  mensaje: "Simplificaste correctamente la multiplicación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Multiplicamos cada término:<br><br>

    • x · x = x²<br>
    • x · 3 = 3x<br>
    • 2 · x = 2x<br>
    • 2 · 3 = 6<br><br>

    <strong>Después:</strong><br>
    • Sumamos términos semejantes:<br>
    • 3x + 2x = 5x<br><br>

    <strong>Resultado final:</strong><br>
    x² + 5x + 6
  `
},

"3.6.3.3": {
  titulo: "¡Correcto!",
  mensaje: "Has resuelto correctamente la operación.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Aplicamos la multiplicación distributiva:<br><br>

    • 3x · x = 3x²<br>
    • 3x · 2 = 6x<br>
    • 1 · x = x<br>
    • 1 · 2 = 2<br><br>

    <strong>Después:</strong><br>
    • Sumamos términos semejantes:<br>
    • 6x + x = 7x<br><br>

    <strong>Resultado final:</strong><br>
    3x² + 7x + 2
  `
},

"3.6.3.4": {
  titulo: "¡Fantástico!",
  mensaje: "Resolvista correctamente la multiplicación de binomios.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Multiplicamos término por término:<br><br>

    • 2x · x = 2x²<br>
    • 2x · 2 = 4x<br>
    • 4 · x = 4x<br>
    • 4 · 2 = 8<br><br>

    <strong>Después:</strong><br>
    • Sumamos términos semejantes:<br>
    • 4x + 4x = 8x<br><br>

    <strong>Resultado final:</strong><br>
    2x² + 8x + 8
  `
},

"3.6.3.5": {
  titulo: "¡Excelente!",
  mensaje: "Completaste correctamente la multiplicación algebraica.",
  extra: `
    <strong>Pasos clave:</strong><br>
    • Aplicamos la propiedad distributiva:<br><br>

    • 4x · x = 4x²<br>
    • 4x · 3 = 12x<br>
    • 1 · x = x<br>
    • 1 · 3 = 3<br><br>

    <strong>Después:</strong><br>
    • Sumamos términos semejantes:<br>
    • 12x + x = 13x<br><br>

    <strong>Resultado final:</strong><br>
    4x² + 13x + 3
  `
},












};