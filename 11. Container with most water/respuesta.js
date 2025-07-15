function maxArea(height) {
    var left = 0;
    var right = height.length - 1;
    var max = 0;
    while (left < right) {
        var alto = Math.min(height[left], height[right]);
        var ancho = right - left;
        var area = alto * ancho;
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return max;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Resultado esperado: 49
