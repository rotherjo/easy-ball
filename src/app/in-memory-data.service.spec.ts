import { TestBed, inject } from '@angular/core/testing';

import { InMomoryDataService } from './in-momory-data.service';

describe('InMomoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMomoryDataService]
    });
  });

  it('should be created', inject([InMomoryDataService], (service: InMomoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
