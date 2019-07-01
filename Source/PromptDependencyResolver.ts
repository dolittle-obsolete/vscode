/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { 
    IDependency, ICanResolveSyncDependencies, IDependencyDiscoverResolver, MissingCoreLanguage, MissingDestinationPath, argumentUserInputType, 
    DiscoverAndPromptDependency, IPromptDependency, confirmUserInputType, dependencyIsPromptDependency, dependencyIsDiscoverDependency, IDiscoverDependency, inputUserInputType, chooseOneUserInputType, chooseMultipleUserInputType 
} from '@dolittle/tooling.common.dependencies';
import * as vscode from 'vscode';
import { Outputter } from './Outputter';

export class PromptDependencyResolver implements ICanResolveSyncDependencies  {
    
    /**
     * Initializes a new instance of {Inquirer}
     * @param {IDependenciesManager} dependenciesManager
     * @param {any} dolittleConfig
     */
    constructor(private _discoverResolver: IDependencyDiscoverResolver, private _dolittleConfig: any, private _outputter: Outputter) { }
    
    canResolve(dependency: IDependency): boolean {
        return  (dependency as any).userInputType !== undefined && (dependency as any).userInputType !== argumentUserInputType;
    }
    
    async resolve(context: any, dependencies: IDependency[], destinationPath?: string, coreLanguage?: string, args?: string[]): Promise<any> {
        for (let dep of dependencies) {
            context[dep.name] = await this.handleDependency(dep, destinationPath, coreLanguage);
        }
        return context;

    }

    private async handleDependency(dep: IDependency, destinationPath?: string, language?: string) {
        let choices: any[] = [];
        if (this.dependencyIsDiscoverAndPrompt(dep)) {
            choices = this.discoverChoices(<IDiscoverDependency & IPromptDependency>dep, destinationPath, language);
        }
        if (! this.dependencyIsDiscoverAndPrompt || !dependencyIsPromptDependency(dep)) {
            this._outputter.warn(`Found an invalid 'type' on dependency: '${dep.type}'`);
            throw new Error(`Invalid dependency. Type: '${dep.type}'`);
        }
        choices = dep.choices? 
            dep.choices.concat(choices)
            : choices;

        if (dep.customInput) choices.push(dep.customInput); 
        let val: any;
        if (dep.userInputType === inputUserInputType) val = await this.getResponseFromTextInput(dep);  
        else if (dep.userInputType === chooseOneUserInputType) val = await this.getResponseFromConfirm(dep);
        else if (dep.userInputType === confirmUserInputType) val = await this.getResponseFromChoice(dep, choices);
        else if (dep.userInputType === chooseMultipleUserInputType) await this.getResponseFromMultipleChoice(dep, choices)
        else {
            this._outputter.warn(`Found an invalid 'userInputType' on dependency: '${dep.userInputType}'`);
            throw new Error(`Invalid dependency. 'userInputType': '${dep.userInputType}'`);
        }
        return val;

    }

    private dependencyIsDiscoverAndPrompt(dep: IDependency) {
        return dependencyIsDiscoverDependency(dep) && (<any>dep).userInputType !== undefined;
    }

    private discoverChoices(dep: IDiscoverDependency & IPromptDependency, destinationPath?: string, language?: string) {
        if (!destinationPath) throw new MissingDestinationPath();
            if (!language) throw new MissingCoreLanguage();
            let discoveryResult = this._discoverResolver.resolve(<DiscoverAndPromptDependency>dep, destinationPath, language, this._dolittleConfig);
            return typeof discoveryResult === 'string' || discoveryResult instanceof String?
                [discoveryResult]
                : discoveryResult.length === 0?
                    []
                    : discoveryResult[0].hasOwnProperty('namespace') !== undefined? 
                        (<{value: string, namespace: string}[]>discoveryResult).map(item => new Object(
                            {
                                detail: `${item.namespace}.${item.value}`, 
                                describe: `${item.namespace}.${item.value}`, 
                                label: {namespace: item.namespace, value: item.value} 
                            })
                        )
                    : discoveryResult;
    }
    private async getResponseFromTextInput(dep: IPromptDependency) {
        let res: string | undefined;
        do {
            res = await vscode.window.showInputBox({prompt: dep.promptMessage, ignoreFocusOut: true});

        } while(!res && !dep.optional)
        return res;
    }

    private async getResponseFromConfirm(dep: IPromptDependency) {
        let res: string | undefined;
        do {
            res = await vscode.window.showQuickPick(['Confirm', 'Deny'], {canPickMany: false, ignoreFocusOut: true, placeHolder: dep.promptMessage }); 
        } while(! res && !dep.optional)
        return res === 'Confirm'? true : false;
    }
    private async getResponseFromChoice(dep: IPromptDependency, choices: any[]) {
        let res: any | undefined;
        do {
            res = await vscode.window.showQuickPick(choices, {canPickMany: false, ignoreFocusOut: true, placeHolder: dep.promptMessage });
        } while(!res && !dep.optional)
        return res? 
                res.label? 
                    res.label 
                    : res
                : undefined;
    }

    private async getResponseFromMultipleChoice(dep: IPromptDependency, choices: any[]) {
        let res: any[] | undefined;
        do {
            res = await vscode.window.showQuickPick(choices, {canPickMany: true, ignoreFocusOut: true, placeHolder: dep.promptMessage });
        } while( !res && !dep.optional)

        return res? res.map(_ => _.label? _.label : _) : undefined;
    }
}