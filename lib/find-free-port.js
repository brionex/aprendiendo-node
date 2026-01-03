import net from 'node:net'

export function findFreePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', async (err) => {
      if (err.code === 'EADDRINUSE') {
        findFreePort(0).then((port) => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
