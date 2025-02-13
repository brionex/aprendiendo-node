import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

// config
app.disable('x-powered-by')

// middleware
app.use((req, res, next) => {
  console.log('request received')
  next()
})

// routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

// start server
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
