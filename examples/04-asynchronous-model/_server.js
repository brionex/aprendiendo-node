/*
  Esta función simula una petición a un servidor

  Con callback:
    - server(id, (err, res) => {})

  Como promesa:
    - server(id).then((res) => {}).catch((err) => {})
    - const res = await server().catch((err) => {})

*/

export function server(id, fn) {
  const responseTime = Math.floor(Math.random() * 2000) + 1000
  const successProbability = Math.random() > 0.5

  const messageSuccess = `- Recibido ${id}: Success`
  const messageError = `- Recibido ${id}: Error`

  console.log(`- Enviado: ${id}`)

  if (typeof fn === 'function') {
    setTimeout(() => {
      successProbability ? fn(null, messageSuccess) : fn(messageError, null)
    }, responseTime)
    return
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      successProbability ? resolve(messageSuccess) : reject(messageError)
    }, responseTime)
  })
}
