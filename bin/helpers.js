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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInJlYWRKc29uRnJvbVVyaVN5bmMiLCJyZWFkSnNvbkZyb21GaWxlU3luYyIsImZpbGVFeGlzdHNTeW5jIiwiZ2V0RGlyZWN0b3J5UGF0aCIsImdldEFydGlmYWN0Rm9sZGVyUGF0aCIsImdldEV2ZW50c0ZvbGRlclBhdGhzIiwiZnMiLCJyZXF1aXJlIiwicGF0aCIsInVyaSIsInNjaGVtZSIsInJlYWRKc29uU3luYyIsInNvdXJjZSIsInN0YXRTeW5jIiwiaXNGaWxlIiwiZXhpc3RzU3luYyIsImRpcm5hbWUiLCJyb290Rm9sZGVyIiwiZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZSIsImlzRGlyZWN0b3J5IiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmb2xkZXJQYXRoIiwiam9pbiIsImYiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsIml0ZW0iLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZWdCQSxtQixHQUFBQSxtQjtRQUtBQyxvQixHQUFBQSxvQjtRQUtBQyxjLEdBQUFBLGM7UUFXQUMsZ0IsR0FBQUEsZ0I7UUFZQUMscUIsR0FBQUEscUI7UUFpQkFDLG9CLEdBQUFBLG9COztBQTdEaEI7O0FBQ0EsSUFBTUMsS0FBS0MsUUFBUSxVQUFSLENBQVgsQyxDQUxBOzs7OztBQU1BLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVDOzs7Ozs7O0FBT00sU0FBU1AsbUJBQVQsQ0FBNkJTLEdBQTdCLEVBQWtDO0FBQ3JDLFFBQUlBLElBQUlDLE1BQUosS0FBZSxNQUFuQixFQUEyQixNQUFTRCxJQUFJRCxJQUFiO0FBQzNCLFdBQU9GLEdBQUdLLFlBQUgsQ0FBZ0JGLElBQUlELElBQXBCLENBQVA7QUFDSDs7QUFFTSxTQUFTUCxvQkFBVCxDQUE4QlcsTUFBOUIsRUFBc0M7QUFDekMsUUFBSSxDQUFDTixHQUFHTyxRQUFILENBQVlELE1BQVosRUFBb0JFLE1BQXpCLEVBQWlDLE1BQVNGLE1BQVQ7QUFDakMsV0FBT04sR0FBR0ssWUFBSCxDQUFnQkMsTUFBaEIsQ0FBUDtBQUNIOztBQUVNLFNBQVNWLGNBQVQsQ0FBd0JVLE1BQXhCLEVBQWdDO0FBQ25DLFdBQU9OLEdBQUdTLFVBQUgsQ0FBY0gsTUFBZCxDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTVCxnQkFBVCxDQUEwQlMsTUFBMUIsRUFBa0M7QUFDckMsUUFBSU4sR0FBR08sUUFBSCxDQUFZRCxNQUFaLEVBQW9CRSxNQUFwQixFQUFKLEVBQWtDLE9BQU9OLEtBQUtRLE9BQUwsQ0FBYUosTUFBYixDQUFQO0FBQ2xDLFdBQU9BLE1BQVA7QUFDSDs7QUFFQTs7Ozs7OztBQU9NLFNBQVNSLHFCQUFULENBQStCYSxVQUEvQixFQUEyQ0Msc0JBQTNDLEVBQW1FO0FBQ3RFLFFBQUksQ0FBRVosR0FBR08sUUFBSCxDQUFZSSxVQUFaLEVBQXdCRSxXQUF4QixFQUFOLEVBQ0ksTUFBTSwrQkFBTjs7QUFFSixXQUFPYixHQUFHYyxXQUFILENBQWVILFVBQWYsRUFBMkJJLE1BQTNCLENBQWtDLGFBQUs7QUFDMUMsWUFBTUMsYUFBYWQsS0FBS2UsSUFBTCxDQUFVTixVQUFWLEVBQXNCTyxDQUF0QixDQUFuQjtBQUNBLGVBQU9sQixHQUFHTyxRQUFILENBQVlTLFVBQVosRUFBd0JILFdBQXhCLE1BQXlDSyxFQUFFQyxXQUFGLE9BQW9CUCx1QkFBdUJPLFdBQXZCLEVBQXBFO0FBQ0gsS0FITSxFQUdKQyxHQUhJLENBR0E7QUFBQSxlQUFRbEIsS0FBS2UsSUFBTCxDQUFVTixVQUFWLEVBQXNCVSxJQUF0QixDQUFSO0FBQUEsS0FIQSxDQUFQO0FBSUg7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTdEIsb0JBQVQsQ0FBOEJZLFVBQTlCLEVBQTBDQyxzQkFBMUMsRUFBa0U7QUFDckUsUUFBSSxDQUFFWixHQUFHTyxRQUFILENBQVlJLFVBQVosRUFBd0JFLFdBQXhCLEVBQU4sRUFDSSxNQUFNLCtCQUFOOztBQUVKLFFBQU1TLFFBQVEsSUFBSUMsTUFBSixNQUFjWCxzQkFBZCxFQUF3QyxHQUF4QyxDQUFkO0FBQ0EsV0FBT1osR0FBR2MsV0FBSCxDQUFlSCxVQUFmLEVBQTJCSSxNQUEzQixDQUFrQyxhQUFLO0FBQzFDLFlBQU1DLGFBQWFkLEtBQUtlLElBQUwsQ0FBVU4sVUFBVixFQUFzQk8sQ0FBdEIsQ0FBbkI7QUFDQSxlQUFPbEIsR0FBR08sUUFBSCxDQUFZUyxVQUFaLEVBQXdCSCxXQUF4QixNQUF5Q1MsTUFBTUUsSUFBTixDQUFXTixDQUFYLENBQWhEO0FBQ0gsS0FITSxFQUdKRSxHQUhJLENBR0E7QUFBQSxlQUFRbEIsS0FBS2UsSUFBTCxDQUFVTixVQUFWLEVBQXNCVSxJQUF0QixDQUFSO0FBQUEsS0FIQSxDQUFQO0FBSUgiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IFVyaSB9IGZyb20gXCJ2c2NvZGVcIjtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbiAvKipcbiAgKiBSZWFkcyBqc29uIG9iamVjdCBmcm9tIGZpbGUgZ2l2ZW4gYnkgdXJpXG4gICpcbiAgKiBAZXhwb3J0XG4gICogQHBhcmFtIHtVcml9IHVyaVxuICAqIEByZXR1cm5zIHthbnl9XG4gICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpIHtcbiAgICBpZiAodXJpLnNjaGVtZSAhPT0gJ2ZpbGUnKSB0aHJvdyBgJHt1cmkucGF0aH0gaXMgbm90IGEgZmlsZWBcbiAgICByZXR1cm4gZnMucmVhZEpzb25TeW5jKHVyaS5wYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRKc29uRnJvbUZpbGVTeW5jKHNvdXJjZSkge1xuICAgIGlmICghZnMuc3RhdFN5bmMoc291cmNlKS5pc0ZpbGUpIHRocm93IGAke3NvdXJjZX0gaXMgbm90IGEgZmlsZWA7XG4gICAgcmV0dXJuIGZzLnJlYWRKc29uU3luYyhzb3VyY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUV4aXN0c1N5bmMoc291cmNlKSB7XG4gICAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoc291cmNlKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkaXJlY3RvcnkgcGF0aCBvZiB0aGUgc291cmNlXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdG9yeVBhdGgoc291cmNlKSB7XG4gICAgaWYgKGZzLnN0YXRTeW5jKHNvdXJjZSkuaXNGaWxlKCkpIHJldHVybiBwYXRoLmRpcm5hbWUoc291cmNlKTtcbiAgICByZXR1cm4gc291cmNlO1xufVxuXG4gLyoqXG4gICogR2V0cyBhIGZvbGRlciBjb250YWluaW5nIGFydGlmYWN0cyBmcm9tIGEgZ2l2ZW4gcm9vdCBmb2xkZXJcbiAgKiBAZXhwb3J0XG4gICogQHBhcmFtIHtzdHJpbmd9IHJvb3RGb2xkZXJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZVxuICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcnRpZmFjdEZvbGRlclBhdGgocm9vdEZvbGRlciwgZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZSkge1xuICAgIGlmICghIGZzLnN0YXRTeW5jKHJvb3RGb2xkZXIpLmlzRGlyZWN0b3J5KCkpIFxuICAgICAgICB0aHJvdyAncm9vdEZvbGRlciBpc25cXCd0IGEgZGlyZWN0b3J5JztcblxuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhyb290Rm9sZGVyKS5maWx0ZXIoZiA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBwYXRoLmpvaW4ocm9vdEZvbGRlciwgZik7XG4gICAgICAgIHJldHVybiBmcy5zdGF0U3luYyhmb2xkZXJQYXRoKS5pc0RpcmVjdG9yeSgpICYmIGYudG9Mb3dlckNhc2UoKSA9PT0gZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLm1hcChpdGVtID0+IHBhdGguam9pbihyb290Rm9sZGVyLCBpdGVtKSk7XG59XG5cbi8qKlxuICogR2V0cyBhIGZvbGRlciBjb250YWluaW5nIGFydGlmYWN0cyBmcm9tIGEgZ2l2ZW4gcm9vdCBmb2xkZXJcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50c0ZvbGRlclBhdGhzKHJvb3RGb2xkZXIsIGZvbGRlck5hbWVJZ25vcmluZ0Nhc2UpIHtcbiAgICBpZiAoISBmcy5zdGF0U3luYyhyb290Rm9sZGVyKS5pc0RpcmVjdG9yeSgpKSBcbiAgICAgICAgdGhyb3cgJ3Jvb3RGb2xkZXIgaXNuXFwndCBhIGRpcmVjdG9yeSc7XG5cbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7Zm9sZGVyTmFtZUlnbm9yaW5nQ2FzZX1gLCAnaScpO1xuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhyb290Rm9sZGVyKS5maWx0ZXIoZiA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBwYXRoLmpvaW4ocm9vdEZvbGRlciwgZik7XG4gICAgICAgIHJldHVybiBmcy5zdGF0U3luYyhmb2xkZXJQYXRoKS5pc0RpcmVjdG9yeSgpICYmIHJlZ2V4LnRlc3QoZik7XG4gICAgfSkubWFwKGl0ZW0gPT4gcGF0aC5qb2luKHJvb3RGb2xkZXIsIGl0ZW0pKTtcbn1cbiJdfQ==