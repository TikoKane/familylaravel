import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformatEntrepriseComponent } from './proformat-entreprise.component';

describe('ProformatEntrepriseComponent', () => {
  let component: ProformatEntrepriseComponent;
  let fixture: ComponentFixture<ProformatEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformatEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformatEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
