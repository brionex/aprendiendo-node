import { logger } from '../../lib/logger.js'
import { findFreePort } from '../../lib/find-free-port.js'
import { getTime } from '../../lib/utils.js'
import http from 'node:http'
const port = await findFreePort(3000)

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(`[${getTime()}] ${method} ${url}`)

  if (method === 'GET') {
    if (url === '/') {
      res.setHeader('Content-Type', 'text/plain')
      res.end('Api con Node.js')
      return
    }

    if (url === '/users') {
      res.setHeader('Content-Type', 'application/json')
      res.end(
        JSON.stringify({
          users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'Bob Smith' }
          ]
        })
      )
      return
    }

    if (url === '/users/1') {
      res.setHeader('Content-Type', 'application/json')
      res.end(
        JSON.stringify({
          user: { id: 1, name: 'John Doe' }
        })
      )
      return
    }

    // El servidor responde con un 404 Not Found para cualquier URL que no se encuentre
    // Si no respondes, el cliente queda colgado
    res.statusCode = 404
    res.end('404 Not Found')
  }
})

server.listen(port, () => {
  logger.log(`Servidor escuchando en: http://localhost:${port}\n`)
})
