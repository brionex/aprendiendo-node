import fs from 'node:fs'

// Utiliza fs.stat() para obtener información sobre un archivo o directorio.

const folderPath = 'codigo/4.fs/prueba'
const filePath = 'codigo/4.fs/prueba/pruebaStat.txt'

// Usando statSync en un archivo (forma síncrona)
const statSync = fs.statSync(filePath)

console.log('Info del archivo de forma síncrona:')
console.log(`- Tamaño: ${statSync.size} bytes`)
console.log(`- Es un archivo: ${statSync.isFile()}`)
console.log(`- Es un directorio: ${statSync.isDirectory()}`)
console.log(`- Fecha de creación: ${statSync.birthtime}`)
console.log(`- Última modificación: ${statSync.mtime}\n`)

// Usando statSync en un directorio (forma síncrona)
const statSyncDir = fs.statSync(folderPath)

console.log('Info del directorio de forma síncrona:')
console.log(`- Tamaño: ${statSyncDir.size} bytes`)
console.log(`- Es un archivo: ${statSyncDir.isFile()}`)
console.log(`- Es un directorio: ${statSyncDir.isDirectory()}`)
console.log(`- Fecha de creación: ${statSyncDir.birthtime}`)
console.log(`- Última modificación: ${statSyncDir.mtime}`)

// Usando stat en un archivo (forma asíncrona)
fs.stat(filePath, (err, stats) => {
  if (err) throw err
  console.log('Info del archivo de forma asíncrona:')
  console.log(`- Tamaño: ${stats.size} bytes`)
  console.log(`- Es un archivo: ${stats.isFile()}`)
  console.log(`- Es un directorio: ${stats.isDirectory()}`)
  console.log(`- Fecha de creación: ${stats.birthtime}`)
  console.log(`- Última modificación: ${stats.mtime}\n`)
})

// Usando stat en un directorio (forma asíncrona)
fs.stat(folderPath, (err, stats) => {
  if (err) throw err
  console.log('Info del directorio de forma asíncrona:')
  console.log(`- Tamaño: ${stats.size} bytes`)
  console.log(`- Es un archivo: ${stats.isFile()}`)
  console.log(`- Es un directorio: ${stats.isDirectory()}`)
  console.log(`- Fecha de creación: ${stats.birthtime}`)
  console.log(`- Última modificación: ${stats.mtime}`)
})
