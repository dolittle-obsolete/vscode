/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const path = require("path");
const fs = require("fs");

module.exports = function (rootDir, type, ignoreRewriteFolder, rerun, forTests) {
    ignoreRewriteFolder = ignoreRewriteFolder || false;
    type = type || "build";
    rerun = rerun || false;
    
    let currentDir = process.cwd();


    let specsFor = false;
    let settings = {
    };

    if (type == "build" && forTests) {
        currentDir = currentDir.replace("Source", "Specifications");
    } else {
        if (!ignoreRewriteFolder) {
            if (type == "test" && currentDir.indexOf("Source") >= 0) specsFor = true;
            if (type == "build" && currentDir.indexOf("Specifications") >= 0) currentDir = currentDir.replace("Specifications", "Source");
        }
    }

    let settingsFile = path.join(rootDir, ".buildsettings");
    if (fs.existsSync(settingsFile)) {
        let settinsgAsJson = fs.readFileSync(settingsFile, "utf8");
        settings = JSON.parse(settinsgAsJson);
    }

    let directoryToRun = "";

    if (rerun) {
        directoryToRun = settings[type].workingDir;
    } else {
        let found = false;
        while (currentDir.length > 0) {
            try {
                let content = fs.readdirSync(currentDir);
                let files = content.filter(function (elm) { return elm.match(/.*\.(csproj|sln)/ig); });
                if (files.length == 1) {
                    settings[type] = {
                        workingDir: currentDir
                    };
                    found = true;

                    break;
                }
            } catch (ex) { }

            currentDir = currentDir.substr(0, currentDir.lastIndexOf(path.sep));
        }

        if (found) directoryToRun = currentDir;
        else directoryToRun = settings[type].workingDir;
    }

    fs.writeFileSync(settingsFile, JSON.stringify(settings), "utf8");

    if (specsFor == true) {
        directoryToRun = directoryToRun.replace("Source", "Specifications");
    }

    directoryToRun = directoryToRun.split(" ").join("\ ");

    return directoryToRun;
};


