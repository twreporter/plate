const buildBundle = require('@twreporter/keystone-plugin-client').buildBundle
const path = require('path')

const bundleFilename = 'keystone-plugin.bundle.js'

let isFinished = false
let timeout = 90 * 1000 // ms
let start = Date.now()

const output = {
  path: path.resolve(__dirname, './public'),
  filename: bundleFilename,
}

function wait() {
  const isTimeout = Date.now() - start > timeout
  if (isTimeout) {
    throw new Error('Build js bundle timeout.')
  } else if (!isFinished) {
    setTimeout(wait, 500)
  }
}

wait()

buildBundle({ output }, 'normal')
  .then(() => {
    isFinished = true
    console.log(`${bundleFilename} is prepared.`)
  })
  .catch(() => {
    process.exit(1)
  })