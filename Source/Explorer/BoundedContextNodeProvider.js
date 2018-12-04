import { ProjectConfiguration } from '../Configuration/ProjectConfiguration';
import { BoundedContextNode } from './BoundedContextNode';
import { FeatureNode } from './FeatureNode';
import { BoundedContextConfiguration } from '../Configuration/BoundedContextConfiguration';
import { TreeItemCollapsibleState } from 'vscode';
import { fileExistsSync, readJsonFromUriSync, readJsonFromFileSync } from '../helpers';



const vscode = require('vscode');


export class BoundedContextNodeProvider {
    /**
     *Creates an instance of BoundedContextNodeProvider.
     * @param {ProjectConfiguration} config
     * @memberof BoundedContextNodeProvider
     */
    constructor(config) {    
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this._config = config;
        
    }
    /**
     * 
     *
     * @readonly
     * @memberof BoundedContextNodeProvider
     */
    get onDidChangeTreeData() {
        return this._onDidChangeTreeData.event;
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    /**
     *
     *
     * @param {BoundedContextNode} element
     * @memberof BoundedContextNodeProvider
     * @returns {Promise<FeatureNode[] | BoundedContextNode[]>}
     */
    getChildren(element) {
        if (this._config.boundedContexts.length === 0) {
            vscode.window.showInformationMessage('No bounded contexts in this project');
            return Promise.resolve([]);
        }
        if (element === undefined) {
            let boundedContextNodes = [];
            this._config.boundedContexts.forEach( boundedContext => {
                boundedContextNodes.push(createBoundedContextNode(boundedContext));
            });

            return Promise.resolve(boundedContextNodes);

        } else {
            return Promise.resolve(element.features);
        }
    }
    
}
/**
 * Creates a bounded context node
 *
 * @param {BoundedContextConfiguration} boundedContext
 * @returns {BoundedContextNode}
 */
function createBoundedContextNode(boundedContext) {
    let node = new BoundedContextNode(boundedContext.boundedContextName, TreeItemCollapsibleState.Collapsed, boundedContext.boundedContext);
    
    findAllFeatures(boundedContext).forEach(item => node.addFeature(item));
    return node;
}

/**
 * Creates all the features for a BoundedContextNode
 *
 * @param {BoundedContextConfiguration} boundedContext
 * @returns {FeatureNode[]}
 */
function findAllFeatures(boundedContext) {
    const path = require('path');
    let artifacts = boundedContext.artifacts;
    artifacts.artifacts.forEach(artifactsPerFeature => {
        
    })

    

}