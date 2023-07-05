/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function eliminandoCaracteres(str1, str2){
 let out1 = '';
 let out2 = '';

 for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      out1 += str1[i];
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      out2 += str2[i];
    }
  }

  console.log(out1);
  console.log(out2);

}

eliminandoCaracteres("brais","moure")
eliminandoCaracteres("Me gusta Java","Me gusta Kotlin")
eliminandoCaracteres("Usa el canal de nuestro discord (https://mouredev.com/discord) \"\uD83D\uDD01reto-semanal\" para preguntas, dudas o prestar ayuda a la comunidad",
    "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.")