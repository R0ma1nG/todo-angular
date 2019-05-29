import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getCurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  login(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            const usr = firebase.auth().currentUser;
            const user = new User(usr.uid, usr.email);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      });
  }

  logout() {
    firebase.auth().signOut();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
