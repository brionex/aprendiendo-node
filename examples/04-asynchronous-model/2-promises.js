import { logger } from '../../lib/logger.js'
import { server } from './_server.js'

console.log('Ejecución asíncrona con promesas.\n')

// --------------------------------------------
// Usando then / catch
// --------------------------------------------
// La promesa se resuelve cuando la operación termina.
// El orden de las respuestas depende del tiempo de resolución,
// no del orden en que se hacen las llamadas.
server(1)
  .then((res) => logger.success(res))
  .catch((err) => logger.error(err))

// --------------------------------------------
// Usando async / await con .catch()
// --------------------------------------------
// No recomendado como patrón general.
// `.catch()` consume el error y evita que se propague.
// `res` puede quedar `undefined`.
//
// Úsalo SOLO para errores controlados
// (cuando el fallo es esperado y hay fallback claro).

const res = await server(2).catch((err) => {
  logger.error(err)
  return null
})

if (res !== null) {
  logger.success(res)
}

// --------------------------------------------
// Usando async / await con try / catch
// --------------------------------------------
try {
  const res2 = await server(3)
  logger.success(res2)
} catch (err) {
  logger.error(err)
}
