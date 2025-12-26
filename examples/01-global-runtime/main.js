// OBJETO GLOBAL

// globalThis es una referencia estándar al objeto global del entorno de ejecución.
// Permite acceder al objeto global sin depender de si el código se ejecuta
// en un navegador o en Node.js.
//
// - En navegadores, globalThis apunta al objeto global `window`.
// - En Node.js, globalThis apunta al objeto global `global`.
//
// Esto evita usar condiciones o nombres específicos del entorno.

const entorno = typeof window !== 'undefined' ? 'Navegador' : 'Node.js'

console.log(`Entorno: ${entorno}`)
console.log('Contenido de globalThis:', globalThis)
