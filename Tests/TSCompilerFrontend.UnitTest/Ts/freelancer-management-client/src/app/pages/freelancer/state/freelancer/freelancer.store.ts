import { Injectable } from "@angular/core";
import { StoreConfig } from "@datorama/akita";
import { AbstractStore, StoreState, createIntialState } from "app/abstractions/state/store-state";
import { Freelancer } from "pages/freelancer/models/freelancer";
import { RequestState } from "utils/models/RequestState";

@Injectable()
@StoreConfig({ name: 'Freelancers' })
export class FreelancerStore extends AbstractStore<Freelancer> {
    constructor() {
        super(createIntialState({
            addSpecialityRequestState: RequestState.idle
        }))
    }
}