import { TestBed } from '@angular/core/testing';

import { SoftwaredataService } from './softwaredata.service';

describe('SoftwaredataService', () => {
  let service: SoftwaredataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwaredataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
