import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../constants';
import {AuthenticationService} from '../../services/authentication.service';

interface ROUTE {
  icon: string;
  route: string;
  title: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appName = Constants.APP_NAME;

  appRoutes: ROUTE[] = [
    {
      icon: 'dashboard',
      route: '',
      title: 'Dashboard',
    },
    {
      icon: 'assignment',
      route: 'todo',
      title: 'Tasks',
    }
  ];

  otherRoutes: ROUTE[] = [
    {
      icon: 'account_box',
      route: 'profile',
      title: 'Profile',
    },
    {
      icon: 'settings',
      route: 'settings',
      title: 'Settings',
    },
    {
      icon: 'help',
      route: 'help',
      title: 'Help',
    },
  ];

  private authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authenticationService.getCurrentUserValue() != null;
  }
}
