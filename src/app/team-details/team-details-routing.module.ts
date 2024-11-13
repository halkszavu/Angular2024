import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TeamDetailsComponent} from "./team-details.component";

const routes: Routes = [{ path: ':id', component:  TeamDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDetailsRoutingModule { }

