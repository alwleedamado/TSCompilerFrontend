import { Inject, Injectable } from "@angular/core";
import { UiStore } from "./ui.store";

@Injectable({ providedIn: 'root' })
export class UiStoreService {
    @Inject(UiStore)
    private Store: UiStore;

    updateLanguage(newLang: 'en' | 'ar') {
        this.Store.update(s => ({ ...s, language: newLang }))
    }
}