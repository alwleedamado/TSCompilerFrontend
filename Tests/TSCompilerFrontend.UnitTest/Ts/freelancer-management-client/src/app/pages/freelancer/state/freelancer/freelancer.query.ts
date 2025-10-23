import { AbstractQuery } from "app/abstractions/state/store-query";
import { Freelancer } from "pages/freelancer/models/freelancer";
import { FreelancerStore } from "./freelancer.store";
import { Injectable } from "@angular/core";

@Injectable()
export class FreelancerQuery extends AbstractQuery<Freelancer> {
    constructor(store: FreelancerStore) {
        super(store)
    }
}