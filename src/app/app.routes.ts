import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";

export const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormDemoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "groups",
    loadChildren: () =>
      import('./tournament-groups/tournament-groups.module').then(m =>
        m.TournamentGroupsModule)},
  {path: "dashboard",
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m =>
        m.DashboardComponent)},
  {path: "details",
    loadChildren: () =>
      import('./team-details/team-details.module').then(m =>
        m.TeamDetailsModule)},
  { path: '**', component: PageNotFoundComponent}
];
