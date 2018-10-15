import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAreaHomeComponent } from './parking-area-home.component';

describe('ParkingAreaHomeComponent', () => {
  let component: ParkingAreaHomeComponent;
  let fixture: ComponentFixture<ParkingAreaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAreaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAreaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
