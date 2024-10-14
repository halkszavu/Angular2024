import { Component } from '@angular/core';
import {TEAMS} from "../teams/model/team-list";
import {GROUPS} from "./model/tournament-group-list";
import {TeamsComponent} from "../teams/teams.component";

@Component({
  selector: 'app-tournament-groups',
  standalone: true,
  imports: [TeamsComponent],
  templateUrl: './tournament-groups.component.html',
  styleUrl: './tournament-groups.component.css'
})
export class TournamentGroupsComponent {

    teams = TEAMS;
    groups = GROUPS;

}
