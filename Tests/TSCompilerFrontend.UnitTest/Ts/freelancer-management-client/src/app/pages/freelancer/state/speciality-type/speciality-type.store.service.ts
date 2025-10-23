import { Injectable } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { SpecialityTypeService } from './../../services/speciality-type.service';
import { SpecialityTypeStore } from "./speciality-type.store";

@Injectable()
export class SpecialityTypeStoreService extends AbstractStateService<SpecialityType>{
    constructor(store: SpecialityTypeStore, service: SpecialityTypeService) {
        super(store,service );
    }
}