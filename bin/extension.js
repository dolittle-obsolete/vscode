"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _ProjectConfiguration = require("./Configuration/ProjectConfiguration");

var _BoundedContextNodeProvider = require("./Explorer/BoundedContextNodeProvider");

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var vscode = require('vscode');

/**
 * @param {import("vscode").ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "dolittle-feature-explorer" is now active!');

    vscode.commands.registerCommand('extension.startDolittleFeatureExplorer', function () {});
    vscode.commands.registerCommand('extension.reloadConfiguration', function () {
        (0, _ProjectConfiguration.loadProjectConfiguration)().then(function (config) {
            buildContext(context, config);
        }).catch(function (err) {
            throw err;
        });
    });

    // const featureDependenciesProvider = new FeatureProvider(vscode.workspace.rootPath);
    // vscode.window.registerTreeDataProvider('featureDependencies', featureDependenciesProvider);
    // vscode.commands.registerCommand('featureDependencies.refresh', () => vscode.window.showInformationMessage('Successfully called refresh'));
    // vscode.commands.registerCommand('featureDependencies.addCommand', node => vscode.window.showInformationMessage('Successfully called add command'));

    // new FeatureExplorer(context);
}
/**
 *
 * @param {import("vscode").ExtensionContext} context
 * @param {import('./Configuration/ProjectConfiguration').ProjectConfiguration} projectConfiguration
 */
