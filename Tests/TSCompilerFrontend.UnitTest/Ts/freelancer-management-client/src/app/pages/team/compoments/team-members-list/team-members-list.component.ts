import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractStore, StoreState } from 'app/abstractions/state/store-state';
import { Team } from 'pages/team/models/team';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { TeamMemberFormComponent } from '../team-member-form/team-member-form.component';
import { Observable } from 'rxjs';
import { TeamMember } from 'pages/team/models/team-member';
import { TeamStore } from 'pages/team/state/team/team.store';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent implements OnInit, OnDestroy {
  @Input() teamId: string;
  private componentActive = true;
  title: string = "Team Members";
  entities$: Observable<TeamMember[]>
  constructor(private store: TeamStore, private layout: LayoutUtilsService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
  add() {
    this.layout.open(TeamMemberFormComponent, { data: { teamId: this.teamId } })
  }
}