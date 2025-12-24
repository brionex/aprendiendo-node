// ESM: ES Modules es el sistema estándar para importar modules usando import/export
// CommonJS: Es el sistema original/antiguo de node para trabajar con módulos usando required.

// NOTA: Actualmente no se usa CommonJS, su uso se da solo en proyectos antiguos.

import { mjsMessage } from './esModules.mjs' // Importación con ESM
import cjsModule from './commonJs.cjs' // Importación de modulo CommonJS con ESM

mjsMessage()
cjsModule.cjsMessage()

// No se puede usar required cuando se usa el type="module"
// Tira un error al intentar importar

// const cjsModule = require('./commonJs.cjs')

// Si requieres usar un required puedes crear uno:

// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const cjsModule2 = require('./commonJs.cjs')
// cjsModule2.cjsMessage()
