// --------------------------------------------
// OBJETO GLOBAL Y ENTORNO DE EJECUCIÓN
// --------------------------------------------
// `globalThis` es una referencia estándar al objeto global del entorno.
// Funciona tanto en navegadores como en Node.js.
//
// - Navegador → globalThis === window
// - Node.js    → globalThis === global
//
// Evita depender de nombres específicos del entorno.

const entorno = typeof window !== 'undefined' ? 'Navegador' : 'Node.js'
console.log(`Entorno: ${entorno}`)
console.log('globalThis:', globalThis)

// --------------------------------------------
// PROCESS
// --------------------------------------------
// `process` proporciona información y control sobre el proceso de Node.js.

console.log('\nPID:', process.pid) // ID del proceso
console.log('Node version:', process.version)
console.log('Plataforma:', process.platform)
console.log('Directorio de trabajo actual (cwd):', process.cwd())

// --------------------------------------------
// import.meta (ESM)
// --------------------------------------------
// `import.meta` proporciona información sobre el módulo actual.

console.log('Archivo actual (URL):', import.meta.url)
console.log('Archivo actual (path):', import.meta.filename)
console.log('Directorio del archivo actual:', import.meta.dirname)

// --------------------------------------------
// VARIABLES DE ENTORNO
// --------------------------------------------
// `process.env` contiene las variables de entorno del sistema.
// Siempre son strings.

process.env.APP_ENV = 'development'

console.log('\nAPP_ENV:', process.env.APP_ENV)
console.log('PATH:', process.env.PATH) // Directorio de búsqueda de ejecutables
