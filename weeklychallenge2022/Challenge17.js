/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function evaluarCarrera(atleta, pista) {
    let estadoCarrera = true;

    for (let i = 0; i < atleta.length; i++) {
      if (atleta[i] === "run" && pista[i] === "_") {
        // El atleta corre en el suelo
        continue;
      } else if (atleta[i] === "jump" && pista[i] === "|") {
        // El atleta salta la valla
        continue;
      } else if (atleta[i] === "jump" && pista[i] === "_") {
        // El atleta salta en el suelo X
        pista = pista.substring(0, i) + "x" + pista.substring(i + 1);
        estadoCarrera = false;
      } else if (atleta[i] === "run" && pista[i] === "|") {
        // El atleta choca con la valla
        pista = pista.substring(0, i) + "/" + pista.substring(i + 1);
        estadoCarrera = false;
      }
    }
    console.log(pista);
    return estadoCarrera;
  }
  

console.log(evaluarCarrera(['run', 'jump', 'run', 'jump', 'run'], "_|_|_"));
console.log(evaluarCarrera(['run', 'run', 'run', 'jump', 'run'], "_|_|_"));
//console.log(evaluarCarrera(['run', 'run', 'jump', 'jump', 'run'], "_|_|_"));
//console.log(evaluarCarrera(['run', 'run', 'jump', 'jump', 'run'], "_|_|_|_"));
//console.log(evaluarCarrera(['rum', 'jump', 'run', 'jump'], "_|_|_"));
//console.log(evaluarCarrera(['run', 'jump', 'run', 'jump', 'run', 'jump', 'run'], "_|_|_"));
//console.log(evaluarCarrera(['jump', 'jump', 'jump', 'jump', 'jump'], "|||||"));
//console.log(evaluarCarrera(['jump', 'jump', 'jump', 'jump', 'jump'], "||?||"));
