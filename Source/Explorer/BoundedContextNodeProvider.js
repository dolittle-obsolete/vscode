/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ProjectConfiguration } from '../Configuration/ProjectConfiguration';
import { BoundedContextNode } from './BoundedContextNode';
import { FeatureNode } from './FeatureNode';
import { FeatureDefinition } from '../Configuration/FeatureDefinition';
import { BoundedContext } from '../Configuration/BoundedContext';
import { TreeItemCollapsibleState } from 'vscode';
import { ArtifactsByTypeDefinition } from '../Configuration/ArtifactsByTypeDefinition';
import { ArtifactNode } from './ArtifactNode';
import { Artifacts } from '../Configuration/Artifacts';
import { ModuleNode } from './ModuleNode';
import { ModuleDefinition } from '../Configuration/ModuleDefinition';

const vscode = require('vscode');

export class BoundedContextNodeProvider {
    #onDidChangeTreeData;
    #config: ProjectConfiguration;
    /**
     *Creates an instance of BoundedContextNodeProvider.
     * @param {ProjectConfiguration} config
     * @memberof BoundedContextNodeProvider
     */
    constructor(config) {    
        this.#onDidChangeTreeData = new vscode.EventEmitter();
        this.#config = config;
    }
    /**
     * Gets the project configuration
     *
     * @readonly
     * @memberof BoundedContextNodeProvider
     */
    get config() {
        return this.#config;
    }
    /**
     * 
     *
     * @readonly
     * @memberof BoundedContextNodeProvider
     */
    get onDidChangeTreeData() {
        return this.#onDidChangeTreeData.event;
    }

    refresh() {
        this.#onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    /**
     * Gets the children nodes
     *
     * @param {BoundedContextNode | ModuleNode | FeatureNode} element
     * @memberof BoundedContextNodeProvider
     * @returns {Promise<any[]>}
     */
    getChildren(element) {
        if (this.config.boundedContexts.length === 0) {
            vscode.window.showInformationMessage('No bounded contexts in this project');
            return Promise.resolve([]);
        }
        if (element === undefined) {
            let boundedContextNodes = [];
            this.config.boundedContexts.forEach( boundedContext => {
                boundedContextNodes.push(createBoundedContextNode(boundedContext));
            });
            return Promise.resolve(boundedContextNodes);

        } else {
            return Promise.resolve(element.children);
        }
    }
    
}
/**
 * Creates a bounded context node
 *
 * @param {BoundedContext} boundedContext
 * @returns {BoundedContextNode}
 */
function createBoundedContextNode(boundedContext) {
    let node = new BoundedContextNode(boundedContext.boundedContextName, TreeItemCollapsibleState.Collapsed, boundedContext.boundedContext);
    
    findNodes(boundedContext).forEach(item => node.addChildNode(item));
    return node;
}

/**
 * Creates all the features for a BoundedContextNode
 *
 * @param {BoundedContext} boundedContext
 * @returns {FeatureNode[] | ModuleNode[]}
 */
function findNodes(boundedContext) {
    let artifacts = boundedContext.artifacts;
    let nodes = [];
    if (!boundedContext.topology.hasModules()) {
        boundedContext.topology.features.forEach( (featureDefinition, feature) => {
            nodes.push(createFeatureNode(feature, featureDefinition, artifacts));
        });
    } else {
        boundedContext.topology.modules.forEach( (moduleDefinition, module) => {
            nodes.push(createModuleNode(module, moduleDefinition, artifacts));
        });
    }
    return nodes;
}
/**
 *
 *
 * @param {string} module
 * @param {ModuleDefinition} moduleDefinition
 * @param {Artifacts} artifacts
 * @returns {ModuleNode}
 */
function createModuleNode(module, moduleDefinition, artifacts) {
    let moduleNode = new ModuleNode(moduleDefinition.name, TreeItemCollapsibleState.Collapsed, module);
    moduleDefinition.features.forEach((featureDefinition, feature) => {
        moduleNode.addFeature(createFeatureNode(feature, featureDefinition, artifacts));
    });
    return moduleNode;
}
/**
 *
 *
 * @param {string} feature
 * @param {FeatureDefinition} featureDefinition
 * @param {Artifacts} artifacts
 * @returns {FeatureNode}
 */
function createFeatureNode(feature, featureDefinition, artifacts) {
    let featureNode = new FeatureNode(featureDefinition.name, TreeItemCollapsibleState.Collapsed, feature);
    buildArtifactNodes(artifacts.artifacts.get(feature)).forEach(artifact => {
        featureNode.addArtifact(artifact);
    });
    featureDefinition.subFeatures.forEach((subFeatureDefinition, subFeature) => {
        featureNode.addSubFeature(createFeatureNode(subFeature, subFeatureDefinition, artifacts));
    });

    return featureNode;
}
/**
 *
 *
 * @param {ArtifactsByTypeDefinition} artifactsPerFeature
 * @returns {ArtifactNode[]}
 */
function buildArtifactNodes(artifactsPerFeature) {
    let result = [];
    artifactsPerFeature.commands.forEach( (artifact, feature) => {
        result.push(new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, feature, 'Command'));
    });

    artifactsPerFeature.events.forEach( (artifact, feature) => {
        result.push(new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, feature, 'Event'));
    });

    artifactsPerFeature.eventSources.forEach( (artifact, feature) => {
        result.push(new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, feature, 'Event Source'));
    });

    artifactsPerFeature.readModels.forEach( (artifact, feature) => {
        result.push(new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, feature, 'Read Model'));
    });

    artifactsPerFeature.queries.forEach( (artifact, feature) => {
        result.push(new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, feature, 'Query'));
    });

    return result;
}
