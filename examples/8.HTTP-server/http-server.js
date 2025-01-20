import http from 'node:http'

const server = http.createServer((req, res) => {
  console.log('request received')

  res.end('Hello World')
})

server.listen(3000, () => {
  console.log('server is listening on port 3000')
})
