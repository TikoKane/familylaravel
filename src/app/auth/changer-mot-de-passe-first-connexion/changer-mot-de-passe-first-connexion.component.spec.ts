import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMotDePasseFirstConnexionComponent } from './changer-mot-de-passe-first-connexion.component';

describe('ChangerMotDePasseFirstConnexionComponent', () => {
  let component: ChangerMotDePasseFirstConnexionComponent;
  let fixture: ComponentFixture<ChangerMotDePasseFirstConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerMotDePasseFirstConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerMotDePasseFirstConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
