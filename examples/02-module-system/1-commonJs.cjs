const sistema = 'CommonJS'

function cjsMessage() {
  console.log('Mensaje desde un módulo CommonJS.')
}

// En CommonJS se usa `module.exports` para exponer el módulo.
//
// Cuando un módulo CommonJS se importa desde ESM usando `import`,
// Node.js lo envuelve como una exportación *default*.
//
// Por eso se puede importar así:
// import cjsModule from './archivo.cjs';
//
// Y acceder a sus propiedades:
// cjsModule.sistema
// cjsModule.cjsMessage()

module.exports = {
  sistema,
  cjsMessage
}
