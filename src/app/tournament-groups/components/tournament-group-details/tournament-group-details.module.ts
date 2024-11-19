import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {TournamentGroupDetailsComponent} from "./tournament-group-details.component";
import {RouterLink} from "@angular/router";
import {TeamsModule} from "../../../teams/teams.module";
import {MatchDetailsComponent} from "./components/match-details/match-details.component";

@NgModule({
  declarations: [
    TournamentGroupDetailsComponent,
    MatchDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TeamsModule,
    RouterLink
  ]
})
export class TournamentGroupDetailsModule { }
