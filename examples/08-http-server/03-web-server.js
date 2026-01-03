import http from 'node:http'
import fs from 'node:fs/promises'
import { findFreePort } from '../../lib/find-free-port.js'
import { getTime } from '../../lib/utils.js'
import path from 'node:path'

const publicPath = path.join(import.meta.dirname, 'public')

async function readFile(path, encoding = true) {
  try {
    if (encoding) {
      return await fs.readFile(path, 'utf-8')
    } else {
      return await fs.readFile(path)
    }
  } catch (err) {
    console.log(err)
    return null
  }
}

async function GETMethod(req, res) {
  const { method, url } = req

  console.log(`[${getTime()}] ${method} ${url}`)

  // ----------------------------------------
  // La ruta / carga el archivo index.html
  // ----------------------------------------
  if (req.url === '/') {
    const index = await readFile(path.join(publicPath, 'index.html'))

    if (index === null) {
      console.log('index.html no existe')
      res.end('404 Not Found')
      return
    }

    res.setHeader('Content-Type', 'text/html')
    res.end(index)
    return
  }

  // ----------------------------------------
  // Carga de archivos estáticos
  // ----------------------------------------
  if (url.endsWith('.css') || url.endsWith('.js')) {
    const file = await readFile(path.join(publicPath, url))

    if (file === null) {
      console.log(`${url} no existe`)
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 404
      res.end('404 Not Found')
      return
    }

    res.setHeader('Content-Type', 'text/css')
    res.end(file)
    return
  }

  // ----------------------------------------
  // Carga de archivos de medios (imágenes, videos, etc.)
  // ----------------------------------------
  if (url.endsWith('.png')) {
    const file = await readFile(path.join(publicPath, url), false)
    if (file === null) {
      console.log(`${url} no existe`)
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 404
      res.end('404 Not Found')
      return
    }

    res.setHeader('Content-Type', 'image/png')
    res.end(file)
    return
  }

  // ----------------------------------------
  // Carga de archivos de datos
  // ----------------------------------------
  if (url === '/users') {
    const file = await readFile(path.join(publicPath, 'data.json'))
    if (file === null) {
      console.log('data.json no existe')
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 404
      res.end('404 Not Found')
      return
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(file)
    return
  }

  // ----------------------------------------
  // Error 404 si no existe un endpoint
  // ----------------------------------------
  const page404 = await readFile(path.join(publicPath, '404.html'))
  if (!page404) {
    console.log('404.html no existe')
    res.end('404 Not Found')
    return
  }

  res.setHeader('Content-Type', 'text/html')
  res.end(page404)
}

export async function webServer() {
  const port = await findFreePort(3000)

  const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
      GETMethod(req, res)
    }
  })

  server.listen(port, () => {
    console.log(`Servidor escuchando en: http://localhost:${port}\n`)
  })
}
