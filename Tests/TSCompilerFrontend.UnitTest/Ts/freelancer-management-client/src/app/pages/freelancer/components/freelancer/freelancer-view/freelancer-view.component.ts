import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerQuery } from 'pages/freelancer/state/freelancer/freelancer.query';
import { FreelancerStore } from 'pages/freelancer/state/freelancer/freelancer.store';
import { FreelancerStoreService } from 'pages/freelancer/state/freelancer/freelancer.store.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseView } from 'utils/base-components/view/base-view';
@Component({
  selector: 'app-freelancer-view',
  templateUrl: './freelancer-view.component.html',
  styleUrls: ['./freelancer-view.component.scss']
})
export class FreelancerViewComponent extends BaseView<Freelancer> {
  returnUrl: string = statics.urls.root;
  storeSubscription() {
  }

  constructor(
    layoutUtilService: LayoutUtilsService, store: FreelancerStore, storeService: FreelancerStoreService, storeQuery: FreelancerQuery) {
    super(layoutUtilService, store, storeService, storeQuery)
  }

}
