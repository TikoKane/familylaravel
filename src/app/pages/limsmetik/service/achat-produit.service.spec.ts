import { TestBed } from '@angular/core/testing';

import { AchatProduitService } from './achat-produit.service';

describe('AchatProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchatProduitService = TestBed.get(AchatProduitService);
    expect(service).toBeTruthy();
  });
});
