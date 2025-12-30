import { callbacks } from './1-callbacks.js'
import { promises } from './2-promises.js'
import { sequential } from './3-sequential.js'
import { parallel } from './4-parallel.js'

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

const arg = process.argv[2]

if (arg === '1') callbacks()
else if (arg === '2') promises()
else if (arg === '3') sequential()
else if (arg === '4') parallel()
else callbacks()
