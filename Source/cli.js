import globals from './globals';

const spawn = require('child_process').spawn;
const dolittleExePath = require.resolve('@dolittle/cli');


/**
 *
 *
 * @param {string[]} command
 */
function getExecutablePath(command) {
    const extNameLen = require('path').extname(dolittleExePath).length;
    return dolittleExePath.slice(0, -extNameLen) + '-'+ command.join('-') + '.js';
}
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
    const execPath = getExecutablePath(command);
    let dolittle = spawn('node', [execPath, ...commandArgs], options);
    
    globals.dolittleCliOutputChannel.appendLine(['$ dolittle', ...command, ...commandArgs].join(' '));
    dolittle.stdout.on('data', (data) => {
        globals.dolittleCliOutputChannel.append(data.toString());
    });

    dolittle.stderr.on('data', (data) => {
        globals.dolittleCliOutputChannel.append(`Error: ${data.toString()}`);
    });

    return dolittle;
}
/**
 *
 *
 * @export
 * @param {string[]} command 
 * @param {string[]} commandArgs
 * @param {import('child_process').SpawnOptions} options
 */
export function runDolittleCliCommandThroughIntegratedTerminal(command, commandArgs, options) {
    const vscode = globals.vscode;
    const terminalName = 'Dolittle CLI';
    const execPath = getExecutablePath(command);
    let terminal = vscode.window.terminals.filter(term => term.name === terminalName).length > 0? 
                        vscode.window.terminals[0]
                        : vscode.window.createTerminal({name: terminalName, cwd: options.cwd});
    terminal.show(false);
    terminal.sendText(`cd ${options.cwd} && node ${execPath} ${commandArgs.join(' ')}`);
    
}