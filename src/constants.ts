import url from 'node:url'
import { color } from './colors.ts'

export const exampleFolders = {
  'global-this': '1.global-this',
  'module-system': '2.module-system',
  'os-module': '3.os',
  async: '4.asynchronous',
  'path-module': '5.path-module',
  'fs-module': '6.fs-module',
  'ls-exercise': '7.ls-exercise',
  'http-server': '8.http-server',
  'express-web': '9.express-web'
}

const cliError = color('CLI ERROR:').red.str

const commandNotFound = (command: string) => `
${cliError}
  El comando ${color(command).yellow.str} no existe.
  Ejecuta ${
    color('node cli.ts').cyan.str
  } para listar los comandos disponibles. 
`

const usage = `
${color('Uso:').gray.str}
  ${color('node cli.ts <comando> <argumentos>').cyan.str}

${color('Comandos:').gray.str}
  ${color('list').yellow.str}   Lista todos los nombres de ejemplos.
  ${color('run').yellow.str}    Ejecuta un ejemplo. <nombre>

`

const examplesTitle = `
${color('Lista de ejemplos:').gray.str}
`

const missingExampleName = `
${cliError}
  Debes pasar un argumento al comando: 
  ${color('run').yellow.str} ${color('<nombre>').gray.str}
`

const exampleNotExist = (name: string) => `
${cliError}
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
${color('Fin de ejecución.').green.str}
`

export const MESSAGES = {
  commandNotFound,
  usage,
  examplesTitle,
  missingExampleName,
  exampleNotExist,
  executingExample,
  outputError,
  runFinished
}
