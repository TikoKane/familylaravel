import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoscompteComponent } from './infoscompte.component';

describe('InfoscompteComponent', () => {
  let component: InfoscompteComponent;
  let fixture: ComponentFixture<InfoscompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoscompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoscompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
