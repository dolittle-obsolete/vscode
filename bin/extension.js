'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deactivate = exports.activate = undefined;

var _ProjectConfiguration = require('./Configuration/ProjectConfiguration');

var vscode = require('vscode');

/**
 * @param {import("vscode").ExtensionContext} context
 */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function activate(context) {
    vscode.commands.registerCommand('extension.startDolittleFeatureExplorer', function () {});
    vscode.commands.registerCommand('extension.reloadConfiguration', function () {
        (0, _ProjectConfiguration.loadProjectConfiguration)().then(function (config) {
            buildContext(context, config);
        }).catch(function (err) {
            throw err;
        });
    });
    console.log('Congratulations, your extension "dolittle-feature-explorer" is now active!');

    (0, _ProjectConfiguration.loadProjectConfiguration)().then(function (config) {
        buildContext(context, config);
    }).catch(function (err) {
        throw err;
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

    vscode.window.showInformationMessage('Loaded Dolittle project configurations');
    console.log(projectConfiguration.application);
    projectConfiguration.boundedContexts.forEach(function (bc) {
        console.log(bc);
    });
}
var _activate = activate;
exports.activate = _activate;

// this method is called when your extension is deactivated

function deactivate() {}
var _deactivate = deactivate;
exports.deactivate = _deactivate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9leHRlbnNpb24uanMiXSwibmFtZXMiOlsidnNjb2RlIiwicmVxdWlyZSIsImFjdGl2YXRlIiwiY29udGV4dCIsImNvbW1hbmRzIiwicmVnaXN0ZXJDb21tYW5kIiwidGhlbiIsImNvbmZpZyIsImJ1aWxkQ29udGV4dCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInByb2plY3RDb25maWd1cmF0aW9uIiwid2luZG93Iiwic2hvd0luZm9ybWF0aW9uTWVzc2FnZSIsImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHRzIiwiZm9yRWFjaCIsImJjIiwiX2FjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsIl9kZWFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7O0FBRUE7OztBQVRBOzs7OztBQVlBLFNBQVNDLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ3ZCSCxXQUFPSSxRQUFQLENBQWdCQyxlQUFoQixDQUFnQyx3Q0FBaEMsRUFBMEUsWUFBTSxDQUFFLENBQWxGO0FBQ0FMLFdBQU9JLFFBQVAsQ0FBZ0JDLGVBQWhCLENBQWdDLCtCQUFoQyxFQUFpRSxZQUFNO0FBQ25FLDhEQUNLQyxJQURMLENBQ1csVUFBQ0MsTUFBRCxFQUFZO0FBQ2ZDLHlCQUFhTCxPQUFiLEVBQXNCSSxNQUF0QjtBQUNILFNBSEwsRUFHT0UsS0FIUCxDQUdhLGVBQU87QUFDWixrQkFBTUMsR0FBTjtBQUNILFNBTEw7QUFNSCxLQVBEO0FBUUFDLFlBQVFDLEdBQVIsQ0FBWSw0RUFBWjs7QUFFQSwwREFBMkJOLElBQTNCLENBQWlDLGtCQUFVO0FBQ3ZDRSxxQkFBYUwsT0FBYixFQUFzQkksTUFBdEI7QUFDSCxLQUZELEVBRUdFLEtBRkgsQ0FFVSxlQUFPO0FBQUUsY0FBTUMsR0FBTjtBQUFXLEtBRjlCOztBQUtBO0FBQ0E7QUFDSDtBQUNBOztBQUVHO0FBQ0g7QUFDRDs7Ozs7QUFLQSxTQUFTRixZQUFULENBQXNCTCxPQUF0QixFQUErQlUsb0JBQS9CLEVBQXFEOztBQUVqRGIsV0FBT2MsTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyx3Q0FBckM7QUFDQUosWUFBUUMsR0FBUixDQUFZQyxxQkFBcUJHLFdBQWpDO0FBQ0FILHlCQUFxQkksZUFBckIsQ0FBcUNDLE9BQXJDLENBQThDLGNBQU07QUFDaERQLGdCQUFRQyxHQUFSLENBQVlPLEVBQVo7QUFDSCxLQUZEO0FBSUg7QUFDRCxJQUFNQyxZQUFZbEIsUUFBbEI7UUFDc0JBLFEsR0FBYmtCLFM7O0FBRVQ7O0FBQ0EsU0FBU0MsVUFBVCxHQUFzQixDQUNyQjtBQUNELElBQU1DLGNBQWNELFVBQXBCO1FBQ3dCQSxVLEdBQWZDLFciLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgeyBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uL1Byb2plY3RDb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KFwidnNjb2RlXCIpLkV4dGVuc2lvbkNvbnRleHR9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gYWN0aXZhdGUoY29udGV4dCkge1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2V4dGVuc2lvbi5zdGFydERvbGl0dGxlRmVhdHVyZUV4cGxvcmVyJywgKCkgPT4ge30pO1xuICAgIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2V4dGVuc2lvbi5yZWxvYWRDb25maWd1cmF0aW9uJywgKCkgPT4ge1xuICAgICAgICBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAgICAgLnRoZW4oIChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICBidWlsZENvbnRleHQoY29udGV4dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0NvbmdyYXR1bGF0aW9ucywgeW91ciBleHRlbnNpb24gXCJkb2xpdHRsZS1mZWF0dXJlLWV4cGxvcmVyXCIgaXMgbm93IGFjdGl2ZSEnKTtcbiAgICBcbiAgICBsb2FkUHJvamVjdENvbmZpZ3VyYXRpb24oKS50aGVuKCBjb25maWcgPT4ge1xuICAgICAgICBidWlsZENvbnRleHQoY29udGV4dCwgY29uZmlnKTtcbiAgICB9KS5jYXRjaCggZXJyID0+IHsgdGhyb3cgZXJyIH0pO1xuXG5cbiAgICAvLyBjb25zdCBmZWF0dXJlRGVwZW5kZW5jaWVzUHJvdmlkZXIgPSBuZXcgRmVhdHVyZVByb3ZpZGVyKHZzY29kZS53b3Jrc3BhY2Uucm9vdFBhdGgpO1xuICAgIC8vIHZzY29kZS53aW5kb3cucmVnaXN0ZXJUcmVlRGF0YVByb3ZpZGVyKCdmZWF0dXJlRGVwZW5kZW5jaWVzJywgZmVhdHVyZURlcGVuZGVuY2llc1Byb3ZpZGVyKTtcblx0Ly8gdnNjb2RlLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnZmVhdHVyZURlcGVuZGVuY2llcy5yZWZyZXNoJywgKCkgPT4gdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdTdWNjZXNzZnVsbHkgY2FsbGVkIHJlZnJlc2gnKSk7XG5cdC8vIHZzY29kZS5jb21tYW5kcy5yZWdpc3RlckNvbW1hbmQoJ2ZlYXR1cmVEZXBlbmRlbmNpZXMuYWRkQ29tbWFuZCcsIG5vZGUgPT4gdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdTdWNjZXNzZnVsbHkgY2FsbGVkIGFkZCBjb21tYW5kJykpO1xuXG4gICAgLy8gbmV3IEZlYXR1cmVFeHBsb3Jlcihjb250ZXh0KTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwidnNjb2RlXCIpLkV4dGVuc2lvbkNvbnRleHR9IGNvbnRleHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL0NvbmZpZ3VyYXRpb24vUHJvamVjdENvbmZpZ3VyYXRpb24nKS5Qcm9qZWN0Q29uZmlndXJhdGlvbn0gcHJvamVjdENvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gYnVpbGRDb250ZXh0KGNvbnRleHQsIHByb2plY3RDb25maWd1cmF0aW9uKSB7XG4gICAgXG4gICAgdnNjb2RlLndpbmRvdy5zaG93SW5mb3JtYXRpb25NZXNzYWdlKCdMb2FkZWQgRG9saXR0bGUgcHJvamVjdCBjb25maWd1cmF0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RDb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uKTtcbiAgICBwcm9qZWN0Q29uZmlndXJhdGlvbi5ib3VuZGVkQ29udGV4dHMuZm9yRWFjaCggYmMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhiYyk7XG4gICAgfSk7XG4gICAgXG59XG5jb25zdCBfYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydCB7IF9hY3RpdmF0ZSBhcyBhY3RpdmF0ZSB9O1xuXG4vLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB5b3VyIGV4dGVuc2lvbiBpcyBkZWFjdGl2YXRlZFxuZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbn1cbmNvbnN0IF9kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcbmV4cG9ydCB7IF9kZWFjdGl2YXRlIGFzIGRlYWN0aXZhdGUgfTsiXX0=