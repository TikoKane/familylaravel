import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixProformatComponent } from './choix-proformat.component';

describe('ChoixProformatComponent', () => {
  let component: ChoixProformatComponent;
  let fixture: ComponentFixture<ChoixProformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixProformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixProformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
