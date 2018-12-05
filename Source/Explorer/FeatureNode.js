
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';
import { Feature } from '../Configuration/Feature';
import { ArtifactNode } from './ArtifactNode';

export class FeatureNode extends TreeItem {
    /**
     *Creates an instance of FeatureNode.
     * @param {Feature} feature
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, feature) {
        super(feature.name, TreeItemCollapsibleState.Collapsed);
        this._features = [];
        this._artifacts = [];
        feature.subFeatures.forEach(subFeature => this.addSubFeature(new FeatureNode(subFeature.name, TreeItemCollapsibleState.Collapsed, subFeature)));
        super.tooltip = `Feature id: '${feature.feature}'`;
    }
    get features() {
        return this._features;
    }
    /**
     * 
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addSubFeature(feature) {
        this._features.push(feature);
    }

    /**
     * 
     *
     * @param {ArtifactNode} artifact
     * @memberof FeatureNode
     */
    addArtifact(artifact) {
        this._artifacts.push(artifact);
    }
}