function buildContext(context, projectConfiguration) {
    // vscode.window.registerTreeDataProvider('boundedContextExplorer', new BoundedContextNodeProvider(projectConfiguration));
    vscode.window.createTreeView('boundedContextExplorer', { treeDataProvider: new _BoundedContextNodeProvider.BoundedContextNodeProvider(projectConfiguration) });
    vscode.window.showInformationMessage('Loaded Dolittle project configuration');
}
var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwicmVxdWlyZSIsImFjdGl2YXRlIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJjb21tYW5kcyIsInJlZ2lzdGVyQ29tbWFuZCIsInRoZW4iLCJjb25maWciLCJidWlsZENvbnRleHQiLCJjYXRjaCIsImVyciIsInByb2plY3RDb25maWd1cmF0aW9uIiwid2luZG93IiwiY3JlYXRlVHJlZVZpZXciLCJ0cmVlRGF0YVByb3ZpZGVyIiwiQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIiLCJzaG93SW5mb3JtYXRpb25NZXNzYWdlIiwiX2FjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl9kZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBQ0E7O0FBTkE7Ozs7O0FBUUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7O0FBRUE7OztBQUdBLFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ3ZCQyxZQUFRQyxHQUFSLENBQVksNEVBQVo7O0FBRUFMLFdBQU9NLFFBQVAsQ0FBZ0JDLGVBQWhCLENBQWdDLHdDQUFoQyxFQUEwRSxZQUFNLENBQUUsQ0FBbEY7QUFDQVAsV0FBT00sUUFBUCxDQUFnQkMsZUFBaEIsQ0FBZ0MsK0JBQWhDLEVBQWlFLFlBQU07QUFDbkUsOERBQ0tDLElBREwsQ0FDVyxVQUFDQyxNQUFELEVBQVk7QUFDZkMseUJBQWFQLE9BQWIsRUFBc0JNLE1BQXRCO0FBQ0gsU0FITCxFQUdPRSxLQUhQLENBR2EsZUFBTztBQUNaLGtCQUFNQyxHQUFOO0FBQ0gsU0FMTDtBQU1ILEtBUEQ7O0FBVUE7QUFDQTtBQUNIO0FBQ0E7O0FBRUc7QUFDSDtBQUNEOzs7OztBQUtBLFNBQVNGLFlBQVQsQ0FBc0JQLE9BQXRCLEVBQStCVSxvQkFBL0IsRUFBcUQ7QUFDakQ7QUFDQWIsV0FBT2MsTUFBUCxDQUFjQyxjQUFkLENBQTZCLHdCQUE3QixFQUF1RCxFQUFDQyxrQkFBa0IsSUFBSUMsc0RBQUosQ0FBK0JKLG9CQUEvQixDQUFuQixFQUF2RDtBQUNBYixXQUFPYyxNQUFQLENBQWNJLHNCQUFkLENBQXFDLHVDQUFyQztBQUVIO0FBQ0QsSUFBTUMsWUFBWWpCLFFBQWxCO1FBQ3NCQSxRLEdBQWJpQixTOztBQUVUOztBQUNBLFNBQVNDLFVBQVQsR0FBc0IsQ0FDckI7QUFDRCxJQUFNQyxjQUFjRCxVQUFwQjtRQUN3QkEsVSxHQUFmQyxXIiwiZmlsZSI6ImV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgbG9hZFByb2plY3RDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvbi9Qcm9qZWN0Q29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIgfSBmcm9tIFwiLi9FeHBsb3Jlci9Cb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlclwiO1xuXG5jb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcInZzY29kZVwiKS5FeHRlbnNpb25Db250ZXh0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGNvbnRleHQpIHtcbiAgICBjb25zb2xlLmxvZygnQ29uZ3JhdHVsYXRpb25zLCB5b3VyIGV4dGVuc2lvbiBcImRvbGl0dGxlLWZlYXR1cmUtZXhwbG9yZXJcIiBpcyBub3cgYWN0aXZlIScpO1xuICAgIFxuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2V4dGVuc2lvbi5zdGFydERvbGl0dGxlRmVhdHVyZUV4cGxvcmVyJywgKCkgPT4ge30pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2V4dGVuc2lvbi5yZWxvYWRDb25maWd1cmF0aW9uJywgKCkgPT4ge1xuICAgICAgICBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgLnRoZW4oIChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICBidWlsZENvbnRleHQoY29udGV4dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG5cbiAgICAvLyBjb25zdCBmZWF0dXJlRGVwZW5kZW5jaWVzUHJvdmlkZXIgPSBuZXcgRmVhdHVyZVByb3ZpZGVyKHZzY29kZS53b3Jrc3BhY2Uucm9vdFBhdGgpO1xuICAgIC8vIHZzY29kZS53aW5kb3cucmVnaXN0ZXJUcmVlRGF0YVByb3ZpZGVyKCdmZWF0dXJlRGVwZW5kZW5jaWVzJywgZmVhdHVyZURlcGVuZGVuY2llc1Byb3ZpZGVyKTtcblx0Ly8gdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZmVhdHVyZURlcGVuZGVuY2llcy5yZWZyZXNoJywgKCkgPT4gdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdTdWNjZXNzZnVsbHkgY2FsbGVkIHJlZnJlc2gnKSk7XG5cdC8vIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2ZlYXR1cmVEZXBlbmRlbmNpZXMuYWRkQ29tbWFuZCcsIG5vZGUgPT4gdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdTdWNjZXNzZnVsbHkgY2FsbGVkIGFkZCBjb21tYW5kJykpO1xuXG4gICAgLy8gbmV3IEZlYXR1cmVFeHBsb3Jlcihjb250ZXh0KTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwidnNjb2RlXCIpLkV4dGVuc2lvbkNvbnRleHR9IGNvbnRleHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nKS5Qcm9qZWN0Q29uZmlndXJhdGlvbn0gcHJvamVjdENvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb250ZXh0KGNvbnRleHQsIHByb2plY3RDb25maWd1cmF0aW9uKSB7XG4gICAgLy8gdnNjb2RlLndpbmRvdy5yZWdpc3RlclRyZWVEYXRhUHJvdmlkZXIoJ2JvdW5kZWRDb250ZXh0RXhwbG9yZXInLCBuZXcgQm91bmRlZENvbnRleHROb2RlUHJvdmlkZXIocHJvamVjdENvbmZpZ3VyYXRpb24pKTtcbiAgICB2c2NvZGUud2luZG93LmNyZWF0ZVRyZWVWaWV3KCdib3VuZGVkQ29udGV4dEV4cGxvcmVyJywge3RyZWVEYXRhUHJvdmlkZXI6IG5ldyBCb3VuZGVkQ29udGV4dE5vZGVQcm92aWRlcihwcm9qZWN0Q29uZmlndXJhdGlvbil9KTtcbiAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoJ0xvYWRlZCBEb2xpdHRsZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb24nKTtcbiAgICBcbn1cbmNvbnN0IF9hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuZXhwb3J0IHsgX2FjdGl2YXRlIGFzIGFjdGl2YXRlIH07XG5cbi8vIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHlvdXIgZXh0ZW5zaW9uIGlzIGRlYWN0aXZhdGVkXG5mdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xufVxuY29uc3QgX2RlYWN0aXZhdGUgPSBkZWFjdGl2YXRlO1xuZXhwb3J0IHsgX2RlYWN0aXZhdGUgYXMgZGVhY3RpdmF0ZSB9OyJdfQ==