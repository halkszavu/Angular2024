import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TournamentGroupsComponent} from "./tournament-groups.component";
import {TournamentGroupDetailsComponent} from "../tournament-group-details/tournament-group-details.component";
import {MatchDetailsComponent} from "../tournament-group-details/match-details/match-details.component";

const routes: Routes = [
  { path: '', component:  TournamentGroupsComponent },
  { path: 'group-details/:id', component: TournamentGroupDetailsComponent},
  { path: 'match-details/:groupId/:matchId', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentGroupsRoutingModule { }
