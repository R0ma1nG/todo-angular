import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './core/components/profile/profile.component';
import {SettingsComponent} from './core/components/settings/settings.component';
import {DashboardComponent} from './core/components/dashboard/dashboard.component';
import {HelpComponent} from './core/components/help/help.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'help', component: HelpComponent},
  { path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
