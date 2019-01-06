#!/usr/local/bin/node

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const resolveProject = require('./resolveProject');
const spawn = require('child_process').spawn

// Args:
// /root:RootDir / Place to put output files
// /t:Type of project running (free-text)
// /r - rerun
// /specsFor

let rerun = false;
let type = "default";
let rootDir = "";
let forTests = false;
let ignoreRewriteFolder = false;
let dotnetArguments = [];

process.argv.forEach((item, index) => {
    if (index == 0) return;

    if (item.indexOf("/root:") == 0) {
        rootDir = item.substr(6);
    }
    if (item.indexOf("/type:") == 0) {
        type = item.substr(6);
    }
    if (item.indexOf("/rerun") == 0) {
        rerun = true;
    }
    if (item.indexOf("/ignoreRewriteFolder") == 0) {
        ignoreRewriteFolder = true;
    }
    if (item.indexOf("/forTests") == 0) {
        forTests = true;
    }
    if (item.indexOf("/arguments:") == 0) {
        let args = item.substr("/arguments:".length);
        if( args.indexOf("(") == 0 ) args = args.substr(1, args.length - 2);
        dotnetArguments = args.split(" ");
    }
});

if (rootDir.length == 0) {
    process.exit(1);
}

let project = resolveProject(rootDir, type, ignoreRewriteFolder, rerun, forTests);
dotnetArguments.push(project);

spawn("dotnet", dotnetArguments, { stdio: "inherit", stderr: "inherit" });
