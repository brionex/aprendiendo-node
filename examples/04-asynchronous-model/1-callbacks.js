import { server } from './_server.js'

// Al usar callbacks en operaciones asíncronas, el orden de ejecución
// depende del tiempo de resolución de cada operación,
// no del orden en que se realizan las llamadas.

export function callbacks() {
  console.log('Ejecución asíncrona con callbacks.\n')

  server(1, (err, res) => {
    console.log(err ?? res)
  })

  server(2, (err, res) => {
    console.log(err ?? res)
  })

  server(3, (err, res) => {
    console.log(err ?? res)
  })
}
