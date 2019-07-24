import { TestBed } from '@angular/core/testing';

import { MyFirstAngularLibService } from './my-first-angular-lib.service';

describe('MyFirstAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstAngularLibService = TestBed.get(MyFirstAngularLibService);
    expect(service).toBeTruthy();
  });
});
