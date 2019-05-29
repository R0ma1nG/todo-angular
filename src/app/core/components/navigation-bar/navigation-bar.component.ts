import {Component, EventEmitter, Output} from '@angular/core';
import {Constants} from '../../../constants';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  private authenticationService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authenticationService = authService;
  }

  appName = Constants.APP_NAME;
  @Output() toggleSidenav = new EventEmitter<void>();

  logout() {
    this.authenticationService.logout();
  }
}
