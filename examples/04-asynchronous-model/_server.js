/*
  Esta función simula una petición a un servidor.

  Puede usarse de dos formas:

  1) Con callback (estilo clásico):
     server(id, (err, res) => { ... })

  2) Como promesa / async-await:
     server(id)
       .then(res => { ... })
       .catch(err => { ... })

     const res = await server(id)
*/

export function server(id, callback) {
  const responseTime = Math.floor(Math.random() * 2000) + 1000
  const isSuccess = Math.random() > 0.5

  const messageSuccess = `- Recibido ${id}: Success`
  const messageError = `- Recibido ${id}: Error`

  console.log(`- Enviado: ${id}`)

  // Uso con callback
  if (typeof callback === 'function') {
    setTimeout(() => {
      isSuccess ? callback(null, messageSuccess) : callback(messageError, null)
    }, responseTime)
    return
  }

  // Uso con promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isSuccess ? resolve(messageSuccess) : reject(messageError)
    }, responseTime)
  })
}
