/* eslint-disable */

const { sync: globSync } = require('glob')
;(async () => {
  const matches = globSync('test/**/*.mjs')
  for (const match of matches) {
    await import('../' + match)
  }
  run()
})()
