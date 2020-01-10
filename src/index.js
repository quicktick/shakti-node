import os from 'os'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import shell from 'shelljs'
import uuid from 'uuid/v4'

const RESULT_DIVIDER = `78543165645`

const defaultOptions = {
  commandToExecute: './node_modules/@kparc/k/bin/k',
  baseDirectory: os.tmpdir(),
  debug: false,
}

const log = (string, userOptions) => {
  if (userOptions.debug) {
    console.log(string)
  }
}

const codeForJsonParse = kCode => `${kCode}\n\` 1: "${RESULT_DIVIDER}"\n\` 1: \`j(result)\n\\\\`

const writeKFile = (kCode, userOptions) => {
  const testFile = path.resolve(path.join(userOptions.baseDirectory, `${uuid()}.k`))
  fs.writeFileSync(testFile, kCode)
  return testFile
}

const parseKOutput = kOutput => {
  const jsonString = _.chain(kOutput)
    .split(RESULT_DIVIDER)
    .last()
    .value()
  return JSON.parse(jsonString)
}

export const runShaktiCommand = (kCode, userOptions = {}) => {
  const options = { ...defaultOptions, ...userOptions }
  const newKFile = writeKFile(kCode, options)
  const command = `(${options.commandToExecute} ${newKFile})`
  log(`command: ${command}`, userOptions)
  const output = shell.exec(command, { silent: true })
  fs.unlinkSync(newKFile)
  return output
}

export const runShakti = (kCode, userOptions = {}) => {
  const output = runShaktiCommand(codeForJsonParse(kCode), userOptions)
  if (output.code !== 0) {
    throw new Error(`shakti error: ${output.stderr}`)
  }
  return parseKOutput(output.stdout)
}

export const runShaktiFromFile = (kFilePath, userOptions = {}) => {
  const kCode = fs.readFileSync(kFilePath)
  return runShakti(kCode, userOptions)
}
