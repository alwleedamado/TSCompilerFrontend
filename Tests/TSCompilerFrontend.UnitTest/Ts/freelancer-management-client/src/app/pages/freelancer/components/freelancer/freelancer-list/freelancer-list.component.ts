import { Component } from '@angular/core';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerQuery } from 'pages/freelancer/state/freelancer/freelancer.query';
import { FreelancerStore } from 'pages/freelancer/state/freelancer/freelancer.store';
import { FreelancerStoreService } from 'pages/freelancer/state/freelancer/freelancer.store.service';
import { AbstractList } from 'utils/base-components/list/base-list';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss'],
})
export class FreelancerListComponent extends AbstractList<Freelancer> {
  formEditTitle: string = "Edit Freelancer";
  formAddTitle: string = "Create New Freelancer";
  viewParts: any[] = [statics.urls.root];
  title: string = 'Freelancer';

  constructor(
    layoutUtilsService: LayoutUtilsService,
    store: FreelancerStore,
    storeService: FreelancerStoreService,
    storeQuery: FreelancerQuery) {
    super(layoutUtilsService, store, storeQuery, storeService, FreelancerFormComponent);
  }
}
