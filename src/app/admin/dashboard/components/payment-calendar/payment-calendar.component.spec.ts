import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCalendarComponent } from './payment-calendar.component';

describe('PaymentCalendarComponent', () => {
  let component: PaymentCalendarComponent;
  let fixture: ComponentFixture<PaymentCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
