import { Component, Input } from '@angular/core';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerQuery } from 'pages/freelancer/state/freelancer/freelancer.query';
import { FreelancerStore } from 'pages/freelancer/state/freelancer/freelancer.store';
import { FreelancerStoreService } from 'pages/freelancer/state/freelancer/freelancer.store.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseSingleDetail } from 'utils/base-components/view/base-single-detail';
import { AddSpecialityFormComponent } from '../add-speciality-form/add-speciality-form.component';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
@Component({
  selector: 'app-freelancer-single-detail',
  templateUrl: './freelancer-single-detail.component.html',
  styleUrls: ['./freelancer-single-detail.component.scss']
})
export class FreelancerSingleDetailComponent extends BaseSingleDetail<Freelancer> {
  @Input() id: any;
  get title(): any {
    return `Freelancer #${this.entity.id}`
  }
  storeSubscription() {
  }

  constructor(layoutUtilService: LayoutUtilsService, store: FreelancerStore,
    storeService: FreelancerStoreService, storeQuery: FreelancerQuery) {
    super(layoutUtilService, FreelancerFormComponent, store, storeService, storeQuery)
  }

  addSpeciality() {
    this.layout.open(AddSpecialityFormComponent, { data: { freelancerId: this.entity?.id } })
  }
}
