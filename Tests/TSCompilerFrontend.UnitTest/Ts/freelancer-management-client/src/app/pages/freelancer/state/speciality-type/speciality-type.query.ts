import { AbstractQuery } from "app/abstractions/state/store-query";
import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { SpecialityTypeStore } from "./speciality-type.store";

export class SpecialityTypeQuery extends AbstractQuery<SpecialityType> {
    constructor(store: SpecialityTypeStore) {
        super(store)
    }
}