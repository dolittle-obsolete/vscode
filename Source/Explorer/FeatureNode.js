
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';
import { Feature } from '../Configuration/Feature';
import { ArtifactNode } from './ArtifactNode';

const _subFeatures = new WeakMap();
const _artifacts = new WeakMap();
export class FeatureNode extends TreeItem {
    /**
     *Creates an instance of FeatureNode.
     * @param {string} featureId
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, featureId) {
        super(`${label} - Feature`, collapsibleState);
        _subFeatures.set(this, []);
        _artifacts.set(this, []);
       super.tooltip = `Feature id: '${featureId}'`;
    }
    get children() {
        return _subFeatures.get(this).concat(_artifacts.get(this));
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

    /**
     * 
     *
     * @param {ArtifactNode} artifact
     * @memberof FeatureNode
     */
    addArtifact(artifact) {
        _artifacts.get(this).push(artifact);
    }
}