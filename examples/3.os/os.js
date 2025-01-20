import os from 'node:os'

// Sistema Operativo
console.log(`Sistema Operativo: ${os.type()}`)

// Plataforma del sistema operativo
console.log(`Plataforma: ${os.platform()}`)

// Arquitectura de la CPU
console.log(`Arquitectura: ${os.arch()}`)

// Versión del sistema operativo
console.log(`Versión del Sistema Operativo: ${os.release()}`)

// Versión detallada del sistema operativo (si está disponible)
console.log(`Detalles de la Versión: ${os.version()}`)

// Número de CPUs disponibles
console.log(`Número de CPUs: ${os.cpus().length}`)

// Información de los CPUs (núcleos, modelo, velocidad)
console.log('CPU(s):', os.cpus())

// Memoria total (en GB)
console.log(
  `Memoria Total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`
)

// Memoria libre (en GB)
console.log(
  `Memoria Libre: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`
)

// Tiempo de actividad del sistema (en horas)
console.log(
  `Tiempo de Actividad del Sistema: ${(os.uptime() / 60 / 60).toFixed(2)} horas`
)

// Directorio principal del usuario actual
console.log(`Directorio Principal: ${os.homedir()}`)

// Directorio temporal del sistema
console.log(`Directorio Temporal: ${os.tmpdir()}`)

// Información del usuario actual (nombre, shell, etc.)
console.log('Información del Usuario:', os.userInfo())

// Interfaces de red (detalles de red e IPs)
console.log('Interfaces de Red:', os.networkInterfaces())

// Endianness de la CPU
console.log(`Endianness de la CPU: ${os.endianness()}`)

// Prioridad del proceso actual
console.log(`Prioridad del proceso actual: ${os.getPriority()}`)

// Cambiar la prioridad del proceso actual (por ejemplo, a 10)
os.setPriority(10)
console.log(`Nueva prioridad del proceso: ${os.getPriority()}`)

// Carga promedio del sistema (Linux/Unix, en 1, 5 y 15 minutos)
if (os.platform() !== 'win32') {
  console.log(`Carga Promedio: ${os.loadavg()}`)
} else {
  console.log('Carga Promedio: No disponible en Windows')
}

// Señales de fin de línea (dependen del sistema)
console.log(`Señales de Fin de Línea: ${JSON.stringify(os.EOL)}`)
