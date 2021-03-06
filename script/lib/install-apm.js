'use strict'

const childProcess = require('child_process')
const path = require('path')

const CONFIG = require('../config')

module.exports = function () {
  console.log('Installing spm')
  childProcess.execFileSync(
    CONFIG.getNpmBinPath(),
    ['--global-style', '--loglevel=error', 'install'],
    {env: process.env, cwd: CONFIG.apmRootPath}
  )
}
