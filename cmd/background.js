const onoff = require("../router/onoff")
const chalk = require('chalk');

exports.command = chalk.bold(chalk.magenta('background [options]'))
exports.aliases = 'b'
exports.describe = `Examples:
    ${chalk.green('kidsoff background --password ')}${chalk.italic(chalk.red('<password>'))}
    ... is the same as ...
    ${chalk.green('kidsoff b -p ')}${chalk.italic(chalk.red('<password>'))}`

exports.builder = (yargs) => {
    yargs.option(chalk.red("password"), {
        alias: chalk.red("p"),
        describe: chalk.yellow("password for admin login to XR500 router"),
        type: "string",
        demandOption: true
    })
}

exports.handler = async (argv) => {
    return await onoff.turnoff(argv.password)
}
