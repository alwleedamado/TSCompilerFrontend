import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { IBaseSingleDetail } from "./i-base-single-view";
import { AbstractStore, StoreState } from "app/abstractions/state/store-state";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { AbstractQuery } from "app/abstractions/state/store-query";

@Injectable()
export abstract class BaseSingleDetail<T> implements IBaseSingleDetail<T> {
    componentActive = true;


    loading$: Observable<boolean>;
    deleting$: Observable<boolean>;

    dispatchAction = true;


    abstract id: any;
    componentName: any;
    moduleName: any;
    abstract get title();

    entity: T
    entity$: Observable<T>

    constructor(
        protected layout: LayoutUtilsService,
        private formComponent: ComponentType<any>,
        protected store: AbstractStore<T>,
        protected storeService: AbstractStateService<T>,
        protected storeQuery: AbstractQuery<T>
    ) { }
    ngOnInit(): void {



        this.storeSubscription();
    }
    ngOnDestroy() {
        this.componentActive = false;
    }

    edit() {
        this.layout.open(this.formComponent, { data: { id: this.id } });
    }

    delete() {
        this.layout.openDeletePrompt().subscribe(r => {
            if (r) { }
        })
    }

    abstract storeSubscription();
}