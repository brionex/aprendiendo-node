import { createRequire } from 'node:module'

export function getTime() {
  return new Date().toLocaleTimeString('es-EC', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

export function readJSON(path) {
  const require = createRequire(import.meta.url)
  return require(path)
}
