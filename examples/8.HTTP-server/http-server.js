import http from 'node:http'
import { findFreePort } from './find-free-port.js'

const port = await findFreePort(3000)

const server = http.createServer((req, res) => {
  console.log('request received')

  res.end('Hello World')
})

server.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})
