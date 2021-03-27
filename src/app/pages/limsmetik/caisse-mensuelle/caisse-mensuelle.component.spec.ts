import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseMensuelleComponent } from './caisse-mensuelle.component';

describe('CaisseMensuelleComponent', () => {
  let component: CaisseMensuelleComponent;
  let fixture: ComponentFixture<CaisseMensuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseMensuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseMensuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
