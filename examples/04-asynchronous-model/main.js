/*
  Cuando se trabaja con código asíncrono en JavaScript se manejan
  los siguientes conceptos:

  - Callback:
    Función que se pasa como argumento y se ejecuta
    cuando una operación asíncrona termina.

  - Promesa:
    Objeto que representa el resultado futuro de una
    operación asíncrona (resuelta o rechazada).

  - then / catch:
    Métodos para manejar el resultado o error de una promesa.

  - async / await:
    Sintaxis que permite escribir código asíncrono
    con apariencia secuencial usando promesas.
*/

// NOTA:
// Ejecuta una sola función a la vez para observar
// claramente el comportamiento de cada enfoque.

const arg = process.argv[2] ?? 1

const files = {
  1: './1-callbacks.js',
  2: './2-promises.js',
  3: './3-sequential.js',
  4: './4-parallel.js'
}

await import(files[arg])
