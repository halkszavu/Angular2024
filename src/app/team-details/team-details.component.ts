import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Team} from "../teams/model/teams.model";

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [ UpperCasePipe, FormsModule ],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {

  //Input property from parent component > lab 2 page 12
  @Input() team : Team | undefined;

  //Output property to communicate with parent component > lab 2 page 13
  @Output() clearDetails = new EventEmitter();

  //Component lifecycle events: ngOnchanges, ngOnInit, ngAfterViewInit > lab 2 page 18
  ngOnChanges(changes: SimpleChanges){
    console.log("OnChanges happened")
  }

  ngOnInit(){
    console.log("OnInit happened");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewContentInit happened");
  }

}
