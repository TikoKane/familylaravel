import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteentreprisepromoComponent } from './venteentreprisepromo.component';

describe('VenteentreprisepromoComponent', () => {
  let component: VenteentreprisepromoComponent;
  let fixture: ComponentFixture<VenteentreprisepromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteentreprisepromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteentreprisepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
