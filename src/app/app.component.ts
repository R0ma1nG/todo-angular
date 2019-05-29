import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {firebaseConfig} from './firebaseConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
