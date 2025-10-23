import { Injectable } from "@angular/core";
import { AbstractStateService } from "app/abstractions/state/state.service";
import { TeamStore } from "./team.store";
import { TeamService } from "pages/team/services/team.service";
import { Team } from "pages/team/models/team";

@Injectable()
export class TeamStoreService extends AbstractStateService<Team>{
    constructor(store: TeamStore, service : TeamService) {
        super(store, service);
    }
}