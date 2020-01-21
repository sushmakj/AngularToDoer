import { TestBed } from '@angular/core/testing';

import { TodoMainService } from './todo-main.service';

describe('TodoMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoMainService = TestBed.get(TodoMainService);
    expect(service).toBeTruthy();
  });
});
