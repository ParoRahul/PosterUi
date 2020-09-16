import { TestBed } from '@angular/core/testing';

import { HompageDataService } from './hompage-data.service';

describe('HompageDataService', () => {
  let service: HompageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HompageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
