const arg = process.argv[2] ?? 1

const files = {
  1: './1-http-server.js',
  2: './2-routing.js',
  3: './3-web-server.js'
}

await import(files[arg])
