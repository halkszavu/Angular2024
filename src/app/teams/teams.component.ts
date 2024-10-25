import {Component, ElementRef, Input, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TEAMS} from "./model/team-list";
import {Team} from "./model/teams.model";
import {TeamDetailsComponent} from "../team-details/team-details.component";
import {TeamButtonDirective} from "../directives/team-button.directive";
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  //Import TeamDetailsComponent > lab 2 page 14
  //Import TeamButtonDirective > lab 2 page 24
  imports: [FormsModule, CommonModule, TeamDetailsComponent, TeamButtonDirective],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams : Team[] = [];

  //Add new property to component > this is the selected team
  selectedTeam : Team | undefined;

  constructor(private teamService: TeamService) {}

  @Input() teamsOfGroup:number[]|undefined;

  //Viewchild to access the child component > lab 2 page 15
  @ViewChild(TeamDetailsComponent) teamDetailsComponent!:TeamDetailsComponent;

  //Viewchildren to access multiple child component > lab 2 page 16
  @ViewChildren("teamDiv") teamDivs!:QueryList<ElementRef>;

  //Component lifecycle events: ngOnchanges, ngOnInit, ngAfterViewInit
  ngOnChanges(changes: SimpleChanges){
    //Change detection hooks: ngOnChanges() > lab 2 page 19
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue ?
        inputValues.previousValue.name : inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue ?
        inputValues.currentValue.name : inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
    console.log("OnChanges happened");
  }

  ngOnInit(){
    console.log("OnInit happened");

    this.initTeams();
  }

  //After view init change the left border of the third element > lab 2 page 16
  ngAfterViewInit(): void {
    console.log("AfterViewContentInit happened");
    this.teamDivs.get(2)?.nativeElement.setAttribute('style', 'border-left: solid black 5px');
  }


  //Select method > it is bounded to the click event
  onSelect(team : Team){
    this.selectedTeam = team;
  }

  //Clear the selected team > lab 2 page 14 - 15
  clearSelectedTeam(){
    // this.teamDetailsComponent.team = undefined;
    this.selectedTeam = undefined;
  }

  initTeams() : void{
    this.teamService.getTeams()
      .subscribe(x => this.teams = x);
  }
}
