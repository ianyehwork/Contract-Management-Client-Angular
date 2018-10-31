import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotSearchComponent } from './parking-lot-search.component';

describe('ParkingLotSearchComponent', () => {
  let component: ParkingLotSearchComponent;
  let fixture: ComponentFixture<ParkingLotSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
