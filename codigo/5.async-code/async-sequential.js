import server from './server.js'

// Ejemplo asíncrono con promesa de manera asíncrona secuencial.
// Esto significa que cada petición se ejecuta en el orden en el que se enviaron.
;(async () => {
  console.log('Ejemplo asíncrono con promesa de manera secuencial')
  let request = 0

  try {
    request++
    const res = await server()
    console.log('Petición 1:', res)

    request++
    const res2 = await server()
    console.log('Petición 2:', res2)

    request++
    const res3 = await server()
    console.log('Petición 3:', res3)

    request++
    const res4 = await server()
    console.log('Petición 4:', res4)
  } catch (err) {
    console.log(`Petición ${request}:`, err)
  }
})()
