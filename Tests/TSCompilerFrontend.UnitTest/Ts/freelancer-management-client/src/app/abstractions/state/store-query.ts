import { Observable, of } from 'rxjs';
import { Query, Store, StoreConfig } from "@datorama/akita";
import { State, StoreState } from './store-state';
import { PageFilterState } from 'core/models';
import { Injectable } from '@angular/core';

@Injectable()
export class AbstractQuery<T> extends Query<State<T>>{
    constructor(store: Store<State<T>>) {
        super(store)
    }

    entities$: Observable<T[]> = this.select(state => state.entities || [])

    listLoading$: Observable<boolean> = this.select(state => state.listLoading)

    pageFilterState: Observable<PageFilterState> = this.select(state => state.pageFilterState)
    
}