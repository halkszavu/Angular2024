import { Injectable } from '@angular/core';
import { TournamentGroup } from '../tournament-groups/model/tournament-group.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = 'api/groups'; // URL to web api


  constructor(private http: HttpClient) { }

  getTournamentGroups(): Observable<TournamentGroup[]> {
   return this.http.get<TournamentGroup[]>(this.groupsUrl)
  }

  getGroupById(id: string) {
   return this.http.get<TournamentGroup>(this.groupsUrl + "/" + id);
  }

}
