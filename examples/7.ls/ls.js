import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

// Ejecución del programa
const dir = process.argv[4]
dir ? ls(dir) : console.log('Usage: node cli.js run exercise-ls <dir>')

async function ls (dir) {
  const dirStat = await fs
    .stat(dir)
    .catch(() => console.log(`El directorio ${dir} no existe.`))

  if (!dirStat) return

  if (dirStat.isDirectory()) {
    const files = await fs.readdir(dir)
    const maxName = Math.min(Math.max(...files.map((file) => file.length)), 20)

    // Encabezados
    console.log(
      pc.yellow(
        'name'.padEnd(maxName, ' ') +
          'size'.padEnd(9, ' ') +
          'type'.padEnd(6, ' ') +
          'created'.padEnd(22, ' ') +
          'modified \n'
      )
    )

    // Impresión de las filas de información de archivos
    for (const file of files) {
      const fileStat = await fs.stat(path.join(dir, file))
      const fileParse = path.parse(file)

      const maxNameLength = maxName - (fileParse.ext.length + 5)

      const fileName =
        file.length > maxName
          ? fileParse.name.slice(0, maxNameLength).concat('...', fileParse.ext)
          : file

      const fileInfo = {
        name: fileName,
        size: (fileStat.size / 1024 / 1024).toFixed(2) + ' MB',
        type: fileStat.isDirectory() ? 'd' : 'f',
        created: formatDate(fileStat.birthtime),
        modified: formatDate(fileStat.mtime)
      }

      console.log(
        fileInfo.name.padEnd(maxName, ' ') +
          fileInfo.size.padEnd(9, ' ') +
          fileInfo.type.padEnd(6, ' ') +
          fileInfo.created.padEnd(22, ' ') +
          fileInfo.modified
      )
    }
  }
}

function formatDate (date) {
  const dateObj = new Date(date)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }

  return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}
