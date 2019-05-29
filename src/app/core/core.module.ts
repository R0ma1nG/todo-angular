import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import {AngularMaterialModule} from '../shared/angular-material.module';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavigationBarComponent,
    NavComponent,
    AuthenticationComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    HelpComponent
  ],
  providers: [],
  exports: [NavComponent]
})
export class CoreModule {
  constructor() {}
}
