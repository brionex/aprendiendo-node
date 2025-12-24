// OBJETO GLOBAL

// La variable globalThis proporciona una forma estándar de acceder al objeto global,
// independientemente del entorno en el que se esté ejecutando el código.

// - En Node.js, globalThis se refiere al objeto global de Node "global".
// - En navegadores, globalThis se refiere al objeto "window".

const entono = globalThis.window ? 'Navegador' : 'NodeJs'

console.log(`Entorno: ${entono}`)
console.log('Contenido de globalThis:', globalThis)
