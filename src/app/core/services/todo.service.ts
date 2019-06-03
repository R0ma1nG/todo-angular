import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor() {}

  getAll(): Todo[] {
    return [
      new Todo(1, 'Todo 1'),
      new Todo(2, 'Todo 2')
    ];
  }
}
