import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteParticulierComponent } from './vente-particulier.component';

describe('VenteParticulierComponent', () => {
  let component: VenteParticulierComponent;
  let fixture: ComponentFixture<VenteParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
