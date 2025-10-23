import { DataService } from "utils/services/data.service";
import { AbstractStore, State, StoreState } from "./store-state";
import { catchError, finalize, tap } from "rxjs";
import { reportRequestState } from "./report-http-proggress";
import { RequestState } from "utils/models/RequestState";
import { PageFilterState } from "core/models";

export abstract class AbstractStateService<T> {
    constructor(protected store: AbstractStore<T>, protected dataServe: DataService<T>) { }

    private updateEntities(newEntities: T[]) {
        this.store.update(state => ({ ...state, entities: newEntities }))
    }

    private addEntity(entity: T) {
        this.store.update(state => {
            let newState: State<T> = structuredClone(state);
            newState.entities.unshift(entity)
            return newState;
        })
    }

    private removeEntity(id: string | number) {
        this.store.update(state => {
            let newState = structuredClone(state);
            newState.entites = newState.entites.filter(x => x['id'] != id)
            return newState;
        })
    }

    private updateEntity(id: any, newEntity) {
        this.store.update(state => ({ ...state, entities: state.entities.map(e => e['id'] == id ? newEntity : e) }))
    }

    private updateEntitiesRequestState(rs: RequestState) {
        this.store.update(state => ({ ...state, entitiesRequestState: rs }))
    }
    updateEntityCreationRequestState(rs: RequestState) {
        this.store.update(state => ({ ...state, entityCreationRequestState: rs }))

    }
    private updateEntityUpdateRequestState(rs: RequestState) {
        this.store.update(state => ({ ...state, entityUpdateRequestState: rs }))

    }
    private updateEntityDeletionRequestState(rs: RequestState) {
        this.store.update(state => ({ ...state, entityDeletionRequestState: rs }))

    }

    fetchEntitiesAsync(filterState: PageFilterState) {
        this.dataServe.getFilter(filterState)
            .pipe(
                reportRequestState(state => {
                    this.store.setLoading(state === RequestState.request)
                    this.updateEntitiesRequestState(state)
                })
            ).subscribe({
                next: res => this.updateEntities(res.items),
                error: err => this.store.setError(err),
            })

    }

    createNewEntity(entity: T) {
        this.dataServe.create(entity)
            .pipe(reportRequestState(state => this.updateEntityCreationRequestState(state)))
            .subscribe({
                next: (res) => this.addEntity(res),
                error: error => this.store.setError(error)
            })
    }

    deleteEntity(id: string | number) {
        this.dataServe.delete(id).pipe(
            reportRequestState(state => this.updateEntityDeletionRequestState(state))
        ).subscribe({
            next: _ => this.removeEntity(id),
            error: error => this.store.setError(error)
        })
    }

}