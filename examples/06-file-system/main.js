import { fsSync } from './1-fs-sync.js'
import { fsAsync } from './2-fs-async.js'
import { stat } from './3-stat.js'

const arg = process.argv[2]

if (arg === '1') fsSync()
else if (arg === '2') fsAsync()
else if (arg === '3') stat()
else fsSync()
