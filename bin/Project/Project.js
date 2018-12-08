'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.build = build;
exports.buildCurrent = buildCurrent;
exports.restore = restore;
exports.test = test;
exports.testDebug = testDebug;
exports.testRerun = testRerun;

var _vscode = require('vscode');

var _globals = require('../globals');

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotnet = require('./DotNet/dotnetProject');
var vscode = _globals2.default.vscode;
var path = require('path');

/**
 * 
 * @param {Uri} uri
 * @returns {import('vscode').WorkspaceFolder}
 */
function getWorkspace(uri) {
    return vscode.workspace.getWorkspaceFolder(uri);
}
/**
 *
 * @param {Uri} openDocumentUri
 */
function getBoundedContextLanguage(openDocumentUri) {
    var workspace = getWorkspace(openDocumentUri);
    var boundedContext = _globals2.default.projectConfiguration.boundedContexts.filter(function (bc) {
        return bc.workspace === workspace;
    })[0];

    if (boundedContext === undefined) throw 'Something went wrong while getting the bounded context configuration';

    return boundedContext.core.language;
}
/**
 *
 *
 * @param {Uri} documentUri
 * @returns {[string, string, string]} [fileDIr, root, language]
 */
function getRequiredParameters(documentUri) {
    return [path.dirname(documentUri.fsPath), getWorkspace(documentUri).uri.fsPath, getBoundedContextLanguage(documentUri)];
}
/**
 * 
 * @export
 * @param {Uri} documentUri
 */
