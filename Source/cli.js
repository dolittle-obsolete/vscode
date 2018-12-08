import globals from './globals';

const spawn = require('child_process').spawn;
const dolittleExePath = require.resolve('@dolittle/cli');
/**
 *
 *
 * @export
 * @param {string[]} command 
 * @param {string[]} commandArgs
 * @param {import('child_process').SpawnOptions} options
 * @returns {import('child_process').ChildProcess}
 */
export function spawnDolittleCliCommand(command, commandArgs, options) {
    const extNameLen = require('path').extname(dolittleExePath).length;
    let execPath = dolittleExePath.slice(0, -extNameLen) + '-'+ command.join('-') + '.js';
    let dolittle = spawn('node', [execPath, ...commandArgs], options);
    
    globals.dolittleCliOutputChannel.appendLine(['$ dolittle', ...command, ...commandArgs].join(' '));
    dolittle.stdout.on('data', (data) => {
        globals.dolittleCliOutputChannel.appendLine(data.toString());
    });

    dolittle.stderr.on('data', (data) => {
        globals.dolittleCliOutputChannel.appendLine(`Error: ${data.toString()}`);
    });

    return dolittle;
}