import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {TournamentGroupDetailsComponent} from "./tournament-group-details.component";
import {RouterLink} from "@angular/router";
import {TeamsModule} from "../../../teams/teams.module";
import {MatchDetailsComponent} from "./components/match-details/match-details.component";
import { BetsComponent } from './components/bets/bets.component';
import {BetResultValidatorDirective} from "./components/bets/validator/bet-result-validator.directive";
import {LocalTimePipe} from "../../../pipes/local-time.pipe";

@NgModule({
  declarations: [
    TournamentGroupDetailsComponent,
    MatchDetailsComponent,
    BetResultValidatorDirective,
    BetsComponent,
    LocalTimePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    TeamsModule,
    RouterLink
  ]
})
export class TournamentGroupDetailsModule { }
