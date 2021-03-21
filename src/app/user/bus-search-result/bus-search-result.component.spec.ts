import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusSearchResultComponent } from './bus-search-result.component';

describe('BusSearchResultComponent', () => {
  let component: BusSearchResultComponent;
  let fixture: ComponentFixture<BusSearchResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BusSearchResultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
