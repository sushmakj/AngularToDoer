import { Component, OnInit } from '@angular/core';
import { TodoMainService } from '../services/todo-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private _router: Router, _todoSvc: TodoMainService) { }

  ngOnInit() {
  }

}
