
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';

/**
 *
 *
 * @export
 * @param {ArtifactDefinitionsPerFeature} artifactsPerFeature
 * @returns {FeatureNode}
 */
export function featureNodeFromArtifacts(artifactsPerFeature) {
    
}

const _subFeatures = new WeakMap();
export class FeatureNode extends TreeItem {

    /**
     *Creates an instance of FeatureNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, id) {
        super(label, collapsibleState);
        _subFeatures.set(this, []);
        super.tooltip = id;
    }

    /**
     * 
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addSubFeature(feature) {
        _subFeatures.get(this).push(feature);
    }
    
}