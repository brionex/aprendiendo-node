import path from 'path'
import { fileURLToPath } from 'url'

// Obtiene la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url)
console.log('Archivo actual:', __filename)

// Obtiene la ruta del directorio del archivo
const __dirname = path.dirname(__filename)
console.log('Directorio actual:', __dirname)

// Combina strings para formar una ruta.
const joinPath = path.join(__dirname, 'assets', 'image.png')
console.log('Ruta combinada:', joinPath)

// Obtiene el nombre y extensión de un archivo
console.log('Nombre del archivo:', path.basename(__filename))
console.log('Extensión del archivo:', path.extname(__filename))

// Resuelve una ruta absoluta
const resolvedPath = path.resolve('assets', 'image.png')
console.log('Ruta absoluta resuelta:', resolvedPath)

// --- Ejemplo 5: Normalizar una ruta desordenada ---
const messyPath = '/users/john/../jane/./documents//file.txt'
const normalizedPath = path.normalize(messyPath) // Limpia la ruta
console.log('Ruta normalizada:', normalizedPath)

// Parsea una ruta a un objeto
const parsedPath = path.parse(__filename)
console.log('Ruta parseada:', parsedPath)

// Formatea un objeto a una ruta
const formattedPath = path.format(parsedPath)
console.log('Ruta reconstruida:', formattedPath)

// Devuelve el separador del sistema
console.log('Separador de rutas:', path.sep)
console.log('Separador de variables PATH:', path.delimiter)
