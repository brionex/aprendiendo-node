import { resolve } from 'path'
import { pathToFileURL } from 'url'
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
    console.log(`- ${key}`)
  })
  console.log()
  process.exit(0)
}

// Muestra la ruta de una alias
function showAliasPath(alias) {
  if (!aliases[alias]) {
    console.error(MESSAGES.aliasNotFound(alias))
    process.exit(1)
  }
  console.log(
    `\nRuta al archivo de ${alias}:\n ->`,
    aliases[alias].slice(1) + '\n'
  )
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

  try {
    await import(pathToFileURL(filePath))
    console.log()
  } catch (error) {
    console.error(`Error al ejecutar el archivo: ${error.message}`)
    process.exit(1)
  }
}

// Procesar argumentos
const args = process.argv.slice(2)
if (args.length === 0) showHelp()
if (args[0] === 'alias') listAliases()
if (args[0] === 'path') showAliasPath(args[1])
if (args[0] === 'run') executeAlias(args[1])
