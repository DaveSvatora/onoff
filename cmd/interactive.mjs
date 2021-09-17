import password from '@inquirer/password';
import { turnoff } from "../router/guest.mjs";
import chalk from 'chalk';
const { green } = chalk;

export const command = 'interactive'
export const aliases = 'i'
export const describe = `${green('onoff interactive')}`

export const builder = {}

export async function handler() {
  const pass = await password({
    message: 'Router Password',
    mask: '*'
  });
  return await turnoff(pass);
}