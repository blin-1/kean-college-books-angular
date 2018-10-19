import { TestBed, inject } from '@angular/core/testing';

import { BlackboardService } from './blackboard.service';

describe('BlackboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlackboardService]
    });
  });

  it('should be created', inject([BlackboardService], (service: BlackboardService) => {
    expect(service).toBeTruthy();
  }));
});
