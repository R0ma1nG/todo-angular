import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import {AngularMaterialModule} from '../shared/angular-material.module';
import {AuthenticationComponent} from './components/authentication/authentication.component';

@NgModule({
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [NavigationBarComponent, NavComponent, AuthenticationComponent],
  providers: [],
  exports: [NavComponent]
})
export class CoreModule {
  constructor() {}
}
