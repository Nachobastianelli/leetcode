function maxArea(height: number[]): number {
  //la solucion se obtiene usando dos punteros, uno a la izq del arreglo y el otro a la derecha
  //y se va comparando cual es el mas bajo de los dos con math min, se saca el ancho que es la resta de la columna indice derecha con la de la izq
  //y despues el area que es el mas chico de los dos (math min) multiplicado con el ancho y despues se le asigna a max cual es el maximo entre el max anterior y el nuevo
  //area y lo guarda, despues si la izq fue menor a la derecha la izq aumenta y sino la derecha retrocede hasta llegar al medio del arreglo

  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const alto = Math.min(height[left], height[right]);
    const ancho = right - left;
    const area = alto * ancho;
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Resultado esperado: 49
