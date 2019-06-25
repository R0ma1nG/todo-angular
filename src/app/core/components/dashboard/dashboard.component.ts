import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {GridsterConfig, GridType} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  dashboard: Array<Todo>;
  options: GridsterConfig;

  ngOnInit() {
    this.options = {
      gridType: GridType.ScrollVertical,
      draggable: {
        enabled: true
      },
      pushItems: true,
      resizable: {
        enabled: true
      },
      maxCols: 4,
      minCols: 4,
      swap: true
    };

    this.dashboard = this.todoService.getAll();
  }

  newTodo() {
    console.log('new todo list clicked');
    this.todoService.add();
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }
}
