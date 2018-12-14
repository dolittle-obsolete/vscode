
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';
import { ModuleNode } from './ModuleNode';

const _childrenNodes = new WeakMap();
export class BoundedContextNode extends TreeItem {

    /**
     *Creates an instance of BoundedContextNode.
     * @param {string} label Bounded context name
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} id The Bounded context id
     * @memberof BoundedContextNode
     */
    constructor (label, collapsibleState, id) {
        super(`${label} - Bounded Context`, collapsibleState);
        _childrenNodes.set(this, []);
        super.tooltip = `id: '${id}'`;
    }
    /**
     * Gets the features of this bounded context
     *
     * @readonly
     * @memberof BoundedContextNode
     * @returns {FeatureNode[]}
     */
    get children() {
        return _childrenNodes.get(this);
    }
    /**
     * Adds a feature to the bounded context
     *
     * @param {FeatureNode | ModuleNode} feature
     * @memberof BoundedContextNode
     */
    addChildNode(feature) {
        _childrenNodes.get(this).push(feature);
    }
    
}