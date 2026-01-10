import express from 'express'
import { getTime } from './../../lib/utils.js'

const app = express()
const PORT = process.env.PORT ?? 1234

// Desactiva el header `X-Powered-By` para no exponer que se usa Express
app.disable('x-powered-by')

// Middleware para procesar cuerpos de solicitudes en formato JSON
app.use(express.json())

// Middleware personalizado para loguear cada petición
app.use((req, res, next) => {
  console.log(`${getTime()} ${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('Api usando Express')
})

app.get('/data', (req, res) => {
  res.json({
    data: {
      title: 'Api usando Express',
      description: 'Esta es un json de ejemplo'
    }
  })
})

app.post('/data', (req, res) => {
  const data = req.body
  data.id = crypto.randomUUID()
  res.json(data)
})

// Middleware para manejar errores 404
app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}\n`)
})
