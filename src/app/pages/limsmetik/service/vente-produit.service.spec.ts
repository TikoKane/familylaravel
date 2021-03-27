import { TestBed } from '@angular/core/testing';

import { VenteProduitService } from './vente-produit.service';

describe('VenteProduitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenteProduitService = TestBed.get(VenteProduitService);
    expect(service).toBeTruthy();
  });
});
