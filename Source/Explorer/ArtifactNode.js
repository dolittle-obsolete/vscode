
import {TreeItem} from 'vscode';


export class ArtifactNode extends TreeItem {


    constructor (label, collapsibleState, id) {
        super(label, collapsibleState);
        super.tooltip = `Artifact id: '${id}'`;
        
    }    
}