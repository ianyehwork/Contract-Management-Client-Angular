import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableComponent } from './parking-table.component';

describe('ParkingTableComponent', () => {
  let component: ParkingTableComponent;
  let fixture: ComponentFixture<ParkingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
