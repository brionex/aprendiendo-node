import { fork } from 'node:child_process'
import { resolve } from 'node:path'
import { MESSAGES } from './src/messages.js'
import { aliases } from './src/aliases.js'

// Mostrar ayuda
function showHelp() {
  console.log(MESSAGES.usage)
  process.exit(0)
}

// Listar alias disponibles
function listAliases() {
  console.log(MESSAGES.aliasList)
  Object.entries(aliases).forEach(([key, value]) => {
    console.log(`- ${key}\n ${value}\n`)
  })
  process.exit(0)
}

// Ejecutar el alias
async function executeAlias(alias) {
  if (!aliases[alias]) {
    console.error(MESSAGES.aliasNotFound(alias))
    process.exit(1)
  }

  const filePath = resolve(process.cwd(), aliases[alias])
  console.log(MESSAGES.executingAlias(alias, filePath))

  const processExecution = fork(filePath)
  process.on('error', (error) => {
    console.error(error)
  })
}

// Procesar argumentos
const args = process.argv.slice(2)
if (args.length === 0) showHelp()
if (args[0] === 'alias') listAliases()
executeAlias(args[0])
