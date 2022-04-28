import { TestBed } from '@angular/core/testing';

import { GratisService } from './gratis.service';

describe('GratisService', () => {
  let service: GratisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GratisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
