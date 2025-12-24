const sistema = 'CommonJS'

function cjsMessage() {
  console.log('Mensaje desde un modulo CommonJS.')
}

// Se usa module.exports para exponer el modulo y se exporta como 'default',
// lo que hace que debas hacer una importación nombrada.
// import nombreModulo from "../ruta/archivo.cjs"

module.exports = {
  sistema,
  cjsMessage
}
