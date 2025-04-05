function esVocal(letra) {
    // Verificar que el argumento sea un string y tenga longitud 1
    if (typeof letra !== 'string' || letra.length !== 1) {
      console.error('El argumento debe ser una única letra');
      return false;
    }
    
    // Array de vocales (sin acentos)
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    // Convertir la letra a minúscula para comparar independientemente de mayúsculas/minúsculas
    const letraMinuscula = letra.toLowerCase();
    
    // Comprobar si la letra está en el array de vocales
    return vocales.includes(letraMinuscula);
  }

  // Ejemplos de uso mostrados en la consola
console.log('--- Comprobación de vocales ---');
console.log('esVocal("A"):', esVocal('A'));  // true
console.log('esVocal("e"):', esVocal('e'));  // true
console.log('esVocal("z"):', esVocal('z'));  // false
console.log('esVocal("I"):', esVocal('I'));  // true
console.log('esVocal("b"):', esVocal('b'));  // false
console.log('esVocal("O"):', esVocal('O'));  // true
console.log('esVocal("u"):', esVocal('u'));  // true

// Prueba con caracteres que no son letras individuales
console.log('\n--- Casos especiales ---');
console.log('esVocal("ae"):', esVocal('ae')); // false (más de una letra)
console.log('esVocal(""):', esVocal('')); // false (string vacío)
console.log('esVocal(5):', esVocal(5)); // false (no es un string)