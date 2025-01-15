/*
  ESM: El sistema de módulos de Node.js que utiliza ES6 (ECMAScript 2015) para definir y exportar módulos.
  Utiliza `import` y `export` para importar y exportar funciones y variables.
*/

import esModulesDefault from './esModules.js'
import * as esModules from './esModules.js'
import { message, message2 } from './esModules.js'

// Método de importación por defecto
esModulesDefault.message()
esModulesDefault.message2()

// Método de importación por nombre
esModules.message()
esModules.message2()

// Método de importación por destructuring
message()
message2()
