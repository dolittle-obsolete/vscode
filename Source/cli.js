const spawn = require('child_process').spawn;
const vscode = require('vscode');
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
    console.log([execPath, ...commandArgs]);
    let dolittle = spawn('node', [execPath, ...commandArgs], options);
    
    dolittle.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    dolittle.stderr.on('data', (data) => {
        console.log(data.toString());
        vscode.window.showErrorMessage(data.toString());
    });

    return dolittle;
}