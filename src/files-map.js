import path from 'node:path'

export const filesMap = {
  'global-this': path.normalize('examples/1.global-this/global-this.js'),
  cjs: path.normalize('examples/2.module-system/main-cjs.cjs'),
  mjs: path.normalize('examples/2.module-system/main-mjs.js'),
  os: path.normalize('examples/3.os/os.js'),
  'fs-stat': path.normalize('examples/4.fs/stat.js'),
  'fs-sync': path.normalize('examples/4.fs/sync.js'),
  'fs-async': path.normalize('examples/4.fs/async.js'),
  'async-callback': path.normalize('examples/5.async-code/async-callback.js'),
  'async-sequential': path.normalize(
    'examples/5.async-code/async-sequential.js'
  ),
  'async-parallel': path.normalize('examples/5.async-code/async-parallel.js'),
  path: path.normalize('examples/6.path/path.js'),
  'exercise-ls': path.normalize('examples/7.ls/ls.js')
}
