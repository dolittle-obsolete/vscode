
import {TreeItem, TreeItemCollapsibleState} from 'vscode';


export class ArtifactNode extends TreeItem {

    /**
     *Creates an instance of ArtifactNode.
     * @param {string} artifactName
     * @param {string} artifactType
     * @param {string} artifactArea
     * @param {string} artifactId
     * @memberof ArtifactNode
     */
    constructor (artifactName, artifactType, artifactArea, artifactId) {
        super(artifactName, TreeItemCollapsibleState.None);
        super.tooltip = `Artifact type: ${artifactType} Artifact id: '${artifactId} from area: '${artifactArea}'`;
        
    }    
}