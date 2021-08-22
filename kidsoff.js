#!/usr/bin/env node
const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .commandDir('cmd')
  .demandCommand()
  .help()
  .argv.argv