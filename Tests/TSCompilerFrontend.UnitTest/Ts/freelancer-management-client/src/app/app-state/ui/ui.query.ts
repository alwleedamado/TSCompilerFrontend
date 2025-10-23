import { Query } from "@datorama/akita";
import { UiState, UiStore } from "./ui.store";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UiQuery extends Query<UiState> {
    constructor(store: UiStore) {
        super(store)
    }

    language$: Observable<'en' | 'ar'> = this.select(state => state.language)
}