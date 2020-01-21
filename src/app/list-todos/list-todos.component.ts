import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TodoListService } from '../services/todo-list.service';
import { TodoMain } from '../entities/TodoMain';
import { TodoMainService } from '../services/todo-main.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  loggedInUsername: string = '';
  todos: TodoMain[];
  pendingTodoCount: number = 0;

  constructor(private _authSvc: AuthService, private _todosSvc: TodoMainService) { }

  ngOnInit() {
    this.loggedInUsername = this._authSvc.getLoggedInUsername();
    this._todosSvc.findAllTodos(this.loggedInUsername).subscribe((responseData) => {
      this.todos = responseData;
    })
  }

}
