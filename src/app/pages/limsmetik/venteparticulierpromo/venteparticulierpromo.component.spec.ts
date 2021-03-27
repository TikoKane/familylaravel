import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteparticulierpromoComponent } from './venteparticulierpromo.component';

describe('VenteparticulierpromoComponent', () => {
  let component: VenteparticulierpromoComponent;
  let fixture: ComponentFixture<VenteparticulierpromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteparticulierpromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteparticulierpromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
