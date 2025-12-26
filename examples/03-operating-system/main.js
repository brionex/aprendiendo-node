// El módulo `os` proporciona información del sistema operativo
// sobre el entorno en el que se está ejecutando Node.js.
//
// Es útil para:
// - Diagnóstico
// - Logs
// - Herramientas CLI
// - Validaciones según el sistema

import os from 'node:os'

console.log(`
- Sistema operativo: ${os.type()}
- Plataforma: ${os.platform()}
- Arquitectura: ${os.arch()}
- Versión del kernel / sistema: ${os.release()}
- Detalles de la versión: ${os.version()}

- Número de CPUs: ${os.cpus().length}

- Memoria total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
- Memoria libre: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB

- Tiempo de actividad del sistema: ${(os.uptime() / 60 / 60).toFixed(2)} horas

- Usuario actual: ${os.userInfo().username}
- Directorio principal (home): ${os.homedir()}
- Directorio temporal: ${os.tmpdir()}

- Endianness de la CPU: ${os.endianness()}
- Prioridad del proceso actual: ${os.getPriority()}

- Carga promedio (1, 5 y 15 min): ${os.loadavg()}
- Secuencia de fin de línea del SO (EOL): ${JSON.stringify(os.EOL)}
`)
