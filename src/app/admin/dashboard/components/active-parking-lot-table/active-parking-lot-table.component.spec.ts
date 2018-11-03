import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveParkingLotTableComponent } from './active-parking-lot-table.component';

describe('ActiveParkingLotTableComponent', () => {
  let component: ActiveParkingLotTableComponent;
  let fixture: ComponentFixture<ActiveParkingLotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveParkingLotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveParkingLotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
