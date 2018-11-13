import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTabsetComponent } from './setting-tabset.component';

describe('SettingTabsetComponent', () => {
  let component: SettingTabsetComponent;
  let fixture: ComponentFixture<SettingTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
