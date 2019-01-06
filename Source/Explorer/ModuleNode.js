/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';

export class ModuleNode extends TreeItem {
    #features: FeatureNode[];
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
        super.contextValue = 'module';
        this.#features = [];
    }
    /**
     * Gets the features
     *
     * @readonly
     * @memberof ModuleNode
     */
    get features() {
        return this.#features;
    }
    /**
     * Gets the children nodes
     *
     * @readonly
     * @memberof ModuleNode
     */
    get children() {
        return this.features;
    }
    /**
     * Adds a feature node to the modulenode
     *
     * @param {FeatureNode} feature
     * @memberof ModuleNode
     */
    addFeature(feature) {
        this.#features.push(feature);
    }

}