import { Component } from '@angular/core';
import {Team} from "../teams/model/teams.model";
import {TeamService} from "../services/team.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  teams : Team[] = [];
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.initTeams();
  }

  initTeams(){
    this.teamService.getTopTeams(10).subscribe((teams) => this.teams =
      teams);
  }
}
