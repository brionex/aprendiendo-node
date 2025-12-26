import { server } from './_server.js'

// Ejecución asíncrona con promesas en paralelo.
// Todas las promesas se lanzan al mismo tiempo y no esperan unas a otras.

export function parallel() {
  console.log('Ejecución asíncrona con promesas en paralelo.')

  // --------------------------------------------
  // Usando Promise.all
  // --------------------------------------------
  // Se ejecutan todas en paralelo.
  // Si alguna falla, el catch captura el primer error,
  // y no se devuelven los resultados de las demás.
  Promise.all([server(1), server(2), server(3)])
    .then(([res1, res2, res3]) => {
      console.log(res1)
      console.log(res2)
      console.log(res3)
    })
    .catch((err) => console.log(err))

  // --------------------------------------------
  // Usando Promise.allSettled
  // --------------------------------------------
  // Se ejecutan todas en paralelo.
  // Se pueden manejar resultados y errores de manera individual.
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
