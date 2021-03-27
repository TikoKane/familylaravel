import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenterapidepromoComponent } from './venterapidepromo.component';

describe('VenterapidepromoComponent', () => {
  let component: VenterapidepromoComponent;
  let fixture: ComponentFixture<VenterapidepromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenterapidepromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenterapidepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
