import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {JsonPipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Team} from "../teams/model/teams.model";
import {CountryService} from "./service/country.service";

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, JsonPipe],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
  providers: [CountryService]
})
export class TeamDetailsComponent {

  //Input property from parent component > lab 2 page 12
  @Input() team : Team | undefined;

  //Output property to communicate with parent component > lab 2 page 13
  @Output() clearDetails = new EventEmitter();

  constructor(protected countryService:CountryService) {
  }

  //Component lifecycle events: ngOnchanges, ngOnInit, ngAfterViewInit > lab 2 page 18
  ngOnChanges(changes: SimpleChanges){
    console.log("OnChanges happened")
    this.countryService.countryData = undefined;
    if(this.team) {
      this.countryService.initCountryData(this.team.name)
        .subscribe(countryData =>
          this.countryService.countryData = countryData[0]);
    }
  }

  ngOnInit(){
    console.log("OnInit happened");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewContentInit happened");
  }

}
