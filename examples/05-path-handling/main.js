import path from 'path'
import { fileURLToPath } from 'url'

// Ruta del archivo actual
const filePath = fileURLToPath(import.meta.url)

// Ruta del directorio actual
const folderPath = path.dirname(filePath)

// Unir rutas
const joinPath = path.join('assets', 'images', 'photo.png')

// Nombre y extensión del archivo
const basename = path.basename(filePath)
const extname = path.extname(filePath)

// Ruta absoluta y normalizada
const resolvedPath = path.resolve(joinPath)
const normalizedPath = path.normalize(
  '/users\\john/../jane/./documents//file.txt'
)

// Separadores del sistema
const separator = path.sep
const delimiter = path.delimiter

// Mostrar resultados
console.log(`
- Archivo actual: ${filePath}
- Directorio: ${folderPath}
- Ruta unida: ${joinPath}
- Nombre: ${basename}
- Extensión: ${extname}
- Ruta absoluta: ${resolvedPath}
- Ruta normalizada: ${normalizedPath}
- Separador: ${separator}
- Delimitador PATH: ${delimiter}
`)

// Parsear y formatear rutas
const parsedPath = path.parse(filePath)
console.log('- Parseada:', parsedPath)

const formattedPath = path.format(parsedPath)
console.log('- Formateada:', formattedPath)
