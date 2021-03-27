import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteRapideComponent } from './vente-rapide.component';

describe('VenteRapideComponent', () => {
  let component: VenteRapideComponent;
  let fixture: ComponentFixture<VenteRapideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteRapideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteRapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
