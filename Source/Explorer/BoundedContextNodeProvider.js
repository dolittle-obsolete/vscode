/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ProjectConfiguration } from '../Configuration/ProjectConfiguration';
import { BoundedContextNode } from './BoundedContextNode';
import { FeatureNode } from './FeatureNode';
import { Feature } from '../Configuration/Feature';
import { BoundedContext } from '../Configuration/BoundedContext';
import { TreeItemCollapsibleState } from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';
import { ArtifactNode } from './ArtifactNode';
import { Artifacts } from '../Configuration/Artifacts';
import { ModuleNode } from './ModuleNode';
import { ModuleDefinition } from '../Configuration/ModuleDefinition';

const vscode = require('vscode');

export class BoundedContextNodeProvider {
    #onDidChangeTreeData;
    #config
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
     *
     *
     * @param {BoundedContextNode | FeatureNode} element
     * @memberof BoundedContextNodeProvider
     * @returns {Promise<any[]>}
     */
    getChildren(element) {
        if (this.#config.boundedContexts.length === 0) {
            vscode.window.showInformationMessage('No bounded contexts in this project');
            return Promise.resolve([]);
        }
        if (element === undefined) {
            let boundedContextNodes = [];
            this.#config.boundedContexts.forEach( boundedContext => {
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
        boundedContext.topology.features.forEach(feature => {
            nodes.push(createFeatureNode(feature, artifacts));
        });
    } else {
        boundedContext.topology.modules.forEach(module => {
            nodes.push(createModuleNode(module, artifacts));
        });
    }
    return nodes;
}
/**
 *
 *
 * @param {ModuleDefinition} module
 * @param {Artifacts} artifacts
 * @returns {ModuleNode}
 */
function createModuleNode(module, artifacts) {
    let moduleNode = new ModuleNode(module.name, TreeItemCollapsibleState.Collapsed, module.module);
    module.features.forEach(feature => {
        moduleNode.addFeature(createFeatureNode(feature, artifacts));
    });
    return moduleNode;
}
/**
 *
 *
 * @param {Feature} feature
 * @param {Artifacts} artifacts
 * @returns {FeatureNode}
 */
function createFeatureNode(feature, artifacts) {
    let featureNode = new FeatureNode(feature.name, TreeItemCollapsibleState.Collapsed, feature.feature);
    buildArtifactNodes(artifacts.artifacts.get(feature.feature)).forEach(artifact => {
        featureNode.addArtifact(artifact);
    });
    feature.subFeatures.forEach(subFeature => {
        featureNode.addSubFeature(createFeatureNode(subFeature, artifacts));
    });

    return featureNode;
}
/**
 *
 *
 * @param {ArtifactDefinitionsPerFeature} artifactsPerFeature
 * @returns {ArtifactNode[]}
 */
function buildArtifactNodes(artifactsPerFeature) {
    let artifacts = new Array (
        ...artifactsPerFeature.commands.map(artifact => new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, artifact.artifact, 'Command')),
        ...artifactsPerFeature.events.map(artifact => new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, artifact.artifact, 'Event')),
        ...artifactsPerFeature.eventSources.map(artifact => new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, artifact.artifact, 'Event Source')),
        ...artifactsPerFeature.readModels.map(artifact => new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, artifact.artifact, 'Read Model')),
        ...artifactsPerFeature.queries.map(artifact => new ArtifactNode(artifact.name, TreeItemCollapsibleState.None, artifact.artifact, 'Query')),
    );
    return artifacts;
}
