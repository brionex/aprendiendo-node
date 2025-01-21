import http from 'node:http'
import fs from 'node:fs'
import { findFreePort } from './find-free-port.js'

const port = await findFreePort(3000)

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader('Content-Type', 'text/html')

  if (req.url === '/') {
    res.end('<h1>Hello World, from Node.js</h1>')
    return
  }

  if (req.url === '/about') {
    res.end('<h1>About</h1>')
    return
  }

  if (req.url === '/contact') {
    res.end('<h1>Contact</h1>')
    return
  }

  if (req.url === '/image') {
    fs.readFile('examples/8.HTTP-server/static/image.png', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 500
        res.end('<h1>Error al cargar la imagen</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      }
    })

    return
  }

  res.end('404 Not Found')
})

server.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})
