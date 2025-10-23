import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export interface UiState {
    language: 'en' | 'ar';
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'Ui'})
export class UiStore extends Store<UiState> {
    constructor() {
        super(createUiState())
    }
}

function createUiState(): UiState {
    return {
        language: 'en'
    }
}