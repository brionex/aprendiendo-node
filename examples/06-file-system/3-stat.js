import path from 'node:path'
import fs from 'node:fs/promises'

// Objetivo del ejemplo:
// Demostrar el uso del método fs.stat para obtener información
// detallada sobre archivos y directorios utilizando la API asíncrona.
//
// Nota:
// Se usa la versión asíncrona porque, con los ejemplos previos,
// ya se comprende la diferencia entre operaciones síncronas y asíncronas.

export async function stat() {
  const folderPath = path.join(import.meta.dirname, 'prueba')
  const filePath = path.join(folderPath, 'prueba-stat.txt')

  // Creación del entorno de prueba
  // Se prepara un directorio y un archivo para poder
  // consultar sus metadatos posteriormente.

  console.log('\nUsando el método "stat" del modulo "fs"\n')

  console.log('-> Creando archivo y directorio de prueba')
  await fs.mkdir(folderPath, { recursive: true })
  console.log(`✔  Directorio creado: ${folderPath}\n`)

  console.log('-> Creando archivo')
  await fs.writeFile(filePath, crypto.randomUUID(), 'utf-8')
  console.log(`✔  Archivo creado: ${filePath}\n`)

  // Obteniendo información de un archivo
  // fs.stat devuelve un objeto con metadatos del sistema de archivos.

  console.log('-> Obteniendo información de un archivo')
  const statFile = await fs.stat(filePath)

  console.log(
    `- Tamaño: ${statFile.size} bytes\n` +
      `- Es un archivo: ${statFile.isFile()}\n` +
      `- Es un directorio: ${statFile.isDirectory()}\n` +
      `- Fecha de creación: ${statFile.birthtime.toLocaleString()}\n` +
      `- Última modificación: ${statFile.mtime.toLocaleString()}\n`
  )

  // Obteniendo información de un directorio
  // Los metadatos funcionan igual que con archivos,
  // pero los valores pueden variar según el sistema operativo.

  console.log('-> Obteniendo información de un directorio')
  const statDir = await fs.stat(folderPath)

  console.log(
    `- Tamaño: ${statDir.size} bytes\n` +
      `- Es un archivo: ${statDir.isFile()}\n` +
      `- Es un directorio: ${statDir.isDirectory()}\n` +
      `- Fecha de creación: ${statDir.birthtime.toLocaleString()}\n` +
      `- Última modificación: ${statDir.mtime.toLocaleString()}\n`
  )
}
