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
      minCols: 4
    };

    this.dashboard = this.todoService.getAll();
  }

  newTodoList() {
    console.log('new todo list clicked');
    this.todoService.add();
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
}
