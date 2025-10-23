import { Injectable } from "@angular/core";
import { StoreConfig } from "@datorama/akita";
import { AbstractStore, createIntialState } from "app/abstractions/state/store-state";
import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { RequestState } from "utils/models/RequestState";

@Injectable()
@StoreConfig({ name: 'SpecialityType' })
export class SpecialityTypeStore extends AbstractStore<SpecialityType> {
    constructor() {
        super(createIntialState({
        }))
    }
}