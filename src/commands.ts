import { spawn } from 'node:child_process'
import path from 'node:path'
import { MESSAGES, exampleFolders } from './constants.ts'

// Muestra la ayuda de uso.
export function showHelp() {
  console.log(MESSAGES.usage)
}

// Lista los nombres de los ejemplos.
export function exampleList() {
  console.log(MESSAGES.examplesTitle)
  Object.entries(exampleFolders).forEach(([key, value]) => {
    console.log(MESSAGES.exampleItemList(key, value))
  })
  console.log()
}

// Ejecutar el archivo principal de un ejemplo.
export async function runExample(name: string) {
  if (!name) {
    console.log(MESSAGES.missingExampleName)
    return
  }

  if (!(name in exampleFolders)) {
    console.log(MESSAGES.exampleNotExist(name))
    return
  }

  const filePath = path.resolve(
    process.cwd(),
    'examples',
    exampleFolders[name as keyof typeof exampleFolders],
    'main.js'
  )

  console.log(MESSAGES.executingExample(name, filePath))

  const child = spawn(process.execPath, [filePath], {
    stdio: ['inherit', 'pipe', 'pipe']
  })

  child.stdout.on('data', (data) => console.log(data.toString().trim()))
  child.stderr.on('data', (data) =>
    console.log(MESSAGES.outputError(data.toString().trim()))
  )

  child.on('error', (err) => console.log(MESSAGES.outputError(err.message)))
  child.on('exit', () => console.log(MESSAGES.runFinished))
}
