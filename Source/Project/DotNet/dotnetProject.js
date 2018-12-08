import globals from '../../globals';

const vscode = globals.vscode;

const spawn = require('child_process').spawn;
const executablePath = require.resolve('./Build/dotnet');

/**
 * Add standard listeners to standard output and error
 * @param {import('child_process').ChildProcess} dotnet
 */
function addListenersToChildProcess(dotnet) {
    
    dotnet.stdout.on('data', (data) => {
        globals.dolittleProjectOutputChannel.appendLine(data.toString());
    });

    dotnet.stderr.on('data', (data) => {
        globals.dolittleProjectOutputChannel.appendLine(data.toString());
    });
}
/**
 * Performs a restore task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function restore(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Restoring dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            `/root:${root}`, 
            '/type:build', 
            '/arguments:restore'
        ], 
        {cwd: fileDir});
    addListenersToChildProcess(dotnet);
    return dotnet;
};
/**
 * Performs a build task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function build(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Building dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            `/root:${root}`, 
            '/type:build', 
            '/arguments:(build --no-restore)'
        ], 
        {cwd: fileDir});
    addListenersToChildProcess(dotnet);
    return dotnet;
};
/**
 * Performs a build current task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function buildCurrent(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Building current dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            '/type:build', 
            '/ignoreRewriteFolder',
            `/root:${root}`,
            '/arguments:(build --no-dependencies --no-restore)'
        ], 
        {cwd: fileDir});
    addListenersToChildProcess(dotnet);
    return dotnet;
};
/**
 * Performs a test task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function test(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Running tests for dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            '/type:test', 
            `/root:${root}`,
            '/arguments:(test --no-build --no-restore)'
        ], 
        {cwd: fileDir});
    addListenersToChildProcess(dotnet);
    return dotnet;
};
/**
 * Performs a test debug task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function testDebug(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Debugging tests for dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            '/type:test', 
            `/root:${root}`,
            '/forTests',
            '/arguments:(test --no-build --no-restore)'
        ], 
        {cwd: fileDir, env: {VSTEST_HOST_DEBUG: "1"}});
    addListenersToChildProcess(dotnet);
    return dotnet;
};
/**
 * Performs a test rerun task
 * @param {string} root Root of the workspace
 * @param {string} fileDir The directory path of the currently highlighted file
 * @returns {import('child_process').ChildProcess} The spawned dotnet child process
 * @memberof dotnet
 */
export function rerunTest(root, fileDir) {
    globals.dolittleProjectOutputChannel.appendLine('Reruns tests for dotnet project:');
    let dotnet = spawn(
        'node', 
        [ executablePath, 
            '/type:test', 
            `/root:${root}`,
            '/arguments:(test --no-build --no-restore)',
            '/rerun'
        ], 
        {cwd: fileDir});
    addListenersToChildProcess(dotnet);
    return dotnet;
};