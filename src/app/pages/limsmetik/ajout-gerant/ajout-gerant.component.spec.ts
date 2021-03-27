import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutGerantComponent } from './ajout-gerant.component';

describe('AjoutGerantComponent', () => {
  let component: AjoutGerantComponent;
  let fixture: ComponentFixture<AjoutGerantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutGerantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
