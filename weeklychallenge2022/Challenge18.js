/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function analizarMatriz(matriz) {
    var x = 0;
    var o = 0;
    var vacio = 0;
  
    // Verificar filas
    for (var i = 0; i < 3; i++) {
      if (matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]) {
        if (matriz[i][0] === "X") {
          x++;
        } else if (matriz[i][0] === "O") {
          o++;
        }
      }
    }
  
    // Verificar columnas
    for (var j = 0; j < 3; j++) {
      if (matriz[0][j] === matriz[1][j] && matriz[1][j] === matriz[2][j]) {
        if (matriz[0][j] === "X") {
          x++;
        } else if (matriz[0][j] === "O") {
          o++;
        }
      }
    }
  
    // Verificar diagonales
    if (
      matriz[0][0] === matriz[1][1] &&
      matriz[1][1] === matriz[2][2]
    ) {
      if (matriz[0][0] === "X") {
        x++;
      } else if (matriz[0][0] === "O") {
        o++;
      }
    }
  
    if (
      matriz[0][2] === matriz[1][1] &&
      matriz[1][1] === matriz[2][0]
    ) {
      if (matriz[0][2] === "X") {
        x++;
      } else if (matriz[0][2] === "O") {
        o++;
      }
    }
  
    // Contar espacios vacíos
    for (var k = 0; k < 3; k++) {
      for (var l = 0; l < 3; l++) {
        if (matriz[k][l] === "") {
          vacio++;
        }
      }
    }
  
    // Retornar resultado
    if (x > o) {
      return "X";
    } else if (o > x) {
      return "O";
    } else if (vacio === 0) {
      return "Empate";
    } else if (x + o + vacio !== 9) {
      return "Nulo";
    } else {
      return null;
    }
}

console.log(analizarMatriz([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'O', 'X']]));
console.log(analizarMatriz([['O', 'O', 'O'], ['O', 'X', 'X'], ['O', 'X', 'X']]));
console.log(analizarMatriz([['X', 'O', 'X'], ['X', 'X', 'O'], ['X', 'X', 'X']]));