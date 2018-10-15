import { TestBed, inject } from '@angular/core/testing';

import { DefaultAuthGuard} from './default-auth-guard.service';

describe('DefaultAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultAuthGuard]
    });
  });

  it('should be created', inject([DefaultAuthGuard], (service: DefaultAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
