import { TestBed } from '@angular/core/testing';

import { TodoStepsService } from './todo-steps.service';

describe('TodoStepsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoStepsService = TestBed.get(TodoStepsService);
    expect(service).toBeTruthy();
  });
});
