import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Match} from "../../tournament-groups/model/match.model";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  match!:Match;

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private location: Location) { }

  ngOnInit(): void {
    this.initMatch();
  }

  initMatch() {
    const groupId = Number(this.route.snapshot.paramMap.get('groupId'));
    const matchId = Number(this.route.snapshot.paramMap.get('matchId'));
    this.groupService.getGroupById(groupId.toString())
      .subscribe(group => {
        this.match = group.matches.filter((m) => m.id == matchId)[0];;
      });
  }

  goBack(){
    this.location.back();
  }

}
