import { Component } from '@angular/core';
import { Team } from 'pages/team/models/team';
import { TeamStore } from 'pages/team/state/team/team.store';
import { TeamQuery } from 'pages/team/state/team/team.query';
import { TeamStoreService } from 'pages/team/state/team/team.store.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseView } from 'utils/base-components/view/base-view';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent extends BaseView<Team>{
  override returnUrl: string;
  constructor(
    layoutUtilService: LayoutUtilsService,
    store: TeamStore,
    storeService: TeamStoreService,
    storeQuery: TeamQuery) {
    super(layoutUtilService, store, storeService, storeQuery);
  }
  
  override storeSubscription() {
  }
}
