import fs from 'node:fs'

const filePath = 'codigo/4.fs/prueba.txt'

// ---> Manipulación de archivos de forma asíncrona
console.log('\nManipulación asíncrona ')

// Escritura
fs.writeFile(filePath, 'Hola mundo', function (err) {
  if (err) throw err
  console.log('Archivo creado: ' + filePath)

  // Lectura
  fs.readFile(filePath, 'utf-8', function (err, text) {
    if (err) throw err
    console.log('Archivo leído:', text)

    // Copia
    const filePathCopy = filePath.slice(0, -4) + '-copia.txt'
    fs.copyFile(filePath, filePathCopy, function (err) {
      if (err) throw err
      console.log('Archivo copiado: ' + filePathCopy)

      // Mover archivo (renombrar)
      const filePathRenamed = 'codigo/4.fs/prueba/prueba.txt'
      fs.rename(filePath, filePathRenamed, function (err) {
        if (err) throw err

        // Eliminar archivos
        fs.unlink(filePathCopy, function (err) {
          if (err) throw err
          console.log('Archivos eliminado: \n- ' + filePathCopy)
        })

        fs.unlink(filePathRenamed, function (err) {
          if (err) throw err
          console.log('Archivos eliminado: \n- ' + filePathRenamed)
        })
      })
    })
  })
})
