import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformatParticulierComponent } from './proformat-particulier.component';

describe('ProformatParticulierComponent', () => {
  let component: ProformatParticulierComponent;
  let fixture: ComponentFixture<ProformatParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformatParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformatParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
