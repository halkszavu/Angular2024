import { Injectable } from '@angular/core';
import { Team } from '../teams/model/teams.model';
import { TEAMS } from '../teams/model/team-list';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  
  getTeams(): Team[]{
    return TEAMS;
  }
}
