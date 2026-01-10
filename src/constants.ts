import url from 'node:url'
import { color } from './colors.ts'

// Examples list
export const exampleFolders = {
  globals: ['01-global-runtime', null],
  modules: ['02-module-system', null],
  os: ['03-operating-system', null],
  async: ['04-asynchronous-model', '1|2|3|4'],
  path: ['05-path-handling', null],
  fs: ['06-file-system', '1|2|3'],
  ls: ['07-cli-ls-exercise', '<path>'],
  http: ['08-http-server', '1|2|3'],
  express: ['09-express-framework', '1|2']
} as const

// Messages
const cliErrorLabel = color('CLI ERROR:').red.str

const usage = `
${color('Uso:').gray.str}
  ${color('node cli.ts').cyan.str} ${color('<comando>').yellow.str} ${
  color('<argumentos>').gray.str
}

${color('Comandos disponibles:').gray.str}
  ${color('list').yellow.str}               Lista todos los ejemplos.
  ${color('run').yellow.str} ${
  color('<ejemplo>').gray.str
}      Ejecuta un ejemplo.
`

const commandNotFound = (command: string) => `
${cliErrorLabel}
  El comando ${color(command).yellow.str} no existe.
  Ejecuta ${color('node cli.ts').cyan.str} para ver los comandos disponibles.
`

const examplesTitle = `
${color('Lista de ejemplos:').gray.str}
`

const exampleListItem = (name: string, args: string, folder: string) =>
  `- ${name} ${color(args).gray.str} ${folder}`

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

// Exports
export const MESSAGES = {
  commandNotFound,
  usage,
  examplesTitle,
  exampleListItem,
  missingExampleName,
  exampleNotExist,
  executingExample,
  outputError,
  runFinished
}
