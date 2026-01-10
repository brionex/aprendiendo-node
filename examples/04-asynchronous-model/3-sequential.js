import { logger } from '../../lib/logger.js'
import { server } from './_server.js'

// Ejecución asíncrona con promesas de forma secuencial.
// Cada petición espera a que la anterior termine antes de ejecutarse.

console.log('Ejecución asíncrona con promesas de manera secuencial.\n')

// --------------------------------------------
// Ejecución secuencial con control de errores
// Si una falla, se interrumpe la secuencia
// --------------------------------------------
try {
  const res = await server(1)
  logger.success(res)

  const res2 = await server(2)
  logger.success(res2)

  const res3 = await server(3)
  logger.success(res3)
} catch (err) {
  logger.error(err)
}

// --------------------------------------------
// Ejecución secuencial sin interrumpir el flujo
// Cada error se maneja de forma individual
// --------------------------------------------
try {
  const res = await server(4)
  logger.success(res)
} catch (err) {
  logger.error(err)
}

try {
  const res2 = await server(5)
  logger.success(res2)
} catch (err) {
  logger.error(err)
}

try {
  const res3 = await server(6)
  logger.success(res3)
} catch (err) {
  logger.error(err)
}
