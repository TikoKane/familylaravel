import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatProduitComponent } from './achat-produit.component';

describe('AchatProduitComponent', () => {
  let component: AchatProduitComponent;
  let fixture: ComponentFixture<AchatProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
