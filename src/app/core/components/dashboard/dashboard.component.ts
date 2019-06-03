import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getAll();
  }

  newTodoList() {
    console.log('new todo list clicked');
    this.todoService.add();
  }
}
