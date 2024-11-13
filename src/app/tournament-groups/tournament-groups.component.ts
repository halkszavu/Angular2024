import { Component } from '@angular/core';
import {GroupService} from "../services/group.service";
import {TournamentGroup} from "./model/tournament-group.model";


@Component({
  selector: 'app-tournament-groups',
  templateUrl: './tournament-groups.component.html',
  styleUrl: './tournament-groups.component.css'
})
export class TournamentGroupsComponent {

  groups! : TournamentGroup[];

  constructor(private groupService:GroupService) {
  }

    ngOnInit(){
      this.initGroups();
    }

  private initGroups() {
    this.groupService.getTournamentGroups().subscribe(groups => this.groups = groups)
  }
}
