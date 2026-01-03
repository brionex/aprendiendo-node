import { httpServer } from './01-http-server.js'
import { routing } from './02-routing.js'
import { webServer } from './03-web-server.js'

const arg = process.argv[2]

if (arg === '1') httpServer()
else if (arg === '2') routing()
else if (arg === '3') webServer()
else httpServer()
