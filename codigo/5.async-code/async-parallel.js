import server from './server.js'

// Ejemplo asíncrono con promesas de manera paralela.

// Si una petición falla, da error y no espera a las demás.
Promise.all([server(), server(), server(), server()])
  .then(([res1, res2, res3, res4]) => {
    console.log('\nEjemplo asíncrono paralelo con `Promise.all()`')
    console.log('Petición 1:', res1)
    console.log('Petición 2:', res2)
    console.log('Petición 3:', res3)
    console.log('Petición 4:', res4)
  })
  .catch((err) => {
    console.log('\nEjemplo asíncrono paralelo con `Promise.all()`')
    console.log(err)
  })

// Maneja la respuesta de cada petición de manera independiente.
Promise.allSettled([server(), server(), server(), server()]).then((res) => {
  console.log('\nEjemplo asíncrono paralelo con `Promise.allSettled()`')
  res.forEach((item, i) => {
    if (item.status === 'fulfilled') {
      console.log(`Petición ${i + 1}:`, item.value)
    } else {
      console.log(`Petición ${i + 1}:`, item.reason)
    }
  })
})
