import { ProjectConfiguration } from '../Configuration/ProjectConfiguration';
import { BoundedContextNode } from './BoundedContextNode';
import { FeatureNode } from './FeatureNode';
import { Feature } from '../Configuration/Feature';
import { BoundedContextConfiguration } from '../Configuration/BoundedContextConfiguration';
import { TreeItemCollapsibleState } from 'vscode';
import { ArtifactDefinitionsPerFeature } from '../Configuration/ArtifactDefinitionsPerFeature';
import { ArtifactNode } from './ArtifactNode';

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
            console.log('Creating bounded context nodes')
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
    let artifacts = boundedContext.artifacts;
    let featureNodes = [];
    artifacts.artifacts.forEach(artifactsPerFeature => {
        let feature = boundedContext.topology.findFeature(artifactsPerFeature.featureId);
        if (feature === null) {
            const errMsg = `Found feature with id: '${artifactsPerFeature.featureId}' that doesn't exist in the topology`;
            console.error(errMsg);
            vscode.window.showErrorMessage(errMsg);
        } else {
            let featureNode = new FeatureNode(feature.name, TreeItemCollapsibleState.Collapsed, feature);
            buildArtifactNodes(artifactsPerFeature).forEach(artifact => {
                featureNode.addArtifact(artifact);
            });
            featureNodes.push(feature);
        }
    });
    return featureNodes;
}
/**
 *
 *
 * @param {ArtifactDefinitionsPerFeature} artifactsPerFeature
 * @returns {ArtifactNode[]}
 */
function buildArtifactNodes(artifactsPerFeature) {
    let artifacts = new Array (
        ...artifactsPerFeature.commands.map(artifact => new ArtifactNode(artifact.name, 'command', artifact.area, artifact.artifact)),
        ...artifactsPerFeature.eventSources.map(artifact => new ArtifactNode(artifact.name, 'eventSource', artifact.area, artifact.artifact)),
        ...artifactsPerFeature.events.map(artifact => new ArtifactNode(artifact.name, 'event', artifact.area, artifact.artifact)),
        ...artifactsPerFeature.queries.map(artifact => new ArtifactNode(artifact.name, 'query', artifact.area, artifact.artifact)),
        ...artifactsPerFeature.readModels.map(artifact => new ArtifactNode(artifact.name, 'readModel', artifact.area, artifact.artifact)),
    );
    return artifacts;
}
