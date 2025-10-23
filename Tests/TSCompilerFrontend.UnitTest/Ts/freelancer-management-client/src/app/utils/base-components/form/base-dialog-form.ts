import { Injectable, Input } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { AbstractQuery } from "app/abstractions/state/store-query";
import { AbstractStore } from "app/abstractions/state/store-state";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable } from 'rxjs';
import { BaseForm } from "./base-form";

@Injectable()
export abstract class BaseDialogForm<T> extends BaseForm<T> {
    [x: string]: any;

    @Input() override id;
    @Input() params: any;

    entity$: Observable<T>;

    constructor(
        protected ref: DynamicDialogRef,
        private config: DynamicDialogConfig,
        store: AbstractStore<T>,
        storeService: AbstractStateService<T>,
        storeQuery: AbstractQuery<T>
    ) {
        super(store, storeService, storeQuery)
    }


    ngOnInit() {
        // populate components fields
        // todo limit it to only accept @Input() props
        this.config?.data &&
            Object.keys(this.config?.data).forEach(key => this[key] = this.config.data[key])

        if (this.form) {
            this.form.get('id')?.setValue(this.id);
        }

        this.storeSubscriptions();

    }


    closeForm(dialogResult?) {
        this.ref.close(dialogResult)
    }

    formValue() {
        return this.form.value;
    }

    get isAdding() {
        return !this.isEdit
    }

    get isEdit() {
        return !!this.id
    }
}