import { Routes } from '@angular/router';
import {TournamentGroupsComponent} from "./tournament-groups/tournament-groups.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "groups", component: TournamentGroupsComponent},
  {path: "dashboard", component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent}
];
