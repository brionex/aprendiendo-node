import http from 'node:http'
import { getTime } from '../../lib/utils.js'

// Crea un servidor HTTP nativo
const server = http.createServer((req, res) => {
  // Log de cada petición con hora, método y URL
  console.log(`${getTime()} ${req.method} ${req.url}`)

  // Envía la respuesta al cliente y cierra la conexión
  res.end('Hello World')
})

// El servidor comienza a escuchar en el puerto dado (usualmente el 3000)
// Si no se sabe si el puerto está libre puedes usar el puerto 0
// El puerto 0 indica que el servidor escoja un puerto libre
// Solo usar el puerto 0 en modo de desarrollo.
server.listen(0, () => {
  console.log(
    `Servidor escuchando en: http://localhost:${server.address().port}\n`
  )
})
