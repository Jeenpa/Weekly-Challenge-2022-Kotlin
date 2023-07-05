/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function printDaysBetween(str1, str2){
    const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/

    if(str1.match(DATE_REGEX)){
        let fecha1 = new Date(str1.split('/').reverse().join('/'));
        let fecha2 = new Date(str2.split('/').reverse().join('/'));
        let diferencia = fecha1.getTime() - fecha2.getTime();
        let diasDiferencia = diferencia / 86400000;
        console.log(Math.abs(diasDiferencia));
        return Math.abs(diasDiferencia);
    } else{
        return 'Esta ingresando una fecha no valida'
    }
}

console.log(printDaysBetween("18/05/2022", "29/05/2022"));
console.log(printDaysBetween("mouredev", "29/04/2022"));
console.log(printDaysBetween("18/05/2022", "29/04/2022"));