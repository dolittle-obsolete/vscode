import { loadProjectConfiguration } from './Configuration/ProjectConfiguration';

/**
 * @type {WeakMap<globals, import('vscode')>}
 */
const _vscode = new WeakMap();
/**
 * @type {WeakMap<globals, import('./Configuration/ProjectConfiguration').ProjectConfiguration>}
 */
const _projectConfiguration = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
const _dolittleOutputChannel = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
const _dolittleProjectOutputChannel = new WeakMap();
/**
 * @type {WeakMap<globals, import('vscode').OutputChannel>}
 */
const _dolittleCliOutputChannel = new WeakMap();


const dolittleOutputChannelName = 'Dolittle';
const dolittleProjectOutputChannelName = 'Dolittle Project';
const dolittleCliPutputChannelName = 'Dolittle CLI';

class globals {    
    constructor() {
        _vscode.set(this, require('vscode'));
        _projectConfiguration.set(this, null);
        _dolittleOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleOutputChannelName));
        _dolittleProjectOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleProjectOutputChannelName));
        _dolittleCliOutputChannel.set(this, this.vscode.window.createOutputChannel(dolittleCliPutputChannelName));
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */
    get vscode() {
        return _vscode.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */
    get projectConfiguration() {
        return _projectConfiguration.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */
    get dolittleOutputChannel() {
        return _dolittleOutputChannel.get(this);
    }
    /**
     *
     *
     * @readonly
     * @memberof globals
     */
    get dolittleProjectOutputChannel() {
        return _dolittleProjectOutputChannel.get(this);
    }

    /**
     *
     *
     * @readonly
     * @memberof globals
     */
    get dolittleCliOutputChannel() {
        return _dolittleCliOutputChannel.get(this);
    }
    /**
     *
     *
     * @memberof globals
     */
    async setProjectConfiguration() {
        try {
            this.dolittleOutputChannel.appendLine('Loading dolittle project');
            let config = await loadProjectConfiguration();
            if (config === undefined) throw 'Project configuration was undefined';
            _projectConfiguration.set(this, config);
        } catch (error) {
            throw error;
        }
    }
}
export default new globals();