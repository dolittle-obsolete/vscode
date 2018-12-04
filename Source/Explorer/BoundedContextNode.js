
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';


const _features = new WeakMap();

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
        _features.set(this, []);
        super.tooltip = id;
    }
    /**
     * Gets the features of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     * @returns {FeatureNode[]}
     */
    get features() {
        return _features.get(this);
    }
    /**
     * Adds a feature to the bounded context
     *
     * @param {FeatureNode} feature
     * @memberof BoundedContextNode
     */
    addFeature(feature) {
        _features.get(this).push(feature);
    }
    
}