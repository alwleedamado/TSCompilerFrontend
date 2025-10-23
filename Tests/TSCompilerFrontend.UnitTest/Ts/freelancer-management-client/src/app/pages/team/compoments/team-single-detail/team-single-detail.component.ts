import { Component, Input } from '@angular/core';
import { Team } from 'pages/team/models/team';
import { TeamStore } from 'pages/team/state/team/team.store';
import { TeamQuery } from 'pages/team/state/team/team.query';
import { TeamStoreService } from 'pages/team/state/team/team.store.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseSingleDetail } from 'utils/base-components/view/base-single-detail';
import { TeamFormComponent } from '../team-form/team-form.component';

@Component({
  selector: 'app-team-single-detail',
  templateUrl: './team-single-detail.component.html',
  styleUrls: ['./team-single-detail.component.scss']
})
export class TeamSingleDetailComponent extends BaseSingleDetail<Team>{
  @Input() override id: any;
  override get title(): any {
    return `${this.entity.name}`
  }
  override storeSubscription() {
  }
  constructor(layoutUtilService: LayoutUtilsService, store: TeamStore, storeService: TeamStoreService, storeQuery: TeamQuery) {
    super(layoutUtilService, TeamFormComponent, store, storeService, storeQuery)
  }

}
