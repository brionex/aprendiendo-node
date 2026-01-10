import { logger } from '../../lib/logger.js'
import { server } from './_server.js'

// Al usar callbacks en operaciones asíncronas, el orden de ejecución
// depende del tiempo de resolución de cada operación,
// no del orden en que se realizan las llamadas.

logger.log('Ejecución asíncrona con callbacks.\n')

server(1, (err, res) => {
  if (err) {
    logger.error(err)
    return
  }
  logger.success(res)
})

server(2, (err, res) => {
  if (err) {
    logger.error(err)
    return
  }
  logger.success(res)
})

server(3, (err, res) => {
  if (err) {
    logger.error(err)
    return
  }
  logger.success(res)
})
