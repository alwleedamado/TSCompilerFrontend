import { AbstractQuery } from "app/abstractions/state/store-query";
import { TeamStore } from "./team.store";
import { Team } from "pages/team/models/team";
import { Injectable } from "@angular/core";

@Injectable()
export class TeamQuery extends AbstractQuery<Team> {
    constructor(store: TeamStore) {
        super(store)
    }
}