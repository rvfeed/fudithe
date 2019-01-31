import { TestBed } from '@angular/core/testing';

import { RiskRatingService } from './risk-rating.service';

describe('RiskRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskRatingService = TestBed.get(RiskRatingService);
    expect(service).toBeTruthy();
  });
});
