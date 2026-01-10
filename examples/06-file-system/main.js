const arg = process.argv[2] ?? '1'

const files = {
  1: './1-fs-sync.js',
  2: './2-fs-async.js',
  3: './3-stat.js'
}

await import(files[arg])
