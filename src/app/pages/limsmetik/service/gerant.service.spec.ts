import { TestBed } from '@angular/core/testing';

import { GerantService } from './gerant.service';

describe('GerantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerantService = TestBed.get(GerantService);
    expect(service).toBeTruthy();
  });
});
