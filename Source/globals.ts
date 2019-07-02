/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {initializer} from '@dolittle/tooling.common';
import {ICanOutputMessages, IBusyIndicator, NullBusyIndicator} from '@dolittle/tooling.common.utilities';
import { commandManager } from '@dolittle/tooling.common.commands';
import { dependencyResolvers, dependencyDiscoverResolver } from '@dolittle/tooling.common.dependencies';
import { dolittleConfig } from '@dolittle/tooling.common.configurations';
import { Outputter, ICommands, BusyIndicator, PromptDependencyResolver, Commands } from './index';

/**
 * Initializes and holds 'global' objects 
 *
 * @class Globals
 */
class Globals {
    private _outputter: ICanOutputMessages;
    private _busyIndicator: IBusyIndicator;
    private _commandsSystem!: ICommands;
    /**
     * Instantiates an instance of {Globals}.
     */
    constructor() {
        this._outputter = new Outputter();
        this._busyIndicator = new BusyIndicator();
        dependencyResolvers.add(new PromptDependencyResolver(dependencyDiscoverResolver, dolittleConfig, this.outputter))
    }
    /**
     * Gets the global instance of {ICanOutputMessages}
     *
     * @readonly
     */
    get outputter() { return this._outputter; };
    
    /**
     * Gets the {IBusyIndicator}
     *
     * @readonly
     */
    get busyIndicator() { return this._busyIndicator; }
    
    async getCommandsSystem() { 
        if (!initializer.isInitialized) await this.initialize();
        return this._commandsSystem;
    }

    /**
     * Initializes the globals
     *
     */
    async initialize() {
        if (!initializer.isInitialized) {
            await initializer.initialize(new NullBusyIndicator());
            this._commandsSystem = new Commands(commandManager, dependencyResolvers, this._outputter)
        }
    }
}

export default new Globals();