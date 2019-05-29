import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private authenticationService: AuthenticationService;
  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(authService: AuthenticationService) {
    this.authenticationService = authService;
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.user.value.email, this.user.value.password);
  }
}
