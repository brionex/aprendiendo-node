import url from 'node:url'
import { color } from './colors.ts'

// Ejemplos
export const exampleFolders = {
  globals: '01-global-runtime',
  modules: '02-module-system',
  os: '03-operating-system',
  async: '04-asynchronous-model',
  path: '05-path-handling',
  fs: '06-file-system',
  ls: '07-cli-ls-exercise',
  http: '08-http-server',
  express: '09-express-framework'
} as const

// Helpers
const cliErrorLabel = color('CLI ERROR:').red.str
const stripOrderPrefix = (folder: string) => folder.replace(/^\d+-/, '')

// Mensajes
const commandNotFound = (command: string) => `
${cliErrorLabel}
  El comando ${color(command).yellow.str} no existe.
  Ejecuta ${
    color('node cli.ts list').cyan.str
  } para ver los comandos disponibles.
`

const usage = `
${color('Uso:').gray.str}
  ${color('node cli.ts').cyan.str} ${color('<comando>').yellow.str} ${
  color('<argumentos>').gray.str
}

${color('Comandos disponibles:').gray.str}
  ${color('list').yellow.str}             Lista todos los ejemplos.
  ${color('run').yellow.str} ${
  color('<nombre>').gray.str
}     Ejecuta un ejemplo.
`

const examplesTitle = `
${color('Lista de ejemplos:').gray.str}
`

const exampleItemList = (name: string, folder: string) =>
  `- ${name.padEnd(10)} ${color(stripOrderPrefix(folder)).gray.str}`

const missingExampleName = `
${cliErrorLabel}
  Debes pasar un nombre al comando:
  ${color('run').yellow.str} ${color('<nombre>').gray.str}
`

const exampleNotExist = (name: string) => `
${cliErrorLabel}
  El nombre ${color(name).yellow.str} no existe en la lista de ejemplos.
  Ejecuta ${color('node cli.ts list').cyan.str} para listar los ejemplos.
`

const executingExample = (exampleName: string, mainFilePath: string) => `
${color('Ejecutando ejemplo:').gray.str}
  Nombre: ${color(exampleName).yellow.str}
  Ruta: ${color(String(url.pathToFileURL(mainFilePath))).cyan.str}

${color('Output:').gray.bold.str}
`

const outputError = (err: string) => `
${color(err).red.str}
`

const runFinished = `
${color('Fin de ejecución').gray.bold.str}
`

// Exportación de los mensajes
export const MESSAGES = {
  commandNotFound,
  usage,
  examplesTitle,
  exampleItemList,
  missingExampleName,
  exampleNotExist,
  executingExample,
  outputError,
  runFinished
}
