import { Injectable } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { Freelancer } from "pages/freelancer/models/freelancer";
import { FreelancerStore } from "./freelancer.store";
import { FreelancerService } from "pages/freelancer/services/freelancer.service";

@Injectable()
export class FreelancerStoreService extends AbstractStateService<Freelancer>{
    constructor(store: FreelancerStore, service : FreelancerService) {
        super(store, service);
    }
}