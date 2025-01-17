import fs from 'node:fs'

const filePath = 'codigo/4.fs/prueba.txt'

console.log('Manipulación de archivo síncrona\n')

// Escritura
fs.writeFileSync(filePath, 'Hola mundo')
console.log('Archivo creado: ' + filePath)

// Lectura
const text = fs.readFileSync(filePath, 'utf-8')
console.log('Archivo leído:', text)

// Copia
const filePathCopy = filePath.slice(0, -4) + '-copia.txt'
fs.copyFileSync(filePath, filePathCopy)
console.log('Archivo copiado: ' + filePathCopy)

// Mover archivo (renombrar)
const filePathRenamed = 'codigo/4.fs/prueba/prueba.txt'
fs.renameSync(filePath, filePathRenamed)
console.log('Archivo movido: ' + filePathRenamed)

// Eliminar archivos
fs.unlinkSync(filePathCopy)
fs.unlinkSync(filePathRenamed)
console.log(
  'Archivos eliminados: \n- ' + filePathCopy + '\n- ' + filePathRenamed
)
