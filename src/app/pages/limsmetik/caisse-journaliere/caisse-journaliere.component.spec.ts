import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseJournaliereComponent } from './caisse-journaliere.component';

describe('CaisseJournaliereComponent', () => {
  let component: CaisseJournaliereComponent;
  let fixture: ComponentFixture<CaisseJournaliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseJournaliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseJournaliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
