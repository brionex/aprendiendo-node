import path from 'path'
import { fileURLToPath } from 'url'

// Este modulo te permite manipular rutas de archivos y directorios.

// Obtener la ruta del archivo actual en forma de url y convertirla a path.
const filePath = fileURLToPath(import.meta.url)

const folderPath = path.dirname(filePath)
const joinPath = path.join('assets', 'images', 'photo.png')
const basename = path.basename(filePath)
const extname = path.extname(filePath)
const resolvedPath = path.resolve(joinPath)
const normalizedPath = path.normalize(
  '/users\\john/../jane/./documents//file.txt'
)
const separator = path.sep
const delimiter = path.delimiter

console.log(`
  - Ruta del archivo actual: ${filePath}
- Ruta del directorio actual: ${folderPath}
- Ruta compuesta: ${joinPath}
- Nombre del archivo: ${basename}
- Extensión del archivo: ${extname}
- Ruta absoluta resuelta: ${resolvedPath}
- Ruta normalizada: ${normalizedPath}
- Separador de rutas: ${separator}
- Separador de variables PATH: ${delimiter}
`)

// Obtienes un objeto con información sobre la ruta.
const parsedPath = path.parse(filePath)
console.log('- Ruta parseada:', parsedPath)

// Obtienes una ruta formateada a partir de un objeto de tipo path.
const formattedPath = path.format(parsedPath)
console.log('- Ruta formateada:', formattedPath)
