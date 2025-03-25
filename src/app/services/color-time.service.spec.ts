import { TestBed } from '@angular/core/testing';

import { ColorTimeService } from './color-time.service';

describe('ColorTimeService', () => {
  let service: ColorTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
