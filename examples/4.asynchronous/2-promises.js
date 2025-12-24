import { server } from './_server.js'

export async function promises() {
  console.log('Ejecución asíncrona con promesas.')

  // Usando then/catch para resolver la promesa y manejar errores.
  // Al igual que callback, la respuesta depende el orden de llegada.
  server(1)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

  // Usando async/await con catch, para esto debes convertir la función a asíncrona
  const res = await server(2).catch((err) => console.log(err))
  if (res) {
    console.log(res)
  }

  // Usando solo async/await
  try {
    const res2 = await server(3)
    if (res2) {
      console.log(res2)
    }
  } catch (err) {
    console.log(err)
  }
}
