const spawn = require('child_process').spawn;
const executablePath = require.resolve('./Build/dotnet');

let dotnetProject = {};

dotnetProject.build = (root, fileDir) => {
    console.log('Building dotnet project');
    let dotnet = spawn('node', [executablePath, `/root:${root}`, '/type:build', '/arguments:restore'], {cwd: fileDir});
    dotnet.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    dotnet.stderr.on('data', (data) => {
        console.log(data.toString());
    });
    return dotnet;
};

module.exports = dotnetProject;