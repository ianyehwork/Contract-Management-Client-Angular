import { TestBed, inject } from '@angular/core/testing';

import { IncomeGraphService } from './income-graph.service';

describe('IncomeGraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncomeGraphService]
    });
  });

  it('should be created', inject([IncomeGraphService], (service: IncomeGraphService) => {
    expect(service).toBeTruthy();
  }));
});
