/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as vscode from 'vscode';
import {initializer} from '@dolittle/tooling.common';
import {ICanOutputMessages, IBusyIndicator, NullBusyIndicator} from '@dolittle/tooling.common.utilities';
import { Outputter } from './Outputter';
import { BusyIndicator } from './BusyIndicator';
import { commandManager, ICommandManager } from '@dolittle/tooling.common.commands';

/**
 * Initializes and holds 'global' objects 
 *
 * @class Globals
 */
class Globals {
    private _outputter: ICanOutputMessages;
    private _busyIndicator: IBusyIndicator;
    /**
     * Instantiates an instance of {Globals}.
     */
    constructor() {
        this._outputter = new Outputter();
        this._busyIndicator = new BusyIndicator();

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
    
    /**
     * Gets the command manager and initializes the tooling system if not initialized
     *
     * @returns {ICommandManager} The command manager
     */
    async getCommandsManager() {
        if (!initializer.isInitialized) await this.initialize();
        return commandManager;
    }

    /**
     * Initializes the globals
     *
     */
    async initialize() {
        if (!initializer.isInitialized) await initializer.initialize(new NullBusyIndicator());
    }
}

export default new Globals();