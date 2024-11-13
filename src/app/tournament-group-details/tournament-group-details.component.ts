import {Component, OnInit} from '@angular/core';
import {TournamentGroup} from "../tournament-groups/model/tournament-group.model";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {GroupService} from "../services/group.service";

@Component({
  selector: 'app-tournament-group-details',
  templateUrl: './tournament-group-details.component.html',
  styleUrls: ['./tournament-group-details.component.css']
})
export class TournamentGroupDetailsComponent implements OnInit {

  group!: TournamentGroup;

  constructor(private route: ActivatedRoute,
              private groupService: GroupService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.initGroup();
  }

  initGroup() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupService.getGroupById(id.toString())
      .subscribe(group => {
        this.group = group;
      });
  }

  goBack() {
    this.location.back();
  }

}

