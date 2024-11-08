import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TournamentGroupsComponent} from "./tournament-groups/tournament-groups.component";
import {TeamsComponent} from "./teams/teams.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TournamentGroupsComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UEFA Nations League';
}
