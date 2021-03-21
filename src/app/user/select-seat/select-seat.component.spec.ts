import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectSeatComponent } from './select-seat.component';

describe('SelectSeatComponent', () => {
  let component: SelectSeatComponent;
  let fixture: ComponentFixture<SelectSeatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
