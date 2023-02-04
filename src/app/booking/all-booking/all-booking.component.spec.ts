import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllBookingComponent } from './all-booking.component';

describe('AllBookingComponent', () => {
  let component: AllBookingComponent;
  let fixture: ComponentFixture<AllBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AllBookingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
