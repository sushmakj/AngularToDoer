import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoStep } from '../entities/TodoStep';
import { TODOSTEPS_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoStepsService {

  constructor(private _http: HttpClient) { }

  public addNewTodoStep(todoId: number, todoStep: TodoStep) {
    return this._http.post<TodoStep>(`${TODOSTEPS_API_URL}/${todoId}/new`, todoStep, { observe: 'response' });
  }

  public editTodoStep(todoStep: TodoStep) {
    return this._http.put<TodoStep>(`${TODOSTEPS_API_URL}/${todoStep.todoStepId}/edit`, todoStep, { observe: 'response' });
  }

  public deleteTodoStep(todoStepId: number) {
    return this._http.delete<TodoStep>(`${TODOSTEPS_API_URL}/${todoStepId}/delete`, { observe: 'response' });
  }

  public findTodoStepById(todoStepId: number) {
    return this._http.get<TodoStep>(`${TODOSTEPS_API_URL}/id/${todoStepId}`, { observe: 'response' });
  }

  public findAllTodoStepsForTodo(todoStepId: number) {
    return this._http.get<TodoStep[]>(`${TODOSTEPS_API_URL}/${todoStepId}/all`, { observe: 'response' });
  }

  public findAllTodoSteps() {
    return this._http.get<TodoStep[]>(`${TODOSTEPS_API_URL}/all`, { observe: 'response' });
  }

}
