import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingChangePasswordComponent } from './setting-change-password.component';

describe('SettingChangePasswordComponent', () => {
  let component: SettingChangePasswordComponent;
  let fixture: ComponentFixture<SettingChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
