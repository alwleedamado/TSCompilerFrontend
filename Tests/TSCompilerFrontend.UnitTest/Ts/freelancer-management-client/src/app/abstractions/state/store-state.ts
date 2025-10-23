import { Store } from "@datorama/akita";
import { PageState, PageFilterState, getDefaultFilterState } from "core/models";
import { RequestState } from "utils/models/RequestState";

export type State<T> = StoreState<T>

export interface StoreState<T> {
    entities: T[];
    listLoading: boolean;
    pageFilterState: PageFilterState;

    currentEntity: T;

    entitiesRequestState: RequestState;
    entityCreationRequestState: RequestState;
    entityUpdateRequestState: RequestState;
    entityDeletionRequestState: RequestState;


}

export abstract class AbstractStore<T> extends Store<State<T>>{
    constructor(initialState) {
        super(initialState)
    }
    s: State<T>;
}

export function createIntialState<T>(args: any = {}): StoreState<T> {
    return <StoreState<T>>{
        entites: [],
        listLoading: false,
        currentEntity: null,
        entitiesRequestState: RequestState.idle,
        entityCreationRequestState: RequestState.idle,
        entityUpdateRequestState: RequestState.idle,
        entityDeletionRequestState: RequestState.idle,
        pageFilterState: getDefaultFilterState(),
        // extra intial state
        ...args
    }
} 