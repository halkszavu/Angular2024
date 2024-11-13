import { Injectable } from '@angular/core';
import {TEAMS} from "../teams/model/team-list";
import {Team} from "../teams/model/teams.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService{

  private teamsUrl = 'api/teams';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  getTeamById(id: string): Observable<Team> {
    return this.http.get<Team>(this.teamsUrl + "/" + id);
  }

  getTopTeams(limit:number){
    return this.http.get<Team[]>(this.teamsUrl + "?limit=" + limit + "&sort=desc");
  }

}
