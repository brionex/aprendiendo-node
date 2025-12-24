import { server } from './_server.js'

// Al usar callbacks en una operación asíncrona, los callbacks
// se ejecutan dependiendo del orden de llegada o de quien se
// resuelva primero y no en el orden en el que se han enviado.

export function callbacks() {
  console.log('Ejecución asíncrona con callbacks.')

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