function build(documentUri) {
    var _getRequiredParameter = getRequiredParameters(documentUri),
        _getRequiredParameter2 = (0, _slicedToArray3.default)(_getRequiredParameter, 3),
        fileDir = _getRequiredParameter2[0],
        root = _getRequiredParameter2[1],
        language = _getRequiredParameter2[2];

    _globals2.default.dolittleOutputChannel.appendLine('Building project');
    switch (language) {
        case 'csharp':
            dotnet.build(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while building dotnet application');
                    throw 'error while building dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Build does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}
/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
function buildCurrent(documentUri) {
    var _getRequiredParameter3 = getRequiredParameters(documentUri),
        _getRequiredParameter4 = (0, _slicedToArray3.default)(_getRequiredParameter3, 3),
        fileDir = _getRequiredParameter4[0],
        root = _getRequiredParameter4[1],
        language = _getRequiredParameter4[2];

    _globals2.default.dolittleOutputChannel.appendLine('Building current project');
    switch (language) {
        case 'csharp':
            dotnet.buildCurrent(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while building current dotnet application');
                    throw 'error while building current dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Build Current does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
function restore(documentUri) {
    var _getRequiredParameter5 = getRequiredParameters(documentUri),
        _getRequiredParameter6 = (0, _slicedToArray3.default)(_getRequiredParameter5, 3),
        fileDir = _getRequiredParameter6[0],
        root = _getRequiredParameter6[1],
        language = _getRequiredParameter6[2];

    _globals2.default.dolittleOutputChannel.appendLine('Restoring project');
    switch (language) {
        case 'csharp':
            dotnet.restore(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while restoring dotnet application');
                    throw 'error while restoring dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Restore does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
function test(documentUri) {
    var _getRequiredParameter7 = getRequiredParameters(documentUri),
        _getRequiredParameter8 = (0, _slicedToArray3.default)(_getRequiredParameter7, 3),
        fileDir = _getRequiredParameter8[0],
        root = _getRequiredParameter8[1],
        language = _getRequiredParameter8[2];

    _globals2.default.dolittleOutputChannel.appendLine('Testing project');
    switch (language) {
        case 'csharp':
            dotnet.test(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while testing dotnet application');
                    throw 'error while testing dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Test does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
function testDebug(documentUri) {
    var _getRequiredParameter9 = getRequiredParameters(documentUri),
        _getRequiredParameter10 = (0, _slicedToArray3.default)(_getRequiredParameter9, 3),
        fileDir = _getRequiredParameter10[0],
        root = _getRequiredParameter10[1],
        language = _getRequiredParameter10[2];

    _globals2.default.dolittleOutputChannel.appendLine('Debugging project tests');
    switch (language) {
        case 'csharp':
            dotnet.testDebug(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while debugging test for dotnet application');
                    throw 'error while building dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Test Debug does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}

/**
 *
 *
 * @export
 * @param {Uri} documentUri
 */
function testRerun(documentUri) {
    var _getRequiredParameter11 = getRequiredParameters(documentUri),
        _getRequiredParameter12 = (0, _slicedToArray3.default)(_getRequiredParameter11, 3),
        fileDir = _getRequiredParameter12[0],
        root = _getRequiredParameter12[1],
        language = _getRequiredParameter12[2];

    _globals2.default.dolittleOutputChannel.appendLine('Reruns project tests');
    switch (language) {
        case 'csharp':
            dotnet.rerunTest(root, fileDir).on('close', function (code) {
                if (code !== 0) {
                    vscode.window.showErrorMessage('Error while debugging test for dotnet application');
                    throw 'error while building dotnet application';
                }
            });
            break;
        default:
            var msg = 'Error: Dolittle Project: Test Rerun does not support language \'' + language + '\'';
            _globals2.default.dolittleOutputChannel.appendLine(msg);
            vscode.window.showErrorMessage(msg);
            break;
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Qcm9qZWN0L1Byb2plY3QuanMiXSwibmFtZXMiOlsiYnVpbGQiLCJidWlsZEN1cnJlbnQiLCJyZXN0b3JlIiwidGVzdCIsInRlc3REZWJ1ZyIsInRlc3RSZXJ1biIsImRvdG5ldCIsInJlcXVpcmUiLCJ2c2NvZGUiLCJnbG9iYWxzIiwicGF0aCIsImdldFdvcmtzcGFjZSIsInVyaSIsIndvcmtzcGFjZSIsImdldFdvcmtzcGFjZUZvbGRlciIsImdldEJvdW5kZWRDb250ZXh0TGFuZ3VhZ2UiLCJvcGVuRG9jdW1lbnRVcmkiLCJib3VuZGVkQ29udGV4dCIsInByb2plY3RDb25maWd1cmF0aW9uIiwiYm91bmRlZENvbnRleHRzIiwiZmlsdGVyIiwiYmMiLCJ1bmRlZmluZWQiLCJjb3JlIiwibGFuZ3VhZ2UiLCJnZXRSZXF1aXJlZFBhcmFtZXRlcnMiLCJkb2N1bWVudFVyaSIsImRpcm5hbWUiLCJmc1BhdGgiLCJmaWxlRGlyIiwicm9vdCIsImRvbGl0dGxlT3V0cHV0Q2hhbm5lbCIsImFwcGVuZExpbmUiLCJvbiIsImNvZGUiLCJ3aW5kb3ciLCJzaG93RXJyb3JNZXNzYWdlIiwibXNnIiwicmVydW5UZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBOENnQkEsSyxHQUFBQSxLO1FBMkJBQyxZLEdBQUFBLFk7UUE0QkFDLE8sR0FBQUEsTztRQTRCQUMsSSxHQUFBQSxJO1FBNEJBQyxTLEdBQUFBLFM7UUE0QkFDLFMsR0FBQUEsUzs7QUF6TGhCOztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTQyxRQUFRLHdCQUFSLENBQWY7QUFDQSxJQUFNQyxTQUFTQyxrQkFBUUQsTUFBdkI7QUFDQSxJQUFNRSxPQUFPSCxRQUFRLE1BQVIsQ0FBYjs7QUFFQTs7Ozs7QUFLQSxTQUFTSSxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixXQUFPSixPQUFPSyxTQUFQLENBQWlCQyxrQkFBakIsQ0FBb0NGLEdBQXBDLENBQVA7QUFDSDtBQUNEOzs7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SSxnQkFBTUMsMkVBQXdFYixRQUF4RSxPQUFOO0FBQ0FmLDhCQUFRc0IscUJBQVIsQ0FBOEJDLFVBQTlCLENBQXlDSyxHQUF6QztBQUNBN0IsbUJBQU8yQixNQUFQLENBQWNDLGdCQUFkLENBQStCQyxHQUEvQjtBQUNBO0FBZFI7QUFnQkgiLCJmaWxlIjoiUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVyaSB9IGZyb20gJ3ZzY29kZSc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcblxuY29uc3QgZG90bmV0ID0gcmVxdWlyZSgnLi9Eb3ROZXQvZG90bmV0UHJvamVjdCcpO1xuY29uc3QgdnNjb2RlID0gZ2xvYmFscy52c2NvZGU7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtVcml9IHVyaVxuICogQHJldHVybnMge2ltcG9ydCgndnNjb2RlJykuV29ya3NwYWNlRm9sZGVyfVxuICovXG5mdW5jdGlvbiBnZXRXb3Jrc3BhY2UodXJpKSB7XG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZ2V0V29ya3NwYWNlRm9sZGVyKHVyaSk7XG59XG4vKipcbiAqXG4gKiBAcGFyYW0ge1VyaX0gb3BlbkRvY3VtZW50VXJpXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kZWRDb250ZXh0TGFuZ3VhZ2Uob3BlbkRvY3VtZW50VXJpKSB7XG4gICAgbGV0IHdvcmtzcGFjZSA9IGdldFdvcmtzcGFjZShvcGVuRG9jdW1lbnRVcmkpO1xuICAgIGxldCBib3VuZGVkQ29udGV4dCA9IGdsb2JhbHMucHJvamVjdENvbmZpZ3VyYXRpb24uYm91bmRlZENvbnRleHRzLmZpbHRlcihiYyA9PiBiYy53b3Jrc3BhY2UgPT09IHdvcmtzcGFjZSlbMF07XG5cbiAgICBpZiAoYm91bmRlZENvbnRleHQgPT09IHVuZGVmaW5lZCkgXG4gICAgICAgIHRocm93ICdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBnZXR0aW5nIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbic7IFxuICAgIFxuICAgIHJldHVybiBib3VuZGVkQ29udGV4dC5jb3JlLmxhbmd1YWdlO1xufVxuLyoqXG4gKlxuICpcbiAqIEBwYXJhbSB7VXJpfSBkb2N1bWVudFVyaVxuICogQHJldHVybnMge1tzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gW2ZpbGVESXIsIHJvb3QsIGxhbmd1YWdlXVxuICovXG5mdW5jdGlvbiBnZXRSZXF1aXJlZFBhcmFtZXRlcnMoZG9jdW1lbnRVcmkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXRoLmRpcm5hbWUoZG9jdW1lbnRVcmkuZnNQYXRoKSwgXG4gICAgICAgIGdldFdvcmtzcGFjZShkb2N1bWVudFVyaSkudXJpLmZzUGF0aCwgXG4gICAgICAgIGdldEJvdW5kZWRDb250ZXh0TGFuZ3VhZ2UoZG9jdW1lbnRVcmkpXG4gICAgXTtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge1VyaX0gZG9jdW1lbnRVcmlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKGRvY3VtZW50VXJpKSB7XG4gICAgY29uc3QgW2ZpbGVEaXIsIHJvb3QsIGxhbmd1YWdlXSA9IGdldFJlcXVpcmVkUGFyYW1ldGVycyhkb2N1bWVudFVyaSk7XG5cbiAgICBnbG9iYWxzLmRvbGl0dGxlT3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdCdWlsZGluZyBwcm9qZWN0Jyk7XG4gICAgc3dpdGNoKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2NzaGFycCc6XG4gICAgICAgICAgICBkb3RuZXQuYnVpbGQocm9vdCwgZmlsZURpcilcbiAgICAgICAgICAgICAgICAub24oJ2Nsb3NlJywgY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIHdoaWxlIGJ1aWxkaW5nIGRvdG5ldCBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIHdoaWxlIGJ1aWxkaW5nIGRvdG5ldCBhcHBsaWNhdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc3QgbXNnID0gYEVycm9yOiBEb2xpdHRsZSBQcm9qZWN0OiBCdWlsZCBkb2VzIG5vdCBzdXBwb3J0IGxhbmd1YWdlICcke2xhbmd1YWdlfSdgO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge1VyaX0gZG9jdW1lbnRVcmlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ3VycmVudChkb2N1bWVudFVyaSkge1xuICAgIGNvbnN0IFtmaWxlRGlyLCByb290LCBsYW5ndWFnZV0gPSBnZXRSZXF1aXJlZFBhcmFtZXRlcnMoZG9jdW1lbnRVcmkpO1xuXG4gICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZSgnQnVpbGRpbmcgY3VycmVudCBwcm9qZWN0Jyk7XG4gICAgc3dpdGNoKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2NzaGFycCc6XG4gICAgICAgICAgICBkb3RuZXQuYnVpbGRDdXJyZW50KHJvb3QsIGZpbGVEaXIpXG4gICAgICAgICAgICAgICAgLm9uKCdjbG9zZScsIGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciB3aGlsZSBidWlsZGluZyBjdXJyZW50IGRvdG5ldCBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIHdoaWxlIGJ1aWxkaW5nIGN1cnJlbnQgZG90bmV0IGFwcGxpY2F0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgRXJyb3I6IERvbGl0dGxlIFByb2plY3Q6IEJ1aWxkIEN1cnJlbnQgZG9lcyBub3Qgc3VwcG9ydCBsYW5ndWFnZSAnJHtsYW5ndWFnZX0nYDtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge1VyaX0gZG9jdW1lbnRVcmlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmUoZG9jdW1lbnRVcmkpIHtcbiAgICBjb25zdCBbZmlsZURpciwgcm9vdCwgbGFuZ3VhZ2VdID0gZ2V0UmVxdWlyZWRQYXJhbWV0ZXJzKGRvY3VtZW50VXJpKTtcblxuICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ1Jlc3RvcmluZyBwcm9qZWN0Jyk7XG4gICAgc3dpdGNoKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2NzaGFycCc6XG4gICAgICAgICAgICBkb3RuZXQucmVzdG9yZShyb290LCBmaWxlRGlyKVxuICAgICAgICAgICAgICAgIC5vbignY2xvc2UnLCBjb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3Igd2hpbGUgcmVzdG9yaW5nIGRvdG5ldCBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIHdoaWxlIHJlc3RvcmluZyBkb3RuZXQgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBFcnJvcjogRG9saXR0bGUgUHJvamVjdDogUmVzdG9yZSBkb2VzIG5vdCBzdXBwb3J0IGxhbmd1YWdlICcke2xhbmd1YWdlfSdgO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge1VyaX0gZG9jdW1lbnRVcmlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3QoZG9jdW1lbnRVcmkpIHtcbiAgICBjb25zdCBbZmlsZURpciwgcm9vdCwgbGFuZ3VhZ2VdID0gZ2V0UmVxdWlyZWRQYXJhbWV0ZXJzKGRvY3VtZW50VXJpKTtcblxuICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ1Rlc3RpbmcgcHJvamVjdCcpO1xuICAgIHN3aXRjaChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlICdjc2hhcnAnOlxuICAgICAgICAgICAgZG90bmV0LnRlc3Qocm9vdCwgZmlsZURpcilcbiAgICAgICAgICAgICAgICAub24oJ2Nsb3NlJywgY29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIHdoaWxlIHRlc3RpbmcgZG90bmV0IGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnZXJyb3Igd2hpbGUgdGVzdGluZyBkb3RuZXQgYXBwbGljYXRpb24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBFcnJvcjogRG9saXR0bGUgUHJvamVjdDogVGVzdCBkb2VzIG5vdCBzdXBwb3J0IGxhbmd1YWdlICcke2xhbmd1YWdlfSdgO1xuICAgICAgICAgICAgZ2xvYmFscy5kb2xpdHRsZU91dHB1dENoYW5uZWwuYXBwZW5kTGluZShtc2cpO1xuICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKG1zZylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7VXJpfSBkb2N1bWVudFVyaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVzdERlYnVnKGRvY3VtZW50VXJpKSB7XG4gICAgY29uc3QgW2ZpbGVEaXIsIHJvb3QsIGxhbmd1YWdlXSA9IGdldFJlcXVpcmVkUGFyYW1ldGVycyhkb2N1bWVudFVyaSk7XG5cbiAgICBnbG9iYWxzLmRvbGl0dGxlT3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKCdEZWJ1Z2dpbmcgcHJvamVjdCB0ZXN0cycpO1xuICAgIHN3aXRjaChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlICdjc2hhcnAnOlxuICAgICAgICAgICAgZG90bmV0LnRlc3REZWJ1Zyhyb290LCBmaWxlRGlyKVxuICAgICAgICAgICAgICAgIC5vbignY2xvc2UnLCBjb2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZSgnRXJyb3Igd2hpbGUgZGVidWdnaW5nIHRlc3QgZm9yIGRvdG5ldCBhcHBsaWNhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIHdoaWxlIGJ1aWxkaW5nIGRvdG5ldCBhcHBsaWNhdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc3QgbXNnID0gYEVycm9yOiBEb2xpdHRsZSBQcm9qZWN0OiBUZXN0IERlYnVnIGRvZXMgbm90IHN1cHBvcnQgbGFuZ3VhZ2UgJyR7bGFuZ3VhZ2V9J2A7XG4gICAgICAgICAgICBnbG9iYWxzLmRvbGl0dGxlT3V0cHV0Q2hhbm5lbC5hcHBlbmRMaW5lKG1zZyk7XG4gICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UobXNnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtVcml9IGRvY3VtZW50VXJpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0UmVydW4oZG9jdW1lbnRVcmkpIHtcbiAgICBjb25zdCBbZmlsZURpciwgcm9vdCwgbGFuZ3VhZ2VdID0gZ2V0UmVxdWlyZWRQYXJhbWV0ZXJzKGRvY3VtZW50VXJpKTtcblxuICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUoJ1JlcnVucyBwcm9qZWN0IHRlc3RzJyk7XG4gICAgc3dpdGNoKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgJ2NzaGFycCc6XG4gICAgICAgICAgICBkb3RuZXQucmVydW5UZXN0KHJvb3QsIGZpbGVEaXIpXG4gICAgICAgICAgICAgICAgLm9uKCdjbG9zZScsIGNvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciB3aGlsZSBkZWJ1Z2dpbmcgdGVzdCBmb3IgZG90bmV0IGFwcGxpY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnZXJyb3Igd2hpbGUgYnVpbGRpbmcgZG90bmV0IGFwcGxpY2F0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgRXJyb3I6IERvbGl0dGxlIFByb2plY3Q6IFRlc3QgUmVydW4gZG9lcyBub3Qgc3VwcG9ydCBsYW5ndWFnZSAnJHtsYW5ndWFnZX0nYDtcbiAgICAgICAgICAgIGdsb2JhbHMuZG9saXR0bGVPdXRwdXRDaGFubmVsLmFwcGVuZExpbmUobXNnKTtcbiAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShtc2cpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59Il19