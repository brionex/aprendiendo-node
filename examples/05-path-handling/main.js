import path from 'path'
import { fileURLToPath } from 'url'

// Con este modulo puedes manipular rutas de archivos y directorios.

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const joinPath = path.join(dirname, 'assets', 'image.png')
const basename = path.basename(filename)
const extname = path.extname(filename)
const resolvedPath = path.resolve('assets', 'image.png')
const normalizedPath = path.normalize(
  '/users/john/../jane/./documents//file.txt'
)
const parsedPath = path.parse(filename)
const formattedPath = path.format(parsedPath)
const separator = path.sep
const delimiter = path.delimiter

console.log(`
Ejemplos de uso del modulo path de nodeJS

Ruta del archivo actual: ${filename}

Ruta del directorio actual: ${dirname}

Ruta combinada: ${joinPath}

Nombre del archivo: ${basename}

Extensión del archivo: ${extname}

Ruta absoluta resuelta: ${resolvedPath}

Ruta normalizada: ${normalizedPath}

Ruta parseada: ${parsedPath}

Ruta reconstruida: ${formattedPath}

Separador de rutas: ${separator}
  
Separador de variables PATH: ${delimiter}
`)
