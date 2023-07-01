/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al  ejercicio el lunes siguiente al de su publicación.
 *
 */

function calcularAreaPoligono(tipoPoligono, dimensiones) {
  let area = 0;
  switch (tipoPoligono) {
    case 'triangulo':
      area = (dimensiones.base * dimensiones.altura) / 2;
      console.log(`El área del triángulo es ${area}`);
      break;
    case 'cuadrado':
      area = dimensiones.lado * dimensiones.lado;
      console.log(`El área del cuadrado es ${area}`);
      break;
    case 'rectangulo':
      area = dimensiones.base * dimensiones.altura;
      console.log(`El área del rectángulo es ${area}`);
      break;
    default:
      console.log('Tipo de polígono no soportado');
  }
  return area;
}

// Ejemplo de uso
calcularAreaPoligono('triangulo', { base: 10, altura: 5 });
calcularAreaPoligono('cuadrado', { lado: 3 });
calcularAreaPoligono('rectangulo', { base: 10, altura: 5 });
