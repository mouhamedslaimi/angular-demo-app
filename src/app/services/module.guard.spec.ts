import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { moduleGuard } from './module.guard';

describe('moduleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moduleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
