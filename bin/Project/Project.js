'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.build = build;

var _vscode = require('vscode');

var vscode = require('vscode');
var path = require('path');
/**
 *
 *
 * @export
 * @param {string} language
 * @param {Uri} workspaceUri
 * @param {Uri} documentUri
 */
function build(language, workspaceUri, documentUri) {
    var fileDir = path.dirname(documentUri.fsPath);
    var root = workspaceUri.fsPath;

    switch (language) {
        case 'csharp':
            var dotnet = require('./DotNet/dotnetProject');
            vscode.window.showInformationMessage('Building dotnet application');
            var childProcess = dotnet.build(root, fileDir);
            childProcess.on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while building dotnet application');
                    throw 'error while building dotnet application';
                }

                vscode.window.showInformationMessage('Finished building dotnet application');
            });
            break;
        default:
            vscode.window.showErrorMessage('Dolittle Project: Build does not support language \'' + language + '\'');
            break;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Qcm9qZWN0L1Byb2plY3QuanMiXSwibmFtZXMiOlsiYnVpbGQiLCJ2c2NvZGUiLCJyZXF1aXJlIiwicGF0aCIsImxhbmd1YWdlIiwid29ya3NwYWNlVXJpIiwiZG9jdW1lbnRVcmkiLCJmaWxlRGlyIiwiZGlybmFtZSIsImZzUGF0aCIsInJvb3QiLCJkb3RuZXQiLCJ3aW5kb3ciLCJzaG93SW5mb3JtYXRpb25NZXNzYWdlIiwiY2hpbGRQcm9jZXNzIiwib24iLCJjb2RlIiwic2hvd0Vycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLEssR0FBQUEsSzs7QUFaaEI7O0FBRUEsSUFBTUMsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjtBQUNBOzs7Ozs7OztBQVFPLFNBQVNGLEtBQVQsQ0FBZUksUUFBZixFQUF5QkMsWUFBekIsRUFBdUNDLFdBQXZDLEVBQW9EO0FBQ3ZELFFBQU1DLFVBQVVKLEtBQUtLLE9BQUwsQ0FBYUYsWUFBWUcsTUFBekIsQ0FBaEI7QUFDQSxRQUFNQyxPQUFPTCxhQUFhSSxNQUExQjs7QUFFQSxZQUFPTCxRQUFQO0FBQ0ksYUFBSyxRQUFMO0FBQ0ksZ0JBQU1PLFNBQVNULFFBQVEsd0JBQVIsQ0FBZjtBQUNBRCxtQkFBT1csTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyw2QkFBckM7QUFDQSxnQkFBSUMsZUFBZUgsT0FBT1gsS0FBUCxDQUFhVSxJQUFiLEVBQW1CSCxPQUFuQixDQUFuQjtBQUNBTyx5QkFBYUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixnQkFBUTtBQUM3QixvQkFBSUMsU0FBUyxDQUFiLEVBQWdCO0FBQ1pmLDJCQUFPVyxNQUFQLENBQWNLLGdCQUFkLENBQStCLHlDQUEvQjtBQUNBLDBCQUFNLHlDQUFOO0FBQ0g7O0FBRURoQix1QkFBT1csTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyxzQ0FBckM7QUFDSCxhQVBEO0FBUUE7QUFDSjtBQUNJWixtQkFBT1csTUFBUCxDQUFjSyxnQkFBZCwwREFBcUZiLFFBQXJGO0FBQ0E7QUFoQlI7QUFrQkgiLCJmaWxlIjoiUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVyaSB9IGZyb20gJ3ZzY29kZSc7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqIEBwYXJhbSB7VXJpfSB3b3Jrc3BhY2VVcmlcbiAqIEBwYXJhbSB7VXJpfSBkb2N1bWVudFVyaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQobGFuZ3VhZ2UsIHdvcmtzcGFjZVVyaSwgZG9jdW1lbnRVcmkpIHtcbiAgICBjb25zdCBmaWxlRGlyID0gcGF0aC5kaXJuYW1lKGRvY3VtZW50VXJpLmZzUGF0aCk7XG4gICAgY29uc3Qgcm9vdCA9IHdvcmtzcGFjZVVyaS5mc1BhdGg7XG5cbiAgICBzd2l0Y2gobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSAnY3NoYXJwJzpcbiAgICAgICAgICAgIGNvbnN0IGRvdG5ldCA9IHJlcXVpcmUoJy4vRG90TmV0L2RvdG5ldFByb2plY3QnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnQnVpbGRpbmcgZG90bmV0IGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICBsZXQgY2hpbGRQcm9jZXNzID0gZG90bmV0LmJ1aWxkKHJvb3QsIGZpbGVEaXIpO1xuICAgICAgICAgICAgY2hpbGRQcm9jZXNzLm9uKCdjbG9zZScsIGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3Igd2hpbGUgYnVpbGRpbmcgZG90bmV0IGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdlcnJvciB3aGlsZSBidWlsZGluZyBkb3RuZXQgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoJ0ZpbmlzaGVkIGJ1aWxkaW5nIGRvdG5ldCBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBEb2xpdHRsZSBQcm9qZWN0OiBCdWlsZCBkb2VzIG5vdCBzdXBwb3J0IGxhbmd1YWdlICcke2xhbmd1YWdlfSdgKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSJdfQ==