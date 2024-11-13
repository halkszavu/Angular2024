import {JsonPipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {NgModule} from "@angular/core";
import {TeamDetailsComponent} from "./team-details.component";
import {TeamDetailsRoutingModule} from "./team-details-routing.module";

@NgModule({
  declarations: [
    TeamDetailsComponent
  ],
  imports: [
    UpperCasePipe, FormsModule, JsonPipe, TeamDetailsRoutingModule
  ]
})
export class TeamDetailsModule { }
