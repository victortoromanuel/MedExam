import { TestBed } from '@angular/core/testing';

import { CortoService } from './corto.service';

describe('CortoService', () => {
  let service: CortoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CortoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
