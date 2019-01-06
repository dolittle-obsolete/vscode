/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';
import { Feature } from '../Configuration/Feature';
import { ArtifactNode } from './ArtifactNode';

export class FeatureNode extends TreeItem {
    #subFeatures
    #artifacts;
    /**
     *Creates an instance of FeatureNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} featureId
     * 
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, featureId) {
        super(`${label} - Feature`, collapsibleState);
        this.#subFeatures = [];
        this.#artifacts = [];
        super.tooltip = `Feature id: '${featureId}'`;
    }
    get children() {
        return this.#subFeatures.concat(this.#artifacts);
    }
    /**
     * 
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addSubFeature(feature) {
        this.#subFeatures.push(feature);
    }

    /**
     * 
     *
     * @param {ArtifactNode} artifact
     * @memberof FeatureNode
     */
    addArtifact(artifact) {
        this.#artifacts.push(artifact);
    }
}