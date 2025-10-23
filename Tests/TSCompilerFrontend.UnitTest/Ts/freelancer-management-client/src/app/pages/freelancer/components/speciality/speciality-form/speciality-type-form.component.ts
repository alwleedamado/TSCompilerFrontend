import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeStoreService } from 'pages/freelancer/state/speciality-type';
import { SpecialityTypeQuery } from 'pages/freelancer/state/speciality-type/speciality-type.query';
import { SpecialityTypeStore } from 'pages/freelancer/state/speciality-type/speciality-type.store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-type-form.component.html',
  styleUrls: ['./speciality-type-form.component.scss']
})
export class SpecialityFormComponent extends BaseDialogForm<SpecialityType> {
  title: string;

  constructor(
    ref: DynamicDialogRef,
    config: DynamicDialogConfig,
    store: SpecialityTypeStore,
    storeService: SpecialityTypeStoreService,
    storeQuery: SpecialityTypeQuery
  ) {
    super(ref, config, store, storeService, storeQuery)
  }


  createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    })
  }
  storeSubscriptions(): void {
  }
}