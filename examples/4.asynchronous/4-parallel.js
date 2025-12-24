import { server } from './_server.js'

// Ejemplo asíncrono con promesas de manera paralela.

export function parallel() {
  console.log('Ejecución asíncrona con promesas en paralelo.')

  // Se ejecutan todas en paralelo, pero si una falla en su respuesta,
  // no espera a la respuesta de las demás.
  Promise.all([server(1), server(2), server(3)])
    .then(([res1, res2, res3]) => {
      console.log(res1)
      console.log(res2)
      console.log(res3)
    })
    .catch((err) => console.log(err))

  // Se ejecutan todas en paralelo, pero se pueden manejar los datos y
  // errores de forma independiente.
  Promise.allSettled([server(4), server(5), server(6)]).then((res) => {
    res.forEach((item) => {
      if (item.status === 'fulfilled') {
        console.log(item.value)
      } else {
        console.log(item.reason)
      }
    })
  })
}
