import {
  Component,
  computed,
  ElementRef,
  Input,
  QueryList,
  signal,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TEAMS} from "./model/team-list";
import {Team} from "./model/teams.model";
import {TeamDetailsComponent} from "../team-details/team-details.component";
import {TeamButtonDirective} from "../directives/team-button.directive";
import {TeamService} from "../services/team.service";

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
  // String team name for the first example of string interpolation > page 12
  // team : string = "Hungary";

  // After we created team model  > page 16
  // team : Team = new Team(10,"Hungary", 1517.77, "https://www.worldometers.info/img/flags/hu-flag.gif");

  /*Mock team list from team-list.ts file*/
  teams:Team[] = [];

  //Add new property to component > this is the selected team
  selectedTeam : Team | undefined;

  clickCounter = signal(0);

  conditionalCount = computed(() => {
    if (this.clickCounter() % 2 == 0) {
      return 'The count is even.';
    } else {
      return 'The count is odd.';
    }
  });

  @Input() teamsOfGroup:number[]|undefined;

  //Viewchild to access the child component > lab 2 page 15
  @ViewChild(TeamDetailsComponent) teamDetailsComponent!:TeamDetailsComponent;

  //Viewchildren to access multiple child component > lab 2 page 16
  @ViewChildren("teamDiv") teamDivs!:QueryList<ElementRef>;

  constructor(private teamService: TeamService) {} //Inject service

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
    this.initTeams();
  }

  initTeams(): void {
    this.teamService.getTeams()
      .subscribe(alma => this.teams = alma);
  }


  //After view init change the left border of the third element > lab 2 page 16
  ngAfterViewInit(): void {
    console.log("AfterViewContentInit happened");
    this.teamDivs.get(2)?.nativeElement.setAttribute('style', 'border-left: solid black 5px');
  }


  //Select method > it is bounded to the click event
  onSelect(team : Team){
    this.selectedTeam = team;
    this.clickCounter.set(this.clickCounter()+1);
  }

  //Clear the selected team > lab 2 page 14 - 15
  clearSelectedTeam(){
    // this.teamDetailsComponent.team = undefined;
    this.selectedTeam = undefined;
  }


}
