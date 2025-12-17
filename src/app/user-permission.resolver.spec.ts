import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userPermissionResolver } from './user-permission.resolver';

describe('userPermissionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userPermissionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
