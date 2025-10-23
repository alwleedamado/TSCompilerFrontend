import { Inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { AbstractQuery } from "app/abstractions/state/store-query";
import { AbstractStore } from "app/abstractions/state/store-state";
import { MessageService } from "primeng/api";
import { Observable } from 'rxjs';
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { setFormFromObject } from "utils/helpers/setFormFromObject";
import { IGuardableForm } from "utils/models/IGuardableForm";
import { IBaseForm } from "./i-base-form";

@Injectable()
export abstract class BaseForm<T> implements IBaseForm, IGuardableForm {
    loading$: Observable<boolean>;
    extraActionsLoading$: Observable<boolean>;

    abstract title: string;

    abstract closeForm(): void;
    abstract ngOnInit();

    entity: T;

    isFormEnabled = true;

    closeAfterAction = true;

    componentActive = true;
    id: string | number;
    form: FormGroup;

    formBase: any;

    @Inject(MessageService)
    protected messageService: MessageService;

    @Inject(LayoutUtilsService)
    protected layoutUtilService: LayoutUtilsService;

    constructor(
        protected store: AbstractStore<T>,
        protected storeService: AbstractStateService<T>,
        protected storeQuery: AbstractQuery<T>
    ) {
        this.createForm();
        if (this.form)
            this.formBase = this.form.value;
        else
            this.formBase = {};

      
    }

    ngOnDestroy() {
        this.componentActive = false;
    }

    reset() {
    }

    save(closeAfter: boolean = true) {




    }

    initForm(entity?: Partial<T>) {
        if (entity) {
            setFormFromObject(this.form, entity);
            this.formBase = this.form.value;
        }
        else {
            this.form.patchValue(this.formBase)
        }

        this.afterFormInit(entity);
    }

    cleanForm() {
        this.form.markAsUntouched();
        this.form.markAsPristine();
    }

    isDirty() {
        return this.form.dirty && this.form.touched
    }

    afterFormInit(entity?: Partial<T>) { }

    abstract formValue(): T;
    abstract createForm(): void;
    abstract storeSubscriptions(): void;
}