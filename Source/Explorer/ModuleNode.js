
import {TreeItem, TreeItemCollapsibleState} from 'vscode';
import { FeatureNode } from './FeatureNode';

const _features = new WeakMap();
export class ModuleNode extends TreeItem {
    /**
     *Creates an instance of ModuleNode.
     * @param {string} label
     * @param {TreeItemCollapsibleState} collapsibleState
     * @param {string} moduleId
     * @memberof FeatureNode
     */
    constructor (label, collapsibleState, moduleId) {
        super(`${label} - Module`, collapsibleState);
        _features.set(this, []);
       super.tooltip = `Module id: '${moduleId}'`;
    }
    get children() {
        return _features.get(this);
    }
    /**
     * 
     *
     * @param {FeatureNode} feature
     * @memberof FeatureNode
     */
    addFeature(feature) {
        _features.get(this).push(feature);
    }

}