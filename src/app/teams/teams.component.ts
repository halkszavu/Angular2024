import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TEAMS} from "./model/team-list";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  // String team name for the first example of string interpolation > page 12
  // team : string = "Hungary";

  // After we created team model  > page 16
  // team : Team = new Team(10,"Hungary", 1517.77, "https://www.worldometers.info/img/flags/hu-flag.gif");

  /*Mock team list from team-list.ts file*/
  teams = TEAMS;
}
