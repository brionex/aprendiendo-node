import path from 'node:path'
import url from 'node:url'
import { filesMap } from './files-map.js'
import { MESSAGES } from './messages.js'

// Mostrar ayuda
function showHelp () {
  console.log(MESSAGES.usage)
}

// Listar los nombres de los archivos
function listFiles () {
  console.log(MESSAGES.filesTitle)
  Object.entries(filesMap).forEach(([key]) => {
    console.log(`- ${key}`)
  })
  console.log()
}

// Mostrar la ruta de una alias
function filePath (fileName) {
  if (!filesMap[fileName]) {
    console.error(MESSAGES.fileNoExist.replace('{fileName}', fileName))
    return
  }
  console.log(
    MESSAGES.filePath.replace('{fileName}', fileName),
    filesMap[fileName] + '\n'
  )
}

// Ejecutar un archivo
async function executeFile (fileName) {
  if (!filesMap[fileName]) {
    console.error(MESSAGES.fileNoExist.replace('{fileName}', fileName))
    return
  }

  const filePath = path.resolve(process.cwd(), filesMap[fileName])
  console.log(
    MESSAGES.executingFile
      .replace('{fileName}', fileName)
      .replace('{filePath}', filePath)
  )

  try {
    await import(url.pathToFileURL(filePath))
    console.log()
  } catch (error) {
    console.error(
      MESSAGES.runTimeError
        .replace('{err}', error.message)
        .replace('{detail}', error.stack)
    )
    process.exit(1)
  }
}

export default {
  showHelp,
  listFiles,
  filePath,
  executeFile
}
