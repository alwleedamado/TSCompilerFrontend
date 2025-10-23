import { Component } from '@angular/core';
import { Project } from 'pages/project/models/project';
import { ProjectQuery } from 'pages/project/state/project/project.query';
import { ProjectStore } from 'pages/project/state/project/project.store';
import { ProjectStoreService } from 'pages/project/state/project/project.store.service';
import { AbstractList } from 'utils/base-components/list/base-list';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent extends AbstractList<Project> {
  override title: string;

  constructor(layoututils: LayoutUtilsService, store: ProjectStore, storeQuery: ProjectQuery, storeService: ProjectStoreService) {
    super(layoututils, store, storeQuery, storeService, ProjectFormComponent)
  }

}
