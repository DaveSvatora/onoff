const password = require('@inquirer/password');
const guest = require("../router/guest")
const chalk = require('chalk');

exports.command = chalk.bold(chalk.magenta('interactive'))
exports.aliases = 'i'
exports.describe = `Examples:\n${chalk.green('onoff interactive')}\n... is the same as ...\n${chalk.green('onoff i')}`

exports.builder = {}

exports.handler = async () => {
  const pass = await password({
    message: chalk.magenta('Router Password'),
    mask: '*'
  });
  return await guest.turnoff(pass, true);
}