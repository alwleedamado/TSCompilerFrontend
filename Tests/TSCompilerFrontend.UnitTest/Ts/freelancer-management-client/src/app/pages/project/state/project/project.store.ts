import { Injectable } from "@angular/core";
import { StoreConfig } from "@datorama/akita";
import { AbstractStore, createIntialState } from "app/abstractions/state/store-state";
import { Project } from "pages/project/models/project";
import { RequestState } from "utils/models/RequestState";

@Injectable()
@StoreConfig({ name: 'Projects' })
export class ProjectStore extends AbstractStore<Project> {
    constructor() {
        super(createIntialState({
        }))
    }
}