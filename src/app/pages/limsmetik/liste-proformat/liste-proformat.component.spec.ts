import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProformatComponent } from './liste-proformat.component';

describe('ListeProformatComponent', () => {
  let component: ListeProformatComponent;
  let fixture: ComponentFixture<ListeProformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
