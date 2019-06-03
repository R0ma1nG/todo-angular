import {Injectable} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class DashboardService {
  constructor(public todoService: TodoService) {}

  getTodos(): Todo[] {
    return this.todoService.getAll();
  }
}
