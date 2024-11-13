import {
  Component, Input
} from '@angular/core';
import {Team} from "./model/teams.model";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

  @Input()teams:Team[] = [];

}
