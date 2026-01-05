import { httpServer } from './1-http-server.js'
import { routing } from './2-routing.js'
import { webServer } from './3-web-server.js'

const arg = process.argv[2]

if (arg === '1') httpServer()
else if (arg === '2') routing()
else if (arg === '3') webServer()
else httpServer()
