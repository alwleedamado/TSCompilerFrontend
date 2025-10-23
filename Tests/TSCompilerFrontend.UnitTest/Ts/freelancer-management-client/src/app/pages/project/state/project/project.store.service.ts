import { Injectable } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { Project } from "pages/project/models/project";
import { ProjectStore } from "./project.store";
import { ProjectService } from "pages/project/services/project.service";

@Injectable()
export class ProjectStoreService extends AbstractStateService<Project>{
    constructor(store: ProjectStore, service : ProjectService) {
        super(store, service);
    }
}