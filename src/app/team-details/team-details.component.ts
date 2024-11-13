import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {JsonPipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Team} from "../teams/model/teams.model";
import {CountryService} from "./service/country.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
  providers: [CountryService]
})
export class TeamDetailsComponent {

  //Input property from parent component > lab 2 page 12
  @Input() team : Team | undefined;

  //Output property to communicate with parent component > lab 2 page 13
  @Output() clearDetails = new EventEmitter();

  constructor( private route: ActivatedRoute,
               private teamService: TeamService,
               private location: Location,
               protected countryService:CountryService) {
  }

  //Component lifecycle events: ngOnchanges, ngOnInit, ngAfterViewInit > lab 2 page 18
  ngOnChanges(changes: SimpleChanges){
    console.log("OnChanges happened")
  }

  ngOnInit(){
    this.initTeam();
  }

  initTeam(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeamById(id.toString())
      .subscribe(team => {
        this.team = team;
        this.initCountryDetails();
      });
  }


  ngAfterViewInit(): void {
    console.log("AfterViewContentInit happened");
  }

  private initCountryDetails() {
    this.countryService.countryData = undefined;
    if(this.team) {
      this.countryService.initCountryData(this.team.name)
        .subscribe(countryData =>
          this.countryService.countryData = countryData[0]);
    }
  }

  goBack(){
    this.location.back();
  }

}
