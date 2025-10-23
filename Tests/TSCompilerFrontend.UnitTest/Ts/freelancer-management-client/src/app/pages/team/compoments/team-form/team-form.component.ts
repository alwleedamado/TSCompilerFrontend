import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'pages/team/models/team';
import { TeamQuery } from 'pages/team/state/team/team.query';
import { TeamStore } from 'pages/team/state/team/team.store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';
import { TeamStoreService } from './../../state/team/team.store.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent extends BaseDialogForm<Team> {
  title: string = "Create New Team  ";

  emptyPhoneControl: FormControl = new FormControl()
  constructor(
    ref: DynamicDialogRef,
    config: DynamicDialogConfig,
    store: TeamStore,
    storeService: TeamStoreService,
    storeQuery: TeamQuery
  ) {
    super(ref, config, store, storeService, storeQuery)
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required])
    })
  }
  storeSubscriptions() {
  }

  override afterFormInit(entity?: Partial<Team>): void {
  }
}