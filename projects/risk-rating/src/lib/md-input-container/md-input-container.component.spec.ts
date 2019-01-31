import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdInputContainerComponent } from './md-input-container.component';

describe('MdInputContainerComponent', () => {
  let component: MdInputContainerComponent;
  let fixture: ComponentFixture<MdInputContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdInputContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
