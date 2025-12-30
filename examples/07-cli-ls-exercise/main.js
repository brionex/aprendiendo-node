/*
=====================================================
EJERCICIO: Simular el comando "ls" usando Node.js
=====================================================

OBJETIVO
--------
Crear un script que liste el contenido de un directorio
mostrando archivos y carpetas con información básica,
simulando el comportamiento del comando `ls`.

REQUISITOS
----------
1. Obtener una ruta del sistema de archivos.
2. Verificar que la ruta exista y sea un directorio.
3. Leer el contenido del directorio.
4. Clasificar el contenido en:
   - Carpetas
   - Archivos
5. Obtener para cada elemento:
   - Nombre
   - Tamaño (solo para archivos)
   - Fecha de creación
   - Fecha de modificación
6. Ordenar alfabéticamente por nombre.
7. Mostrar primero las carpetas y luego los archivos.
8. Formatear la salida en columnas alineadas.

SALIDA ESPERADA (EJEMPLO)
------------------------
📁  src       -        12/06/2025 10:32:15  14/06/2025 09:10:02
📄  index     2.45 KB  10/06/2025 08:12:01  14/06/2025 11:20:45
📄  package   1.10 KB  09/06/2025 22:01:55  13/06/2025 18:44:30

NOTAS
-----
- Los nombres largos deben truncarse y mostrar "..."
- Las fechas deben mostrarse en formato local y 24 horas
- El tamaño debe mostrarse en KB
=====================================================
*/

import path from 'node:path'
import fs from 'node:fs/promises'

const MAX_NAME_LENGTH = 15
const LOCALE = 'es-EC'

const targetPath = path.resolve(process.cwd(), '..', '..', '..')

console.log('Ejecutando el ejemplo "ls" con la ruta:\n', `- ${targetPath}\n`)

// Verificar ruta
const pathInfo = await fs.stat(targetPath).catch(() => null)
if (!pathInfo?.isDirectory()) process.exit(1)

// Leer directorio con tipos
const dirents = await fs
  .readdir(targetPath, { withFileTypes: true })
  .catch(() => null)

if (!dirents) process.exit(1)

// Utilidades
const formatDateTime = (date) =>
  new Date(date).toLocaleString(LOCALE, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })

const byName = (a, b) =>
  a.name.localeCompare(b.name, LOCALE, { sensitivity: 'base' })

const folders = []
const files = []

// Procesar entradas
await Promise.all(
  dirents.map(async (dirent) => {
    const fullPath = path.join(targetPath, dirent.name)
    const info = await fs.stat(fullPath)
    const parsed = path.parse(dirent.name)

    const baseItem = {
      name: parsed.name,
      created: formatDateTime(info.birthtime),
      modified: formatDateTime(info.mtime)
    }

    if (dirent.isDirectory()) {
      folders.push({
        ...baseItem,
        icon: '📁',
        size: '-'
      })
    }

    if (dirent.isFile()) {
      files.push({
        ...baseItem,
        icon: '📄',
        size: `${(info.size / 1024).toFixed(2)} KB`
      })
    }
  })
)

// Ordenar y unir
const items = [...folders.sort(byName), ...files.sort(byName)]

// Layout
const maxSize = Math.max(...items.map((i) => i.size.length))

console.log(
  'Nombre'.padEnd(MAX_NAME_LENGTH + 5),
  'Tamaño'.padEnd(maxSize + 1),
  'Creación'.padEnd(21),
  'Modificación\n'
)

// Output
for (const item of items) {
  const name =
    item.name.length > MAX_NAME_LENGTH
      ? item.name.slice(0, MAX_NAME_LENGTH - 3) + '...'
      : item.name

  console.log(
    item.icon,
    '',
    name.padEnd(MAX_NAME_LENGTH),
    '',
    item.size.padEnd(maxSize),
    '',
    item.created,
    '',
    item.modified
  )
}
