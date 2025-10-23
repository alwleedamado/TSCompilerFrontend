import { Injectable } from "@angular/core";
import { StoreConfig } from "@datorama/akita";
import { AbstractStore, StoreState, createIntialState } from "app/abstractions/state/store-state";
import { Team } from "pages/team/models/team";
import { RequestState } from "utils/models/RequestState";

@Injectable()
@StoreConfig({ name: 'Teams' })
export class TeamStore extends AbstractStore<Team> {
    constructor() {
        super(createIntialState({
            addSpecialityRequestState: RequestState.idle
        }))
    }
}