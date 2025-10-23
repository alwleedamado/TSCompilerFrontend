import { AbstractQuery } from "app/abstractions/state/store-query";
import { ProjectStore } from "./project.store";
import { Project } from "pages/project/models/project";
import { Injectable } from "@angular/core";

@Injectable()
export class ProjectQuery extends AbstractQuery<Project> {
    constructor(store: ProjectStore) {
        super(store)
    }
}