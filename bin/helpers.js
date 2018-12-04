'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readJsonFromUriSync = readJsonFromUriSync;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInJlYWRKc29uRnJvbVVyaVN5bmMiLCJnZXREaXJlY3RvcnlQYXRoIiwiZ2V0QXJ0aWZhY3RGb2xkZXJQYXRoIiwiZ2V0RXZlbnRzRm9sZGVyUGF0aHMiLCJmcyIsInJlcXVpcmUiLCJwYXRoIiwidXJpIiwic2NoZW1lIiwicmVhZEpzb25TeW5jIiwic291cmNlIiwic3RhdFN5bmMiLCJpc0ZpbGUiLCJkaXJuYW1lIiwicm9vdEZvbGRlciIsImZvbGRlck5hbWVJZ25vcmluZ0Nhc2UiLCJpc0RpcmVjdG9yeSIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZm9sZGVyUGF0aCIsImpvaW4iLCJmIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJpdGVtIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWlCaUJBLG1CLEdBQUFBLG1CO1FBWURDLGdCLEdBQUFBLGdCO1FBWUNDLHFCLEdBQUFBLHFCO1FBaUJEQyxvQixHQUFBQSxvQjs7QUF0RGhCOztBQUNBLElBQU1DLEtBQUtDLFFBQVEsVUFBUixDQUFYLEMsQ0FMQTs7Ozs7QUFNQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjs7QUFJQzs7Ozs7OztBQU9PLFNBQVNMLG1CQUFULENBQTZCTyxHQUE3QixFQUFrQztBQUN0QyxNQUFJQSxJQUFJQyxNQUFKLEtBQWUsTUFBbkIsRUFBMkIsTUFBU0QsSUFBSUQsSUFBYjtBQUMzQixTQUFPRixHQUFHSyxZQUFILENBQWdCRixJQUFJRCxJQUFwQixDQUFQO0FBQ0Y7O0FBRUY7Ozs7Ozs7QUFPTyxTQUFTTCxnQkFBVCxDQUEwQlMsTUFBMUIsRUFBa0M7QUFDckMsTUFBSU4sR0FBR08sUUFBSCxDQUFZRCxNQUFaLEVBQW9CRSxNQUFwQixFQUFKLEVBQWtDLE9BQU9OLEtBQUtPLE9BQUwsQ0FBYUgsTUFBYixDQUFQO0FBQ2xDLFNBQU9BLE1BQVA7QUFDRjs7QUFFRDs7Ozs7OztBQU9PLFNBQVNSLHFCQUFULENBQStCWSxVQUEvQixFQUEyQ0Msc0JBQTNDLEVBQW1FO0FBQ3ZFLE1BQUksQ0FBRVgsR0FBR08sUUFBSCxDQUFZRyxVQUFaLEVBQXdCRSxXQUF4QixFQUFOLEVBQ0ksTUFBTSwrQkFBTjs7QUFFSixTQUFPWixHQUFHYSxXQUFILENBQWVILFVBQWYsRUFBMkJJLE1BQTNCLENBQWtDLGFBQUs7QUFDMUMsUUFBTUMsYUFBYWIsS0FBS2MsSUFBTCxDQUFVTixVQUFWLEVBQXNCTyxDQUF0QixDQUFuQjtBQUNBLFdBQU9qQixHQUFHTyxRQUFILENBQVlRLFVBQVosRUFBd0JILFdBQXhCLE1BQXlDSyxFQUFFQyxXQUFGLE9BQW9CUCx1QkFBdUJPLFdBQXZCLEVBQXBFO0FBQ0gsR0FITSxFQUdKQyxHQUhJLENBR0E7QUFBQSxXQUFRakIsS0FBS2MsSUFBTCxDQUFVTixVQUFWLEVBQXNCVSxJQUF0QixDQUFSO0FBQUEsR0FIQSxDQUFQO0FBSUY7O0FBRUY7Ozs7Ozs7QUFPTyxTQUFTckIsb0JBQVQsQ0FBOEJXLFVBQTlCLEVBQTBDQyxzQkFBMUMsRUFBa0U7QUFDckUsTUFBSSxDQUFFWCxHQUFHTyxRQUFILENBQVlHLFVBQVosRUFBd0JFLFdBQXhCLEVBQU4sRUFDSSxNQUFNLCtCQUFOOztBQUVKLE1BQU1TLFFBQVEsSUFBSUMsTUFBSixNQUFjWCxzQkFBZCxFQUF3QyxHQUF4QyxDQUFkO0FBQ0EsU0FBT1gsR0FBR2EsV0FBSCxDQUFlSCxVQUFmLEVBQTJCSSxNQUEzQixDQUFrQyxhQUFLO0FBQzFDLFFBQU1DLGFBQWFiLEtBQUtjLElBQUwsQ0FBVU4sVUFBVixFQUFzQk8sQ0FBdEIsQ0FBbkI7QUFDQSxXQUFPakIsR0FBR08sUUFBSCxDQUFZUSxVQUFaLEVBQXdCSCxXQUF4QixNQUF5Q1MsTUFBTUUsSUFBTixDQUFXTixDQUFYLENBQWhEO0FBQ0gsR0FITSxFQUdKRSxHQUhJLENBR0E7QUFBQSxXQUFRakIsS0FBS2MsSUFBTCxDQUFVTixVQUFWLEVBQXNCVSxJQUF0QixDQUFSO0FBQUEsR0FIQSxDQUFQO0FBSUgiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IFVyaSB9IGZyb20gXCJ2c2NvZGVcIjtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cblxuXG4gLyoqXG4gICogUmVhZHMganNvbiBvYmplY3QgZnJvbSBmaWxlIGdpdmVuIGJ5IHVyaVxuICAqXG4gICogQGV4cG9ydFxuICAqIEBwYXJhbSB7VXJpfSB1cmlcbiAgKiBAcmV0dXJucyB7YW55fVxuICAqL1xuIGV4cG9ydCBmdW5jdGlvbiByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSkge1xuICAgIGlmICh1cmkuc2NoZW1lICE9PSAnZmlsZScpIHRocm93IGAke3VyaS5wYXRofSBpcyBub3QgYSBmaWxlYFxuICAgIHJldHVybiBmcy5yZWFkSnNvblN5bmModXJpLnBhdGgpO1xuIH1cblxuLyoqXG4gKiBHZXRzIHRoZSBkaXJlY3RvcnkgcGF0aCBvZiB0aGUgc291cmNlXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdG9yeVBhdGgoc291cmNlKSB7XG4gICAgaWYgKGZzLnN0YXRTeW5jKHNvdXJjZSkuaXNGaWxlKCkpIHJldHVybiBwYXRoLmRpcm5hbWUoc291cmNlKTtcbiAgICByZXR1cm4gc291cmNlO1xuIH1cblxuIC8qKlxuICAqIEdldHMgYSBmb2xkZXIgY29udGFpbmluZyBhcnRpZmFjdHMgZnJvbSBhIGdpdmVuIHJvb3QgZm9sZGVyXG4gICogQGV4cG9ydFxuICAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvbGRlck5hbWVJZ25vcmluZ0Nhc2VcbiAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICovXG4gZXhwb3J0IGZ1bmN0aW9uIGdldEFydGlmYWN0Rm9sZGVyUGF0aChyb290Rm9sZGVyLCBmb2xkZXJOYW1lSWdub3JpbmdDYXNlKSB7XG4gICAgaWYgKCEgZnMuc3RhdFN5bmMocm9vdEZvbGRlcikuaXNEaXJlY3RvcnkoKSkgXG4gICAgICAgIHRocm93ICdyb290Rm9sZGVyIGlzblxcJ3QgYSBkaXJlY3RvcnknO1xuXG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHJvb3RGb2xkZXIpLmZpbHRlcihmID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IHBhdGguam9pbihyb290Rm9sZGVyLCBmKTtcbiAgICAgICAgcmV0dXJuIGZzLnN0YXRTeW5jKGZvbGRlclBhdGgpLmlzRGlyZWN0b3J5KCkgJiYgZi50b0xvd2VyQ2FzZSgpID09PSBmb2xkZXJOYW1lSWdub3JpbmdDYXNlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkubWFwKGl0ZW0gPT4gcGF0aC5qb2luKHJvb3RGb2xkZXIsIGl0ZW0pKTtcbiB9XG5cbi8qKlxuICogR2V0cyBhIGZvbGRlciBjb250YWluaW5nIGFydGlmYWN0cyBmcm9tIGEgZ2l2ZW4gcm9vdCBmb2xkZXJcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290Rm9sZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9sZGVyTmFtZUlnbm9yaW5nQ2FzZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50c0ZvbGRlclBhdGhzKHJvb3RGb2xkZXIsIGZvbGRlck5hbWVJZ25vcmluZ0Nhc2UpIHtcbiAgICBpZiAoISBmcy5zdGF0U3luYyhyb290Rm9sZGVyKS5pc0RpcmVjdG9yeSgpKSBcbiAgICAgICAgdGhyb3cgJ3Jvb3RGb2xkZXIgaXNuXFwndCBhIGRpcmVjdG9yeSc7XG5cbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7Zm9sZGVyTmFtZUlnbm9yaW5nQ2FzZX1gLCAnaScpO1xuICAgIHJldHVybiBmcy5yZWFkZGlyU3luYyhyb290Rm9sZGVyKS5maWx0ZXIoZiA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBwYXRoLmpvaW4ocm9vdEZvbGRlciwgZik7XG4gICAgICAgIHJldHVybiBmcy5zdGF0U3luYyhmb2xkZXJQYXRoKS5pc0RpcmVjdG9yeSgpICYmIHJlZ2V4LnRlc3QoZik7XG4gICAgfSkubWFwKGl0ZW0gPT4gcGF0aC5qb2luKHJvb3RGb2xkZXIsIGl0ZW0pKTtcbn1cbiJdfQ==