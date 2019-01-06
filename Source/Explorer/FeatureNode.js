/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { ArtifactsByTypeDefinition } from '../Configuration/ArtifactsByTypeDefinition';
import { FeatureDefinition } from '../Configuration/FeatureDefinition';
import { ArtifactNode } from './ArtifactNode';

export class FeatureNode extends TreeItem {
    #subFeatures: FeatureNode[];
    #artifacts: ArtifactNode[];
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
        super.tooltip = `Feature id: '${featureId}'`;
        
        this.#subFeatures = [];
        this.#artifacts = [];
    }
    /**
     * Gets the subfeatures
     *
     * @readonly
     * @memberof FeatureNode
     */
    get subFeatures() {
        return this.#subFeatures;
    }
    /**
     * Gets the artifacts
     *
     * @readonly
     * @memberof FeatureNode
     */
    get artifacts() {
        return this.#artifacts;
    }
    /**
     * Get the children nodes
     *
     * @readonly
     * @memberof FeatureNode
     */
    get children() {
        return this.subFeatures.concat(this.artifacts);
    }
    /**
     * Adds a subfeature
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addSubFeature(feature) {
        this.#subFeatures.push(feature);
    }

    /**
     * Adds an artifact
     *
     * @param {ArtifactNode} artifact
     * @memberof FeatureNode
     */
    addArtifact(artifact) {
        this.#artifacts.push(artifact);
    }
}