/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isBalanced(str){
   let stack = [];
   for(let i = 0; i < str.length; i++){
      if(str[i] === '(' || str[i] === '{' || str[i] === '['){
         stack.push(str[i]);
      }  
      else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
         if(stack.length === 0){
            return 'Expresión no balanceada';
         }
         if(str[i] === ')' && stack[stack.length - 1]!== '('){
            return 'Expresión no balanceada';
         }
         if(str[i] === '}' && stack[stack.length - 1]!== '{'){
            return 'Expresión no balanceada';
         }
         if(str[i] === ']' && stack[stack.length - 1]!== '['){
            return 'Expresión no balanceada';
         }
         stack.pop();
      }
   }
   return stack.length === 0  && 'Expresión balanceada';
}

console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"));
console.log(isBalanced("{a^4 + (((ax4)}"));
console.log(isBalanced("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"));
console.log(isBalanced("{{{{{{(}}}}}}"));
console.log(isBalanced("(a"));
console.log(isBalanced("{a + b [c] * (2x2)}}}}"));
console.log(isBalanced("{ a * ( c + d ) ] - 5 }"));