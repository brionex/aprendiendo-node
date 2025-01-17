// Función que simula una petición a un servidor.
// Ejecuta la función server() pasando un callback (err, res) => {}
// Si no se pasa callback, devuelve una promesa por defecto.
// Se puede cambiar la probabilidad de éxito de la petición.

export default function server(fn, probability = 0.5) {
  const responseTime = Math.floor(Math.random() * 2000) + 1000
  const success = Math.random() > probability

  const messageSuccess = '-> Respuesta exitosa del servidor'
  const messageError = '-> Error del servidor'

  if (typeof fn === 'function') {
    setTimeout(() => {
      success ? fn(messageSuccess, null) : fn(null, messageError)
    }, responseTime)
    return
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve(messageSuccess) : reject(messageError)
    }, responseTime)
  })
}
