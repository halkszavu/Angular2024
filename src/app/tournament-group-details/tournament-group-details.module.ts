import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamsModule} from "../teams/teams.module";
import {FormsModule} from "@angular/forms";
import {TournamentGroupDetailsComponent} from "./tournament-group-details.component";



@NgModule({
  declarations: [
    TournamentGroupDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TeamsModule
  ]
})
export class TournamentGroupDetailsModule { }
