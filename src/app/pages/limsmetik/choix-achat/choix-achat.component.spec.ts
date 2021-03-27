import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixAchatComponent } from './choix-achat.component';

describe('ChoixAchatComponent', () => {
  let component: ChoixAchatComponent;
  let fixture: ComponentFixture<ChoixAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
