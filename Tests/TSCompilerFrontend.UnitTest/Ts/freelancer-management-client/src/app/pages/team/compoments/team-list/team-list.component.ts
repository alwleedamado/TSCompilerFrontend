import { Component } from '@angular/core';
import { Team } from 'pages/team/models/team';
import { TeamStore } from 'pages/team/state/team/team.store';
import { TeamQuery } from 'pages/team/state/team/team.query';
import { TeamStoreService } from 'pages/team/state/team/team.store.service';
import { statics } from 'pages/team/team.statics';
import { Observable, of } from 'rxjs';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { TeamFormComponent } from '../team-form/team-form.component';
import { AbstractList } from 'utils/base-components/list/base-list';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent extends AbstractList<Team> {
  formEditTitle: string = "Edit Team";
  formAddTitle: string = "Create New Team";
  title: string = 'Team';

  constructor(layoutUtils: LayoutUtilsService, store: TeamStore, storeService: TeamStoreService, storeQuery: TeamQuery) {
    super(layoutUtils, store, storeQuery, storeService, TeamFormComponent)
  }
}
