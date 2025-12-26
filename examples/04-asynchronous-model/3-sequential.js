import { server } from './_server.js'

// Ejecución asíncrona con promesas de forma secuencial.
// Cada petición espera a que la anterior termine antes de ejecutarse.

export async function sequential() {
  console.log('Ejecución asíncrona con promesas de manera secuencial.')

  // --------------------------------------------
  // Ejecución secuencial con control de errores
  // Si una falla, se interrumpe la secuencia
  // --------------------------------------------
  try {
    const res = await server(1)
    console.log(res)

    const res2 = await server(2)
    console.log(res2)

    const res3 = await server(3)
    console.log(res3)
  } catch (err) {
    console.log(err)
  }

  // --------------------------------------------
  // Ejecución secuencial sin interrumpir el flujo
  // Cada error se maneja de forma individual
  // --------------------------------------------
  const res4 = await server(4).catch((err) => console.log(err))
  if (res4) console.log(res4)

  const res5 = await server(5).catch((err) => console.log(err))
  if (res5) console.log(res5)

  const res6 = await server(6).catch((err) => console.log(err))
  if (res6) console.log(res6)
}
