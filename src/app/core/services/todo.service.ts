import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class TodoService {
  todos = [
    new Todo('Todo 1', 'Ideoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt.', 0, 0, 2, 1, ['tache 1', 'tache 2']),
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
