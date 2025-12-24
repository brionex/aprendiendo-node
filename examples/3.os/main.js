import os from 'node:os'

console.log(`
  Sistema operativo: ${os.type()}
  Plataforma: ${os.platform()}
  Arquitectura: ${os.arch()}
  Version del sistema: ${os.release()}
  Detalles de la version: ${os.version()}
  Numero de CPUs: ${os.cpus().length}
  Memoria total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
  Memoria libre: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB
  Tiempo de actividad: ${(os.uptime() / 60 / 60).toFixed(2)} Horas
  Nombre de usuario: ${os.userInfo().username}
  Directorio principal: ${os.homedir()}
  Directorio temporal: ${os.tmpdir()}
  Endianness de la CPU: ${os.endianness()}
  Prioridad del proceso actual: ${os.getPriority()}
  Carga promedio: ${os.loadavg()}
  Señales de fin de linea: ${JSON.stringify(os.EOL)}
`)

// Información de los CPUs (núcleos, modelo, velocidad, etc)
// console.log('CPU(s):', os.cpus())

// Interfaces de red (detalles de red e IPs)
// console.log('Interfaces de Red:', os.networkInterfaces())
