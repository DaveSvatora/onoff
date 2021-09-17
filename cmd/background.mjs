import { turnoff } from "../router/guest.mjs";
import chalk from 'chalk';
const { green, italic, red } = chalk;

export const command = 'background [options]'
export const aliases = 'b'
export const describe = `${green('onoff background --password ')}${italic(red('<password>'))}`

export function builder(yargs) {
    yargs.option("password", {
        alias: "p",
        describe: "password for admin login to XR500 router",
        type: "string",
        demandOption: true
    })
}

export async function handler(argv) {
    return await turnoff(argv.password)
}
