import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private authenticationService: AuthenticationService;

  constructor(authService: AuthenticationService) {
    this.authenticationService = authService;
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login('test', 'pwd');
  }
}
