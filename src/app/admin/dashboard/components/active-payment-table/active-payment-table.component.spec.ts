import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePaymentTableComponent } from './active-payment-table.component';

describe('ActivePaymentTableComponent', () => {
  let component: ActivePaymentTableComponent;
  let fixture: ComponentFixture<ActivePaymentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePaymentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePaymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
