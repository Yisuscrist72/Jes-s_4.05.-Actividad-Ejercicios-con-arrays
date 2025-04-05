function procesarArray(numeros) {
    // Verificar que el argumento sea un array
    if (!Array.isArray(numeros)) {
      console.error('El argumento debe ser un array');
      return [];
    }
    
    // Crear un Set para eliminar duplicados
    const numerosUnicos = new Set(numeros);
    
    // Convertir el Set de nuevo a array y ordenar de menor a mayor
    const resultado = Array.from(numerosUnicos).sort((a, b) => a - b);
    
    return resultado;
  }
  
  // Ejemplo de uso
  const arrayOriginal = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];
  console.log('Array original:', arrayOriginal);
  console.log('Resultado procesado:', procesarArray(arrayOriginal));
  
  // Ejemplos adicionales
  console.log('\n--- Más ejemplos ---');
  console.log(procesarArray([5, 5, 5, 5, 5])); // [5]
  console.log(procesarArray([10, 9, 8, 7, 6])); // [6, 7, 8, 9, 10]
  console.log(procesarArray([0, -0, 0, 0])); // [0]
  console.log(procesarArray([])); // []
  
  // Casos especiales
  console.log('\n--- Casos especiales ---');
  console.log(procesarArray("no soy un array")); // [] (y muestra error en consola)