const password = require('@inquirer/password');
const onoff = require("../router/onoff")
const chalk = require('chalk');
const ora = require('ora');
const spinner = new ora('Toggling Guest Network On / Off');
spinner.spinner = 'pong'

exports.command = chalk.bold(chalk.magenta('interactive'))
exports.aliases = 'i'
exports.describe = `Examples:\n${chalk.green('kidsoff interactive')}\n... is the same as ...\n${chalk.green('kidsoff i')}`

exports.builder = {}

exports.handler = async () => {
  const pass = await password({
    message: chalk.magenta('Router Password'),
    mask: '*'
  });
  spinner.start()
  let resp = await onoff.turnoff(pass);
  return resp.status = 200 ? spinner.succeed("Complete: wifi may be interrupted briefly") : spinner.fail(resp.error)
}