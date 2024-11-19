import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamsModule} from "../teams/teams.module";
import {FormsModule} from "@angular/forms";
import {TournamentGroupDetailsComponent} from "./tournament-group-details.component";
import {MatchDetailsComponent} from "./match-details/match-details.component";
import {RouterLink} from "@angular/router";

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
