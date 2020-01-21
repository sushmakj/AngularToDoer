import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../entities/TodoList';
import { TODOLIST_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private _http: HttpClient) { }

  public addNewTodoList(username: string, todoList: TodoList) {
    return this._http.post<TodoList>(`${TODOLIST_API_URL}/${username}/new`, todoList, { observe: 'response' });
  }

  public editTodoList(username: string, todoList: TodoList) {
    return this._http.put<TodoList>(`${TODOLIST_API_URL}/${username}/${todoList.todoListId}/edit`, todoList, { observe: 'response' });
  }

  public deleteTodoList(username: string, todoListId: number) {
    return this._http.delete<TodoList>(`${TODOLIST_API_URL}/${username}/${todoListId}/delete`, { observe: 'response' });
  }

  public findTodoListById(username: string, todoListId: number) {
    return this._http.get<TodoList>(`${TODOLIST_API_URL}/${username}/id/${todoListId}`);
  }

  public findAllTodoLists(username: string) {
    return this._http.get<TodoList[]>(`${TODOLIST_API_URL}/${username}/all`);
  }
  
}
