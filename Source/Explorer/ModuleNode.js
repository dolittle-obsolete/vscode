/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';

export class ModuleNode extends TreeItem {
    #features;
    /**
     *Creates an instance of ModuleNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} moduleId
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, moduleId) {
        super(`${label} - Module`, collapsibleState);
        super.tooltip = `Module id: '${moduleId}'`;
        this.#features = [];
    }
    get children() {
        return this.#features;
    }
    /**
     * 
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addFeature(feature) {
        this.#features.push(feature);
    }

}