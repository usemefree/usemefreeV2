import { TestBed } from '@angular/core/testing';

import { GenerichttpclientService } from './generichttpclient.service';

describe('GenerichttpclientService', () => {
  let service: GenerichttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerichttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
