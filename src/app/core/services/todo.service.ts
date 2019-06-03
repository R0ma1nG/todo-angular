import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class TodoService {

  i = 0;
  todos = [
    new Todo(this.i++, 'Todo 1', 'todo 1 description'),
    new Todo(this.i++, 'Todo 2', 'todo 2 description, the description is longer than the first one.')
  ];


  constructor() {}

  getAll(): Todo[] {
    return this.todos;
  }

  add() {
    this.todos.push(new Todo(this.i++, `Todo ${this.i}`, 'description'));
  }
}
