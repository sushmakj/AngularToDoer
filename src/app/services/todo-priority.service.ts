import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoPriority } from '../entities/TodoPriority';
import { TODOPRIORITY_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoPriorityService {

  constructor(private _http: HttpClient) { }

  public addNewTodoPriority(username: string, todoPriority: TodoPriority) {
    return this._http.post<TodoPriority>(`${TODOPRIORITY_API_URL}/${username}/new`, todoPriority, { observe: 'response' });
  }

  public editTodoPriority(username: string, todoPriority: TodoPriority) {
    return this._http.put<TodoPriority>(`${TODOPRIORITY_API_URL}/${username}/${todoPriority.todoPriorityId}/edit`, todoPriority, { observe: 'response' });
  }

  public deleteTodoPriority(username: string, todoPriorityId: number) {
    return this._http.delete<TodoPriority>(`${TODOPRIORITY_API_URL}/${username}/${todoPriorityId}/delete`, { observe: 'response' });
  }

  public findTodoPriorityById(username: string, todoPriorityId: number) {
    return this._http.get<TodoPriority>(`${TODOPRIORITY_API_URL}/${username}/id/${todoPriorityId}`, { observe: 'response' });
  }

  public findAllTodoPriorities(username: string) {
    return this._http.get<TodoPriority[]>(`${TODOPRIORITY_API_URL}/${username}/all`, { observe: 'response' });
  }

}
