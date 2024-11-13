import {NgModule} from "@angular/core";
import {TeamButtonDirective} from "../directives/team-button.directive";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TeamsComponent} from "./teams.component";
@NgModule({
  declarations: [ TeamsComponent ],
  exports: [ TeamsComponent],
  imports: [ FormsModule, CommonModule, RouterModule, TeamButtonDirective ]
})
export class TeamsModule{}
