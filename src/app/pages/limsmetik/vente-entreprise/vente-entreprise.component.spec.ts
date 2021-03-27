import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteEntrepriseComponent } from './vente-entreprise.component';

describe('VenteEntrepriseComponent', () => {
  let component: VenteEntrepriseComponent;
  let fixture: ComponentFixture<VenteEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
