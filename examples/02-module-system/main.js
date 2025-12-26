// SISTEMAS DE MÓDULOS EN NODE.JS

// ESM (ECMAScript Modules) es el sistema estándar de JavaScript moderno
// para importar y exportar módulos usando `import` / `export`.
//
// CommonJS (CJS) es el sistema de módulos original de Node.js,
// que utiliza `require` y `module.exports`.
//
// Ambos sistemas coexisten actualmente en Node.js, pero ESM es el
// enfoque recomendado para nuevos proyectos.

import cjsModule from './1-commonJs.cjs' // Módulo CommonJS importado desde ESM
import { mjsMessage } from './2-esModules.mjs' // Módulo ESM

cjsModule.cjsMessage()
mjsMessage()

// IMPORTANTE:
//
// Cuando un proyecto usa `"type": "module"` en package.json,
// `require` no está disponible de forma directa.
// Intentar usarlo provoca un error.
//
// const cjsModule = require('./commonJs.cjs'); // Error
//
// Si necesitas usar `require` dentro de un módulo ESM,
// puedes crearlo explícitamente usando `createRequire`:

// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// const cjsModule2 = require('./commonJs.cjs');
// cjsModule2.cjsMessage();
