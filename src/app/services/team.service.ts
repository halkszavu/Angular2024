import { Injectable } from '@angular/core';
import { Team } from '../teams/model/teams.model';
import { TEAMS } from '../teams/model/team-list';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }
  
  getTeams(): Observable<Team[]>{
    return of(TEAMS);
  }
}
