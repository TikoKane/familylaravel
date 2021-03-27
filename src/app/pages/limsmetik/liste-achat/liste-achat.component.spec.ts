import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAchatComponent } from './liste-achat.component';

describe('ListeAchatComponent', () => {
  let component: ListeAchatComponent;
  let fixture: ComponentFixture<ListeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
