import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private todos: Todo[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.todos = this.dashboardService.getTodos();
  }
}
