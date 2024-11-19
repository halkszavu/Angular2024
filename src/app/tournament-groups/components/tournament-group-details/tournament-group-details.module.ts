import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {TournamentGroupDetailsComponent} from "./tournament-group-details.component";
import {RouterLink} from "@angular/router";
import {MatchDetailsComponent} from "../match-details/match-details.component";
import {TeamsModule} from "../../../teams/teams.module";

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
