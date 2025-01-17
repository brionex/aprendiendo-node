import server from './server.js'

// Ejemplo asíncrono con callback
// Usando callback las peticiones se ejecutan en el orden de llegada y no en el orden en que se enviaron.

console.log('Ejemplo asíncrono con callback')

server((err, res) => {
  console.log('Petición 1:')
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})

server((err, res) => {
  console.log('Petición 2:')
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})

server((err, res) => {
  console.log('Petición 3:')
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})

server((err, res) => {
  console.log('Petición 4:')
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})
