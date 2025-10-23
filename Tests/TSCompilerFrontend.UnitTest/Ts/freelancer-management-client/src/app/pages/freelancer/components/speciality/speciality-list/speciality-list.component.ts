import { Component } from '@angular/core';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeStoreService } from 'pages/freelancer/state/speciality-type';
import { SpecialityTypeQuery } from 'pages/freelancer/state/speciality-type/speciality-type.query';
import { SpecialityTypeStore } from 'pages/freelancer/state/speciality-type/speciality-type.store';
import { Observable } from 'rxjs';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { SpecialityFormComponent } from '../speciality-form/speciality-type-form.component';
import { AbstractList } from 'utils/base-components/list/base-list';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent extends AbstractList<SpecialityType> {
  formEditTitle: string = "Edit Speciality Type";
  formAddTitle: string = "Add New Specaility Type";
  title: string = 'Speciality Types';

  constructor(
  layoutUtils: LayoutUtilsService,
    store: SpecialityTypeStore,
    storeService: SpecialityTypeStoreService,
    storeQuery: SpecialityTypeQuery
  ) {
    super(layoutUtils, store, storeQuery, storeService, SpecialityFormComponent)
  }
}
