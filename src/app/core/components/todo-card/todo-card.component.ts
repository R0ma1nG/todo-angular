import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  @Input() item: Todo;
  newTodoItemString: string;

  ngOnInit() {
  }

  removeItem(item) {
    console.log('remove item', item);
    this.todoService.remove(item);
  }

  addTodoItem() {
    console.log('Add toto item', this.newTodoItemString);
    this.item.itemList.push(this.newTodoItemString);
    this.newTodoItemString = '';
  }
}
