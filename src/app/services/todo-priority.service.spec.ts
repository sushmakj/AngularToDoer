import { TestBed } from '@angular/core/testing';

import { TodoPriorityService } from './todo-priority.service';

describe('TodoPriorityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoPriorityService = TestBed.get(TodoPriorityService);
    expect(service).toBeTruthy();
  });
});
