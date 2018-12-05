
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';

export class BoundedContextNode extends TreeItem {

    /**
     *Creates an instance of BoundedContextNode.
     * @param {string} label Bounded context name
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id The Bounded context id
     * @memberof BoundedContextNode
     */
    constructor (label, collapsibleState, id) {
        super(label, collapsibleState);
        this._features = [];
        super.tooltip = `id: '${id}'`;
    }
    /**
     * Gets the features of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     * @returns {FeatureNode[]}
     */
    get features() {
        return this._features;
    }
    /**
     * Adds a feature to the bounded context
     *
     * @param {FeatureNode} feature
     * @memberof BoundedContextNode
     */
    addFeature(feature) {
        this._features.push(feature);
    }
    
}