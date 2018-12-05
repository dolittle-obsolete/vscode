'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readJsonFromUriSync = readJsonFromUriSync;
exports.readJsonFromFileSync = readJsonFromFileSync;
exports.fileExistsSync = fileExistsSync;
exports.getDirectoryPath = getDirectoryPath;
exports.getArtifactFolderPath = getArtifactFolderPath;
exports.getEventsFolderPaths = getEventsFolderPaths;

var _vscode = require('vscode');

var fs = require('fs-extra'); /*---------------------------------------------------------------------------------------------
                               *  Copyright (c) Dolittle. All rights reserved.
                               *  Licensed under the MIT License. See LICENSE in the project root for license information.
                               *--------------------------------------------------------------------------------------------*/

var path = require('path');

/**
 * Reads json object from file given by uri
 *
 * @export
 * @param {Uri} uri
 * @returns {any}
 */
function readJsonFromUriSync(uri) {
    if (uri.scheme !== 'file') throw uri.path + ' is not a file';
    return fs.readJsonSync(uri.path);
}

function readJsonFromFileSync(source) {
    if (!fs.statSync(source).isFile) throw source + ' is not a file';
    return fs.readJsonSync(source);
}

function fileExistsSync(source) {
    return fs.existsSync(source);
}

/**
 * Gets the directory path of the source
 *
 * @export
 * @param {string} source
 * @returns
 */
function getDirectoryPath(source) {
    if (fs.statSync(source).isFile()) return path.dirname(source);
    return source;
}

/**
 * Gets a folder containing artifacts from a given root folder
 * @export
 * @param {string} rootFolder
 * @param {string} folderNameIgnoringCase
 * @returns {string[]}
 */
function getArtifactFolderPath(rootFolder, folderNameIgnoringCase) {
    if (!fs.statSync(rootFolder).isDirectory()) throw 'rootFolder isn\'t a directory';

    return fs.readdirSync(rootFolder).filter(function (f) {
        var folderPath = path.join(rootFolder, f);
        return fs.statSync(folderPath).isDirectory() && f.toLowerCase() === folderNameIgnoringCase.toLowerCase();
    }).map(function (item) {
        return path.join(rootFolder, item);
    });
}

/**
 * Gets a folder containing artifacts from a given root folder
 * @export
 * @param {string} rootFolder
 * @param {string} folderNameIgnoringCase
 * @returns
 */
