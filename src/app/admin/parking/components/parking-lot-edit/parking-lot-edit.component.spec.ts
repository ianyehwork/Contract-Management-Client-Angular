import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotEditComponent } from './parking-lot-edit.component';

describe('ParkingLotEditComponent', () => {
  let component: ParkingLotEditComponent;
  let fixture: ComponentFixture<ParkingLotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
