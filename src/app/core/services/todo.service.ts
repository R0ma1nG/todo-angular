import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class TodoService {
  todos = [
    new Todo('Todo 1', 'description', 0, 0, 2, 1, ['tache 1', 'tache 2']),
    new Todo('Todo 2', 'description')
  ];

  constructor() {}

  getAll(): Todo[] {
    return this.todos;
  }

  add() {
    this.todos.push(new Todo('Todo', 'description'));
  }

  remove(item: Todo) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
}
