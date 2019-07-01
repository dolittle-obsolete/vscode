/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { IBusyIndicator } from "@dolittle/tooling.common.utilities";
import * as vscode from 'vscode';

export class BusyIndicator implements IBusyIndicator {
    text: string = 'something';
    isBusy: boolean = false;



    

    createNew(text?: string | undefined): IBusyIndicator {
        throw new Error('Method not implemented');
    }
    start(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    stop(): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    stopAndPersist(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    succeed(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    fail(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    info(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }
    warn(text?: string | undefined): IBusyIndicator {
        throw new Error("Method not implemented.");
    }


}