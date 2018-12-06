'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.build = build;

var _vscode = require('vscode');

var vscode = require('vscode');
/**
 *
 *
 * @export
 * @param {string} language
 * @param {Uri} workspaceUri
 * @param {Uri} documentUri
 */
function build(language, workspaceUri, documentUri) {
    switch (language) {
        case 'csharp':
            var path = require('path');
            var spawn = require('child_process');
            var root = workspaceUri.fsPath;
            var fileDirName = path.dirname(documentUri.fsPath);
            console.log(workspaceUri);
            console.log(documentUri);
            console.log(root);
            console.log(fileDirName);
        // spawn('node', ['DotNet/Build/dotnet.js', 'root:'])

        default:
            vscode.window.showErrorMessage('Dolittle Project: Build does not support language \'' + language + '\'');
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Qcm9qZWN0L1Byb2plY3QuanMiXSwibmFtZXMiOlsiYnVpbGQiLCJ2c2NvZGUiLCJyZXF1aXJlIiwibGFuZ3VhZ2UiLCJ3b3Jrc3BhY2VVcmkiLCJkb2N1bWVudFVyaSIsInBhdGgiLCJzcGF3biIsInJvb3QiLCJmc1BhdGgiLCJmaWxlRGlyTmFtZSIsImRpcm5hbWUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2hvd0Vycm9yTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFXZ0JBLEssR0FBQUEsSzs7QUFYaEI7O0FBRUEsSUFBTUMsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFDQTs7Ozs7Ozs7QUFRTyxTQUFTRixLQUFULENBQWVHLFFBQWYsRUFBeUJDLFlBQXpCLEVBQXVDQyxXQUF2QyxFQUFvRDtBQUN2RCxZQUFPRixRQUFQO0FBQ0ksYUFBSyxRQUFMO0FBQ0ksZ0JBQU1HLE9BQU9KLFFBQVEsTUFBUixDQUFiO0FBQ0EsZ0JBQU1LLFFBQVFMLFFBQVEsZUFBUixDQUFkO0FBQ0EsZ0JBQUlNLE9BQU9KLGFBQWFLLE1BQXhCO0FBQ0EsZ0JBQUlDLGNBQWNKLEtBQUtLLE9BQUwsQ0FBYU4sWUFBWUksTUFBekIsQ0FBbEI7QUFDQUcsb0JBQVFDLEdBQVIsQ0FBWVQsWUFBWjtBQUNBUSxvQkFBUUMsR0FBUixDQUFZUixXQUFaO0FBQ0FPLG9CQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDQUksb0JBQVFDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBOztBQUVKO0FBQ0lULG1CQUFPYSxNQUFQLENBQWNDLGdCQUFkLDBEQUFxRlosUUFBckY7QUFiUjtBQWVIIiwiZmlsZSI6IlByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcmkgfSBmcm9tICd2c2NvZGUnO1xuXG5jb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAqIEBwYXJhbSB7VXJpfSB3b3Jrc3BhY2VVcmlcbiAqIEBwYXJhbSB7VXJpfSBkb2N1bWVudFVyaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQobGFuZ3VhZ2UsIHdvcmtzcGFjZVVyaSwgZG9jdW1lbnRVcmkpIHtcbiAgICBzd2l0Y2gobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSAnY3NoYXJwJzpcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gICAgICAgICAgICBjb25zdCBzcGF3biA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgICAgICAgICAgIGxldCByb290ID0gd29ya3NwYWNlVXJpLmZzUGF0aDtcbiAgICAgICAgICAgIGxldCBmaWxlRGlyTmFtZSA9IHBhdGguZGlybmFtZShkb2N1bWVudFVyaS5mc1BhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod29ya3NwYWNlVXJpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50VXJpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZURpck5hbWUpO1xuICAgICAgICAgICAgLy8gc3Bhd24oJ25vZGUnLCBbJ0RvdE5ldC9CdWlsZC9kb3RuZXQuanMnLCAncm9vdDonXSlcbiAgICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBEb2xpdHRsZSBQcm9qZWN0OiBCdWlsZCBkb2VzIG5vdCBzdXBwb3J0IGxhbmd1YWdlICcke2xhbmd1YWdlfSdgKVxuICAgIH1cbn0iXX0=