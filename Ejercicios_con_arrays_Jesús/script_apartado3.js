// Declara el array con las clasificaciones iniciales
let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

// Imprime la clasificación actual
console.log("Clasificación inicial:");
console.log(clasificaciones);

// El concurso continúa, y se modifican las posiciones:

// 1. Celia adelanta a Raúl
// Primero identificamos la posición de Celia y Raúl
const posicionCelia = clasificaciones.indexOf("Celia");
const posicionRaul = clasificaciones.indexOf("Raúl");

// Intercambiamos sus posiciones
if (posicionCelia > posicionRaul) {
  // Guardamos el valor de Celia
  const celia = clasificaciones[posicionCelia];
  // Eliminamos a Celia de su posición actual
  clasificaciones.splice(posicionCelia, 1);
  // Insertamos a Celia antes de Raúl
  clasificaciones.splice(posicionRaul, 0, celia);
}

console.log("\nDespués de que Celia adelanta a Raúl:");
console.log(clasificaciones);

// 2. Antonio es descalificado y se elimina del concurso
const posicionAntonio = clasificaciones.indexOf("Antonio");
if (posicionAntonio !== -1) {
  clasificaciones.splice(posicionAntonio, 1);
}

console.log("\nDespués de eliminar a Antonio:");
console.log(clasificaciones);

// 3. Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya
const posicionAna = clasificaciones.indexOf("Ana");
clasificaciones.splice(posicionAna + 1, 0, "Roberto", "Amaya");

console.log("\nDespués de añadir a Roberto y Amaya después de Ana:");
console.log(clasificaciones);

// 4. Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificaciones.unshift("Marta");

console.log("\nDespués de añadir a Marta en la primera posición:");
console.log(clasificaciones);

// Imprime la clasificación actualizada
console.log("\nClasificación final:");
console.log(clasificaciones);