import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoMain } from '../entities/TodoMain';
import { TODOMAIN_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoMainService {

  constructor(private _http: HttpClient) { }

  public addNewTodo(username: string, todoMain: TodoMain) {
    return this._http.post<TodoMain>(`${TODOMAIN_API_URL}/${username}/new`, todoMain, { observe: 'response' });
  }

  public updateTodo(username: string, todoMain: TodoMain) {
    return this._http.put<TodoMain>(`${TODOMAIN_API_URL}/${username}/${todoMain.todoId}/edit`, todoMain, { observe: 'response' });
  }

  public deleteTodo(username: string, todoId: number) {
    return this._http.delete<TodoMain>(`${TODOMAIN_API_URL}/${username}/${todoId}/delete`, { observe: 'response' });
  }

  public findTodoById(username: string, todoId: number) {
    return this._http.get<TodoMain>(`${TODOMAIN_API_URL}/${username}/id/${todoId}`);
  }

  public findAllTodos(username: string) {
    return this._http.get<TodoMain[]>(`${TODOMAIN_API_URL}/${username}/all`);
  }

}
