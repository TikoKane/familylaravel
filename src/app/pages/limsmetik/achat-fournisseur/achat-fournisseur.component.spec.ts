import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatFournisseurComponent } from './achat-fournisseur.component';

describe('AchatFournisseurComponent', () => {
  let component: AchatFournisseurComponent;
  let fixture: ComponentFixture<AchatFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
