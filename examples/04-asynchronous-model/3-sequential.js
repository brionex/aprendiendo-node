import { server } from './_server.js'

// Ejemplo asíncrono con promesa de manera asíncrona secuencial.
// Esto significa que cada petición se ejecuta en el orden en el que se enviaron.

export async function sequential() {
  console.log('Ejecución asíncrona con promesas de manera secuencial.')

  // Si una falla, da error y no espera que las demás se resuelvan.
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

  // Ejecutar todas aunque alguna petición falle.
  const res4 = await server(4).catch((err) => console.log(err))
  if (res4) console.log(res4)

  const res5 = await server(5).catch((err) => console.log(err))
  if (res5) console.log(res5)

  const res6 = await server(6).catch((err) => console.log(err))
  if (res6) console.log(res6)
}
