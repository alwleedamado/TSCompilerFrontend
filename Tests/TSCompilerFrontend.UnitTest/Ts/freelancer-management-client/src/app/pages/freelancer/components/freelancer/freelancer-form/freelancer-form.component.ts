import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Freelancer } from 'freelancer/models/freelancer';
import { FreelancerQuery } from 'pages/freelancer/state/freelancer/freelancer.query';
import { FreelancerStore } from 'pages/freelancer/state/freelancer/freelancer.store';
import { FreelancerStoreService } from 'pages/freelancer/state/freelancer/freelancer.store.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.scss']
})
export class FreelancerFormComponent extends BaseDialogForm<Freelancer> {
  title: string = "Create New Freelancer  ";

  emptyPhoneControl: FormControl = new FormControl()
  constructor(
    ref: DynamicDialogRef,
    config: DynamicDialogConfig,
    store: FreelancerStore,
    storeService: FreelancerStoreService,
    storeQuery: FreelancerQuery
  ) {
    super(ref, config, store, storeService, storeQuery)
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      telephones: new FormArray([]),
    })
  }
  storeSubscriptions() {
  }

  override afterFormInit(entity?: Partial<Freelancer>): void {
    entity!.telephones.forEach(e => {
      const control = new FormControl({
        telephoneNumber: e.telephoneNumber,
        phoneType: e.phoneType

      });
      this.phoneArray.controls.push(control)
    })
  }
  createEntityPhone() {
    this.phoneArray.push(new FormControl(this.emptyPhoneControl.value))
    this.emptyPhoneControl.reset()
  }
  get phoneArray() {
    return this.form.get('telephones') as FormArray;
  }
  deletePhone(ctrl) {
    if (this.entity)
      this.phoneArray.controls = this.phoneArray.controls.filter(c => c != ctrl)
  }
}
