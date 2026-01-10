import { spawn } from 'node:child_process'
import path from 'node:path'
import { MESSAGES, exampleFolders } from './constants.ts'

// ----------------------------------------
// Muestra la ayuda de uso.
// ----------------------------------------
export function showHelp() {
  console.log(MESSAGES.usage)
}

// ----------------------------------------
// Lista los nombres de los ejemplos.
// ----------------------------------------
export function exampleList() {
  console.log(MESSAGES.examplesTitle)

  Object.entries(exampleFolders).forEach(([key, value]) => {
    const name = key.padEnd(
      Math.max(...Object.keys(exampleFolders).map((char) => char.length)) + 1,
      ' '
    )
    const args = `${value[1] ?? ''}`.padEnd(10, ' ')
    const folder = value[0]

    console.log(MESSAGES.exampleListItem(name, args, folder))
  })
  console.log()
}

// ----------------------------------------
// Ejecutar el archivo principal de un ejemplo.
// ----------------------------------------
export async function runExample(name: string, arg: string) {
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
    exampleFolders[name as keyof typeof exampleFolders][0],
    'main.js'
  )

  console.log(MESSAGES.executingExample(name, filePath))

  const child = spawn(process.execPath, arg ? [filePath, arg] : [filePath], {
    stdio: ['inherit', 'pipe', 'pipe']
  })

  child.stdout.on('data', (data) => process.stdout.write(data.toString()))
  child.stderr.on('data', (data) =>
    process.stderr.write(MESSAGES.outputError(data.toString()))
  )

  child.on('error', (err) => console.log(MESSAGES.outputError(err.message)))
  child.on('exit', () => console.log(MESSAGES.runFinished))
}
