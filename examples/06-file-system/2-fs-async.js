import path from 'node:path'
import fs from 'node:fs/promises'

// Objetivo del ejemplo:
// Demostrar el uso del módulo fs/promises para trabajar con el sistema
// de archivos de forma asíncrona, ejecutando operaciones en paralelo
// y controlando el resultado de cada una.

// Flujo de ejecución:
// 1. Crear un directorio de trabajo llamado "prueba".
// 2. Crear múltiples archivos en paralelo con contenido dinámico.
// 3. Leer el contenido de todos los archivos en paralelo.
// 4. Eliminar el directorio y su contenido al finalizar.

const dirname = import.meta.dirname
const folderPath = path.join(dirname, 'prueba')

async function createFiles() {
  // Crea múltiples archivos de forma asíncrona y en paralelo.
  // Cada creación se maneja de forma independiente usando Promise.allSettled.

  console.log('-> Creando archivos')

  // Función auxiliar que crea un archivo individual
  // y retorna su nombre si la operación es exitosa.
  const createFile = async (fileName) => {
    await fs.writeFile(
      path.join(folderPath, fileName),
      crypto.randomUUID(),
      'utf-8'
    )
    return fileName
  }

  const res = await Promise.allSettled([
    createFile('archivo-1.txt'),
    createFile('archivo-2.txt'),
    createFile('archivo-3.txt'),
    createFile('archivo-4.txt'),
    createFile('archivo-5.txt'),
    createFile('archivo-6.txt'),
    createFile('archivo-7.txt'),
    createFile('archivo-8.txt'),
    createFile('archivo-9.txt')
  ])

  // Se procesa el resultado de cada operación sin detener el flujo.
  res.forEach((item) => {
    if (item.status === 'fulfilled') {
      console.log('✔  Archivo creado:', item.value)
    }

    if (item.status === 'rejected') {
      console.log('✖  Error al crear archivo:', path.basename(item.reason.path))
    }
  })
}

async function readFiles() {
  // Lee el contenido de todos los archivos en paralelo.
  // Cada lectura se evalúa de forma independiente.

  console.log('\n-> Leyendo archivos')

  // Función auxiliar que lee un archivo y retorna
  // su nombre junto con el contenido.
  const readFile = async (fileName) => {
    const text = await fs.readFile(path.join(folderPath, fileName), 'utf-8')
    return {
      fileName,
      content: text
    }
  }

  const res = await Promise.allSettled([
    readFile('archivo-1.txt'),
    readFile('archivo-2.txt'),
    readFile('archivo-3.txt'),
    readFile('archivo-4.txt'),
    readFile('archivo-5.txt'),
    readFile('archivo-6.txt'),
    readFile('archivo-7.txt'),
    readFile('archivo-8.txt'),
    readFile('archivo-9.txt')
  ])

  res.forEach((item) => {
    if (item.status === 'fulfilled') {
      console.log(
        `✔  Archivo leído ${item.value.fileName}:`,
        item.value.content
      )
    }

    if (item.status === 'rejected') {
      console.log('✖  Error al leer archivo:', path.basename(item.reason.path))
    }
  })
}

export function fsAsync() {
  // Función principal (orquestadora del proceso).
  // Prepara el entorno, ejecuta el flujo asíncrono
  // y realiza la limpieza final.

  console.log('Ejecución asíncrona con fs/promises.\n')
  console.log('-> Creando directorio')

  // Se crea el directorio base antes de iniciar cualquier operación.
  fs.mkdir(folderPath, { recursive: true })
    .then(async () => {
      console.log('✔  Directorio creado: prueba\n')

      await createFiles()
      await readFiles()

      console.log('\n-> Eliminando directorio')
      await fs.rm(folderPath, { recursive: true })
      console.log(`✔  Directorio eliminado: ${path.sep}prueba${path.sep}\n`)
    })
    .catch((err) => {
      console.log('✖  Error al crear directorio\n', err)
    })
}