function getEventsFolderPaths(rootFolder, folderNameIgnoringCase) {
    if (!fs.statSync(rootFolder).isDirectory()) throw 'rootFolder isn\'t a directory';

    var regex = new RegExp('' + folderNameIgnoringCase, 'i');
    return fs.readdirSync(rootFolder).filter(function (f) {
        var folderPath = path.join(rootFolder, f);
        return fs.statSync(folderPath).isDirectory() && regex.test(f);
    }).map(function (item) {
        return path.join(rootFolder, item);
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInJlYWRKc29uRnJvbVVyaVN5bmMiLCJyZWFkSnNvbkZyb21GaWxlU3luYyIsImZpbGVFeGlzdHNTeW5jIiwiZ2V0RGlyZWN0b3J5UGF0aCIsImdldEFydGlmYWN0Rm9sZGVyUGF0aCIsImdldEV2ZW50c0ZvbGRlclBhdGhzIiwiZnMiLCJyZXF1aXJlIiwicGF0aCIsInVyaSIsInNjaGVtZSIsInJlYWRKc29uU3luYyIsInNvdXJjZSIsInN0YXRTeW5jIiwiaXNGaWxlIiwiZXhpc3RzU3luYyIsImRpcm5hbWUiLCJyb290Rm9sZGVyIiwiZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZSIsImlzRGlyZWN0b3J5IiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmb2xkZXJQYXRoIiwiam9pbiIsImYiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsIml0ZW0iLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBaUJnQkEsbUIsR0FBQUEsbUI7UUFLQUMsb0IsR0FBQUEsb0I7UUFLQUMsYyxHQUFBQSxjO1FBV0FDLGdCLEdBQUFBLGdCO1FBWUFDLHFCLEdBQUFBLHFCO1FBaUJBQyxvQixHQUFBQSxvQjs7QUEvRGhCOztBQUNBLElBQU1DLEtBQUtDLFFBQVEsVUFBUixDQUFYLEMsQ0FMQTs7Ozs7QUFNQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjs7QUFJQzs7Ozs7OztBQU9NLFNBQVNQLG1CQUFULENBQTZCUyxHQUE3QixFQUFrQztBQUNyQyxRQUFJQSxJQUFJQyxNQUFKLEtBQWUsTUFBbkIsRUFBMkIsTUFBU0QsSUFBSUQsSUFBYjtBQUMzQixXQUFPRixHQUFHSyxZQUFILENBQWdCRixJQUFJRCxJQUFwQixDQUFQO0FBQ0g7O0FBRU0sU0FBU1Asb0JBQVQsQ0FBOEJXLE1BQTlCLEVBQXNDO0FBQ3pDLFFBQUksQ0FBQ04sR0FBR08sUUFBSCxDQUFZRCxNQUFaLEVBQW9CRSxNQUF6QixFQUFpQyxNQUFTRixNQUFUO0FBQ2pDLFdBQU9OLEdBQUdLLFlBQUgsQ0FBZ0JDLE1BQWhCLENBQVA7QUFDSDs7QUFFTSxTQUFTVixjQUFULENBQXdCVSxNQUF4QixFQUFnQztBQUNuQyxXQUFPTixHQUFHUyxVQUFILENBQWNILE1BQWQsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7O0FBT08sU0FBU1QsZ0JBQVQsQ0FBMEJTLE1BQTFCLEVBQWtDO0FBQ3JDLFFBQUlOLEdBQUdPLFFBQUgsQ0FBWUQsTUFBWixFQUFvQkUsTUFBcEIsRUFBSixFQUFrQyxPQUFPTixLQUFLUSxPQUFMLENBQWFKLE1BQWIsQ0FBUDtBQUNsQyxXQUFPQSxNQUFQO0FBQ0g7O0FBRUE7Ozs7Ozs7QUFPTSxTQUFTUixxQkFBVCxDQUErQmEsVUFBL0IsRUFBMkNDLHNCQUEzQyxFQUFtRTtBQUN0RSxRQUFJLENBQUVaLEdBQUdPLFFBQUgsQ0FBWUksVUFBWixFQUF3QkUsV0FBeEIsRUFBTixFQUNJLE1BQU0sK0JBQU47O0FBRUosV0FBT2IsR0FBR2MsV0FBSCxDQUFlSCxVQUFmLEVBQTJCSSxNQUEzQixDQUFrQyxhQUFLO0FBQzFDLFlBQU1DLGFBQWFkLEtBQUtlLElBQUwsQ0FBVU4sVUFBVixFQUFzQk8sQ0FBdEIsQ0FBbkI7QUFDQSxlQUFPbEIsR0FBR08sUUFBSCxDQUFZUyxVQUFaLEVBQXdCSCxXQUF4QixNQUF5Q0ssRUFBRUMsV0FBRixPQUFvQlAsdUJBQXVCTyxXQUF2QixFQUFwRTtBQUNILEtBSE0sRUFHSkMsR0FISSxDQUdBO0FBQUEsZUFBUWxCLEtBQUtlLElBQUwsQ0FBVU4sVUFBVixFQUFzQlUsSUFBdEIsQ0FBUjtBQUFBLEtBSEEsQ0FBUDtBQUlIOztBQUVEOzs7Ozs7O0FBT08sU0FBU3RCLG9CQUFULENBQThCWSxVQUE5QixFQUEwQ0Msc0JBQTFDLEVBQWtFO0FBQ3JFLFFBQUksQ0FBRVosR0FBR08sUUFBSCxDQUFZSSxVQUFaLEVBQXdCRSxXQUF4QixFQUFOLEVBQ0ksTUFBTSwrQkFBTjs7QUFFSixRQUFNUyxRQUFRLElBQUlDLE1BQUosTUFBY1gsc0JBQWQsRUFBd0MsR0FBeEMsQ0FBZDtBQUNBLFdBQU9aLEdBQUdjLFdBQUgsQ0FBZUgsVUFBZixFQUEyQkksTUFBM0IsQ0FBa0MsYUFBSztBQUMxQyxZQUFNQyxhQUFhZCxLQUFLZSxJQUFMLENBQVVOLFVBQVYsRUFBc0JPLENBQXRCLENBQW5CO0FBQ0EsZUFBT2xCLEdBQUdPLFFBQUgsQ0FBWVMsVUFBWixFQUF3QkgsV0FBeEIsTUFBeUNTLE1BQU1FLElBQU4sQ0FBV04sQ0FBWCxDQUFoRDtBQUNILEtBSE0sRUFHSkUsR0FISSxDQUdBO0FBQUEsZUFBUWxCLEtBQUtlLElBQUwsQ0FBVU4sVUFBVixFQUFzQlUsSUFBdEIsQ0FBUjtBQUFBLEtBSEEsQ0FBUDtBQUlIIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBVcmkgfSBmcm9tIFwidnNjb2RlXCI7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLWV4dHJhJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5cblxuIC8qKlxuICAqIFJlYWRzIGpzb24gb2JqZWN0IGZyb20gZmlsZSBnaXZlbiBieSB1cmlcbiAgKlxuICAqIEBleHBvcnRcbiAgKiBAcGFyYW0ge1VyaX0gdXJpXG4gICogQHJldHVybnMge2FueX1cbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSkge1xuICAgIGlmICh1cmkuc2NoZW1lICE9PSAnZmlsZScpIHRocm93IGAke3VyaS5wYXRofSBpcyBub3QgYSBmaWxlYFxuICAgIHJldHVybiBmcy5yZWFkSnNvblN5bmModXJpLnBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEpzb25Gcm9tRmlsZVN5bmMoc291cmNlKSB7XG4gICAgaWYgKCFmcy5zdGF0U3luYyhzb3VyY2UpLmlzRmlsZSkgdGhyb3cgYCR7c291cmNlfSBpcyBub3QgYSBmaWxlYDtcbiAgICByZXR1cm4gZnMucmVhZEpzb25TeW5jKHNvdXJjZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlRXhpc3RzU3luYyhzb3VyY2UpIHtcbiAgICByZXR1cm4gZnMuZXhpc3RzU3luYyhzb3VyY2UpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRpcmVjdG9yeSBwYXRoIG9mIHRoZSBzb3VyY2VcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0b3J5UGF0aChzb3VyY2UpIHtcbiAgICBpZiAoZnMuc3RhdFN5bmMoc291cmNlKS5pc0ZpbGUoKSkgcmV0dXJuIHBhdGguZGlybmFtZShzb3VyY2UpO1xuICAgIHJldHVybiBzb3VyY2U7XG59XG5cbiAvKipcbiAgKiBHZXRzIGEgZm9sZGVyIGNvbnRhaW5pbmcgYXJ0aWZhY3RzIGZyb20gYSBnaXZlbiByb290IGZvbGRlclxuICAqIEBleHBvcnRcbiAgKiBAcGFyYW0ge3N0cmluZ30gcm9vdEZvbGRlclxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb2xkZXJOYW1lSWdub3JpbmdDYXNlXG4gICogQHJldHVybnMge3N0cmluZ1tdfVxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFydGlmYWN0Rm9sZGVyUGF0aChyb290Rm9sZGVyLCBmb2xkZXJOYW1lSWdub3JpbmdDYXNlKSB7XG4gICAgaWYgKCEgZnMuc3RhdFN5bmMocm9vdEZvbGRlcikuaXNEaXJlY3RvcnkoKSkgXG4gICAgICAgIHRocm93ICdyb290Rm9sZGVyIGlzblxcJ3QgYSBkaXJlY3RvcnknO1xuXG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHJvb3RGb2xkZXIpLmZpbHRlcihmID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IHBhdGguam9pbihyb290Rm9sZGVyLCBmKTtcbiAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKGZvbGRlclBhdGgpLmlzRGlyZWN0b3J5KCkgJiYgZi50b0xvd2VyQ2FzZSgpID09PSBmb2xkZXJOYW1lSWdub3JpbmdDYXNlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkubWFwKGl0ZW0gPT4gcGF0aC5qb2luKHJvb3RGb2xkZXIsIGl0ZW0pKTtcbn1cblxuLyoqXG4gKiBHZXRzIGEgZm9sZGVyIGNvbnRhaW5pbmcgYXJ0aWZhY3RzIGZyb20gYSBnaXZlbiByb290IGZvbGRlclxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb2xkZXJOYW1lSWdub3JpbmdDYXNlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRzRm9sZGVyUGF0aHMocm9vdEZvbGRlciwgZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZSkge1xuICAgIGlmICghIGZzLnN0YXRTeW5jKHJvb3RGb2xkZXIpLmlzRGlyZWN0b3J5KCkpIFxuICAgICAgICB0aHJvdyAncm9vdEZvbGRlciBpc25cXCd0IGEgZGlyZWN0b3J5JztcblxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtmb2xkZXJOYW1lSWdub3JpbmdDYXNlfWAsICdpJyk7XG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHJvb3RGb2xkZXIpLmZpbHRlcihmID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IHBhdGguam9pbihyb290Rm9sZGVyLCBmKTtcbiAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKGZvbGRlclBhdGgpLmlzRGlyZWN0b3J5KCkgJiYgcmVnZXgudGVzdChmKTtcbiAgICB9KS5tYXAoaXRlbSA9PiBwYXRoLmpvaW4ocm9vdEZvbGRlciwgaXRlbSkpO1xufVxuIl19