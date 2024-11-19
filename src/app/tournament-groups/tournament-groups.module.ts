import {TournamentGroupsRoutingModule} from "./tournament-groups-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TournamentGroupsComponent} from "./tournament-groups.component";
import {NgModule} from "@angular/core";
import {TeamsModule} from "../teams/teams.module";
import {TournamentGroupDetailsModule} from "./components/tournament-group-details/tournament-group-details.module";

@NgModule({
  declarations: [
    TournamentGroupsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TournamentGroupsRoutingModule,
    TeamsModule,
    TournamentGroupDetailsModule
  ]
})
export class TournamentGroupsModule { }
