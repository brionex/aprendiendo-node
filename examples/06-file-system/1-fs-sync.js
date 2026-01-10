import { logger } from '../../lib/logger.js'
import path from 'node:path'
import fs from 'node:fs'

// Objetivo del ejemplo:
// Demostrar el uso del módulo fs para trabajar con el sistema
// de archivos de forma síncrona, donde cada operación bloquea
// la ejecución hasta completarse.

// Flujo de ejecución:
// 1. Crear un archivo de prueba.
// 2. Verificar si el archivo existe.
// 3. Leer su contenido.
// 4. Crear un directorio de trabajo "prueba".
// 5. Copiar el archivo al directorio.
// 6. Mover el archivo al directorio.
// 7. Eliminar el archivo.
// 8. Eliminar el directorio.

const dirname = import.meta.dirname
const filePath = path.join(dirname, '_archivo.txt')
const fileName = path.basename(filePath)
const folderPath = path.join(dirname, 'prueba')
const folderName = `${path.sep}prueba${path.sep}`

function writeFile() {
  // Crea un archivo de forma síncrona.
  // La ejecución se bloquea hasta que la escritura finaliza.

  console.log('-> Creando archivo')

  try {
    fs.writeFileSync(filePath, 'Texto dentro del archivo', 'utf-8')
    logger.success(`✔  archivo creado -> ${fileName}\n`)
  } catch {
    logger.error('✖  Error en escritura\n')
  }
}

function existsFile() {
  // Comprueba de forma inmediata si el archivo existe.
  // No lanza excepción, solo retorna true o false.

  console.log('-> Comprobando existencia del archivo')

  const exists = fs.existsSync(filePath)
  logger.success(`✔  Resultado: ${exists}\n`)
}

function readFile() {
  // Lee el contenido del archivo de forma síncrona.
  // El programa se detiene hasta completar la lectura.

  console.log('-> Leyendo archivo')

  try {
    const text = fs.readFileSync(filePath, 'utf-8')
    logger.success(`✔ Contenido leído -> "${text}"\n`)
  } catch {
    logger.error('✖  Error en lectura\n')
  }
}

function createDir() {
  // Crea un directorio de forma síncrona.
  // La opción recursive evita errores si el directorio ya existe.

  console.log('-> Creando directorio')

  try {
    fs.mkdirSync(folderPath, { recursive: true })
    logger.success(`✔  Directorio creado: ${folderName}\n`)
  } catch {
    logger.error('✖  Error al crear directorio\n')
  }
}

function copyFile() {
  // Crea una copia del archivo dentro del directorio "prueba".

  console.log('-> Copiando archivo')
  const copyFileName = `copia-${fileName}`

  try {
    fs.copyFileSync(filePath, path.join(folderPath, copyFileName))
    logger.success(`✔  Archivo copiado a ${folderName}${copyFileName}\n`)
  } catch {
    logger.error('✖  Error al copiar archivo\n')
  }
}

function moveFile() {
  // Mueve el archivo original al directorio "prueba".
  // Internamente se realiza una operación de renombrado.

  console.log('-> Moviendo archivo')

  try {
    fs.renameSync(filePath, path.join(folderPath, fileName))
    logger.success(`✔  Archivo movido a ${folderName}${fileName}\n`)
  } catch {
    logger.error('✖  Error al mover archivo\n')
  }
}

function removeFile() {
  // Elimina el archivo de forma permanente.

  console.log('-> Eliminando archivo')

  try {
    fs.unlinkSync(path.join(folderPath, fileName))
    logger.success(`✔  Archivo eliminado: ${folderName}${fileName}\n`)
  } catch {
    logger.error('✖  Error al eliminar archivo\n')
  }
}

function removeDir() {
  // Elimina el directorio y todo su contenido.
  // La opción recursive permite borrar carpetas no vacías.

  console.log('-> Eliminando directorio')

  try {
    fs.rmSync(folderPath, { recursive: true })
    logger.success(`✔  Directorio eliminado: ${folderName}\n`)
  } catch {
    logger.error(`✖  Error al eliminar directorio ${folderName}\n`)
  }
}

// --------------------------------------------
// Ejecución síncrona con fs.
// Ejecuta todas las operaciones de forma secuencial y bloqueante.
// --------------------------------------------

console.log('Ejecución síncrona con fs.\n')
console.log(`Archivo de prueba:\n - ${filePath}\n`)

// Cada función se ejecuta únicamente cuando la anterior finaliza.
// Si ocurre un error, el flujo continúa, pero las operaciones
// dependientes probablemente también fallarán.

writeFile()
existsFile()
readFile()
createDir()
copyFile()
moveFile()
removeFile()
removeDir()
