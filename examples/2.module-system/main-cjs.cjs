/*
CommonJS: El sistema de módulos original de Node.js.
Utiliza `require` para importar módulos y `module.exports` o `exports` para exportar funciones.

Notas:
 - Por defecto, Node.js usa CommonJS con archivos que tienen la extensión `.js`. Sin embargo, puedes forzar el uso de CommonJS utilizando la extensión `.cjs`.
 - En este ejemplo, se está utilizando la extensión `.cjs` porque en el archivo `package.json` se ha configurado el proyecto para trabajar con módulos ECMAScript (ESM) de manera predeterminada.
*/

const commonJs = require('./commonJs.cjs')

commonJs.message()
commonJs.message2()