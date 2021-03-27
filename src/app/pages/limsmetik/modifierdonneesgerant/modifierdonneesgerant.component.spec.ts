import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdonneesgerantComponent } from './modifierdonneesgerant.component';

describe('ModifierdonneesgerantComponent', () => {
  let component: ModifierdonneesgerantComponent;
  let fixture: ComponentFixture<ModifierdonneesgerantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierdonneesgerantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierdonneesgerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
