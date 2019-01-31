import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdvComponent } from './idv.component';

describe('IdvComponent', () => {
  let component: IdvComponent;
  let fixture: ComponentFixture<IdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
