/*
  REST API con Node.js y Express

  Endpoints disponibles:
    - GET    /movies           → Lista todas las películas
    - GET    /movies/:id       → Obtiene una película por ID
    - GET    /movies?genre=drama → Filtra películas por género
    - POST   /movies           → Crea una nueva película
    - PATCH  /movies/:id       → Actualiza parcialmente una película

  Qué aprenderás:
    - Arquitectura básica de una API REST
    - Uso correcto de los métodos HTTP
    - Validación de datos con Zod
    - Manejo y configuración de CORS

  Nota:
    Para comprobar que CORS funciona correctamente, ejecuta:
    npx servor ./examples/09-express-framework/public/web
    (debes estar en la ruta del proyecto) y abre la página
    en el navegador.
*/

import express from 'express'
import path from 'node:path'
import { getTime, readJSON } from '../../lib/utils.js'
import { validateMovie, validatePartialMovie } from './_schemas.js'

const __dirname = import.meta.dirname
const allowedOrigins = ['http://localhost:8080']
const jsonPath = path.join(__dirname, 'public', 'movies.json')

// Carga el archivo json de las películas.
const movies = readJSON(jsonPath)

const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')
app.use(express.json())
app.use(
  '/static',
  express.static(path.join(import.meta.dirname, 'public', 'web', 'static'))
)

// Traza todas las peticiones
app.use((req, res, next) => {
  console.log(`${getTime()} ${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', 'web', 'index.html'))
})

// ----------------------------------------
// Recurso de películas
// ----------------------------------------

// Devuelve todos las películas
app.get('/movies', (req, res) => {
  const origin = req.header('origin')

  if (origin && allowedOrigins.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin)
  }

  const { genre } = req.query

  // Filtrar las películas por genero.
  if (genre) {
    const moviesFiltered = movies.filter((movie) => {
      return movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    })

    res.json({
      genre,
      count: moviesFiltered.length,
      movies: moviesFiltered
    })
    return
  }

  // Devuelve todos las películas.
  res.json(movies)
})

// Devuelve una película por id
app.get('/movies/:id', (req, res, next) => {
  const id = req.params.id
  const movie = movies.find((movie) => movie.id === id)

  if (movie) return res.json(movie)

  res.status(404).json({ error: 'Movie not found' })
})

// Crear una nueva película
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

// Actualizar una película
app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ error: 'Movie not found' })
  }

  const movieUpdated = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = movieUpdated

  res.json(movieUpdated)
})

// ----------------------------------------
// Configuración de CORS pre-flight
// ----------------------------------------
app.options('/movies', (req, res) => {
  res.set('Access-Control-Allow-Origin', req.header('origin'))
  res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.status(200).end()
})

// Middleware para manejar errores 404
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' })
})

// Middleware para manejar errores 500
// Evita enviar información sensible a los clientes.
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}\n`)
})
