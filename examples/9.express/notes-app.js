import fs from 'node:fs/promises'
import express from 'express'

const notesPath = 'examples/9.express/notes.json'
const app = express()

app.use((req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') return next()
  if (req.method === 'DELETE') return next()

  let body = ''

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    try {
      req.body = JSON.parse(body)
      next()
    } catch (err) {
      console.log('Error al leer el body en el middleware')
      next()
    }
  })
})

async function getNotes () {
  const json = await fs.readFile(notesPath, 'utf-8').catch((err) => {
    console.log(err)
    return '[]'
  })

  return JSON.parse(json)
}

async function addNote (note) {
  const json = await getNotes()
  json.push(note)
  await fs.writeFile(notesPath, JSON.stringify(json, null, 2))
}

async function deleteNote (id) {
  const json = await getNotes()
  const index = json.findIndex((note) => note.id === id)

  if (index === -1) {
    console.log('La nota no existe')
    return false
  }

  json.splice(index, 1)
  await fs.writeFile(notesPath, JSON.stringify(json, null, 2))
  return true
}

app.get('/', (req, res) => {
  getNotes().then((notes) => {
    res.send(notes)
  })
})

app.post('/add-note', (req, res) => {
  const note = req.body
  note.id = crypto.randomUUID()
  addNote(note).then(() => {
    res.send(note)
  })
})

app.delete('/delete-note/:id', (req, res) => {
  const id = req.params.id
  deleteNote(id).then((ok) => {
    if (ok) res.send('Nota eliminada')
    else res.send('Error al eliminar la nota')
  })
})

app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(3000, () => {
  console.log('Server: http://localhost:3000')
})
