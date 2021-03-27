import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirProduitAcheterComponent } from './voir-produit-acheter.component';

describe('VoirProduitAcheterComponent', () => {
  let component: VoirProduitAcheterComponent;
  let fixture: ComponentFixture<VoirProduitAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirProduitAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirProduitAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
