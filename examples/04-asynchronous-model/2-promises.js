import { server } from './_server.js'

export async function promises() {
  console.log('Ejecución asíncrona con promesas.')

  // --------------------------------------------
  // Usando then / catch
  // --------------------------------------------
  // La promesa se resuelve cuando la operación termina.
  // El orden de las respuestas depende del tiempo de resolución,
  // no del orden en que se hacen las llamadas.
  server(1)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  // --------------------------------------------
  // Usando async / await con .catch()
  // --------------------------------------------
  // await solo puede usarse dentro de una función async.
  // Aquí el error se maneja directamente en el .catch().
  const res = await server(2).catch((err) => console.log(err))
  if (res) {
    console.log(res)
  }

  // --------------------------------------------
  // Usando async / await con try / catch
  // --------------------------------------------
  try {
    const res2 = await server(3)
    console.log(res2)
  } catch (err) {
    console.log(err)
  }
}
