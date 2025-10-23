import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { AbstractQuery } from "app/abstractions/state/store-query";
import { AbstractStore, StoreState } from "app/abstractions/state/store-state";
import { Observable } from "rxjs";
import { LayoutUtilsService } from "shared/services/layout-utils.service";

@Injectable()
export abstract class BaseView<T> implements OnInit, OnDestroy {

    abstract returnUrl: string;

    id: any;
    componentActive = true;
    router: Router
    protected viewUrl: string[];

    protected createUrl: any[];
    entity$: Observable<T>;

    constructor(
        protected layoutUtils: LayoutUtilsService,
        protected store: AbstractStore<T>,
        protected storeService: AbstractStateService<T>,
        protected storeQuery: AbstractQuery<T>) { }

    ngOnInit(): void {


        this.storeSubscription();
    }


    ngOnDestroy() {
        this.componentActive = false;
    }

    navigateBack() {

    }



    addEntity() {

    }

    viewEntity(entity: T, id: string) {


    }

    abstract storeSubscription();
}
