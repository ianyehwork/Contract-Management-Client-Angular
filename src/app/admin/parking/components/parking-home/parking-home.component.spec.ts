import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingHomeComponent } from './parking-home.component';

describe('ParkingHomeComponent', () => {
  let component: ParkingHomeComponent;
  let fixture: ComponentFixture<ParkingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
