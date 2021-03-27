import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGerantComponent } from './liste-gerant.component';

describe('ListeGerantComponent', () => {
  let component: ListeGerantComponent;
  let fixture: ComponentFixture<ListeGerantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGerantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
