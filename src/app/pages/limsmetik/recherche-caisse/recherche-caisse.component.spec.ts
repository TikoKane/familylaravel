import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCaisseComponent } from './recherche-caisse.component';

describe('RechercheCaisseComponent', () => {
  let component: RechercheCaisseComponent;
  let fixture: ComponentFixture<RechercheCaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
