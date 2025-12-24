import { callbacks } from './1-callbacks.js'
import { promises } from './2-promises.js'
import { sequential } from './3-sequential.js'
import { parallel } from './4-parallel.js'

/*
  Cuando se trabaja con código asíncrono se manejan los siguientes conceptos:

  - callbacks: Función que se llama dentro de otra función.
  - async/await: Concierten el ámbito de una funciona en  asíncrono.
  - Promesa: Objeto que representa la realización de una operación asíncrona.
  - then/catch: Métodos para resolver una promesa.

  NOTA: Solo ejecuta una función a la vez, para ver cada proceso de forma correcta.
*/

callbacks()
// promises()
// sequential()
// parallel()
