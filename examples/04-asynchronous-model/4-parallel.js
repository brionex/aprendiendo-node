import { server } from './_server.js'

// Ejecución asíncrona con promesas en paralelo.
// Todas las promesas se lanzan al mismo tiempo y no esperan unas a otras.

export async function parallel() {
  console.log('Ejecución asíncrona con promesas en paralelo.\n')

  // --------------------------------------------
  // Usando Promise.all
  // --------------------------------------------
  // Se ejecutan todas en paralelo.
  // Si alguna falla, el catch captura el primer error,
  // y no se devuelven los resultados de las demás.
  await Promise.all([server('1_A'), server('2_A'), server('3_A')])
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
  await Promise.allSettled([
    server('4_AS'),
    server('5_AS'),
    server('6_AS')
  ]).then((res) => {
    res.forEach((item) => {
      if (item.status === 'fulfilled') {
        console.log(item.value)
      } else {
        console.log(item.reason)
      }
    })
  })
}
