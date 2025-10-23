import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from 'pages/project/models/project';
import { ProjectQuery } from 'pages/project/state/project/project.query';
import { ProjectStore } from 'pages/project/state/project/project.store';
import { ProjectStoreService } from 'pages/project/state/project/project.store.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent extends BaseDialogForm<Project> {
  title: string = "Create New Project  ";

  constructor(
    ref: DynamicDialogRef,
    config: DynamicDialogConfig,
    store: ProjectStore,
    storeService: ProjectStoreService,
    storeQuery: ProjectQuery
  ) {
    super(ref, config, store, storeService, storeQuery)
  }

  override createForm(): void {
    this.form = new FormGroup({
      projectName: new FormControl(),
      description: new FormControl(),
      teams: new FormControl(),
      dueDate: new FormControl(),
      price: new FormControl()
    })
  }
  override storeSubscriptions(): void {
  }
}
