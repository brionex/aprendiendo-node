import http from 'node:http'
import fs from 'node:fs/promises'
import { findFreePort } from './find-free-port.js'

const port = await findFreePort(3000)

const jsonPath = 'examples/8.HTTP-server/static/data.json'

// Función para leer el archivo JSON
const readJSON = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    throw new Error('Error al leer el archivo JSON')
  }
}

// Función para escribir en el archivo JSON
const writeJSON = async (path, data) => {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2))
  } catch (err) {
    throw new Error('Error al escribir el archivo JSON')
  }
}

// Manejador principal de la API
const api = async (req, res) => {
  const { method, url } = req

  console.log(method, url)

  try {
    if (method === 'GET') {
      switch (url) {
        case '/': {
          res.setHeader('Content-Type', 'text/html')
          res.end('<h1>Hello World, from Node.js</h1>')
          return
        }

        case '/users': {
          const users = await readJSON(jsonPath)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(users))
          return
        }

        default: {
          res.statusCode = 404
          res.end('404 Not Found - GET')
          return
        }
      }
    }

    if (method === 'POST') {
      if (url === '/new-user') {
        let body = ''

        req.on('data', (chunk) => {
          body += chunk.toString()
        })

        req.on('end', async () => {
          try {
            const users = await readJSON(jsonPath)
            const newUser = JSON.parse(body)
            newUser.id = users.length + 1
            users.push(newUser)

            await writeJSON(jsonPath, users)

            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 201
            res.end('Usuario creado')
          } catch (err) {
            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 500
            res.end('<h1>Error al procesar la solicitud</h1>')
          }
        })
        return
      }
    }

    res.statusCode = 404
    res.end('404 Not Found')
  } catch (err) {
    console.error(err.message)
    res.statusCode = 500
    res.end('<h1>Error interno del servidor</h1>')
  }
}

// Crear el servidor HTTP
const server = http.createServer(api)

server.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})
