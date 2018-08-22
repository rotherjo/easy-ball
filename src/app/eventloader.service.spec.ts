import { TestBed, inject } from '@angular/core/testing';

import { EventloaderService } from './eventloader.service';

describe('EventloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventloaderService]
    });
  });

  it('should be created', inject([EventloaderService], (service: EventloaderService) => {
    expect(service).toBeTruthy();
  }));
});
