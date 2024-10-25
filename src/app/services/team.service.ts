import { Injectable } from '@angular/core';
import { Team } from '../teams/model/teams.model';
import { TEAMS } from '../teams/model/team-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
  
  getTeams(): Observable<Team[]>{
    return of(TEAMS);
  }
}
