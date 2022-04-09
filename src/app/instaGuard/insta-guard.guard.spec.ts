import { TestBed } from '@angular/core/testing';

import { InstaGuard } from './insta-guard.service';

describe('InstaGuardGuard', () => {
  let guard: InstaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
