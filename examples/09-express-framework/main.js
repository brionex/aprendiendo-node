const arg = process.argv[2] ?? '1'

const files = {
  1: './1-express.js',
  2: './2-rest-api.js'
}

if (!files[arg]) {
  console.log(`El argumento "${arg}" no es válido`)
  process.exit(1)
}

await import(files[arg])
