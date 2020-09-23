import { TestBed } from '@angular/core/testing';

import { AvaterService } from './avater.service';

describe('AvaterService', () => {
  let service: AvaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
