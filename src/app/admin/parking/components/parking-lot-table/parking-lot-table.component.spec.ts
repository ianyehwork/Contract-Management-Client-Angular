import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotTableComponent } from './parking-lot-table.component';

describe('ParkingLotTableComponent', () => {
  let component: ParkingLotTableComponent;
  let fixture: ComponentFixture<ParkingLotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
