import readline from 'node:readline'

// Crea la interfaz del prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Pide datos en una iteración.
rl.question('Escribe: ', (input) => {
  console.log(`Tu escribiste esto: ${input}`)
  rl.close()
})
