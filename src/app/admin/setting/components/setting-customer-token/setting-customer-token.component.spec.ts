import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCustomerTokenComponent } from './setting-customer-token.component';

describe('SettingCustomerTokenComponent', () => {
  let component: SettingCustomerTokenComponent;
  let fixture: ComponentFixture<SettingCustomerTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingCustomerTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCustomerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
