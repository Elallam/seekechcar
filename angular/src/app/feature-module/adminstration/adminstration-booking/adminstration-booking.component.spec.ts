import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationBookingComponent } from './adminstration-booking.component';

describe('AdminstrationBookingComponent', () => {
  let component: AdminstrationBookingComponent;
  let fixture: ComponentFixture<AdminstrationBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrationBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminstrationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
