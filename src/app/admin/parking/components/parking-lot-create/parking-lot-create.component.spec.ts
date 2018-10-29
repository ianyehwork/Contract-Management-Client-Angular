import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotCreateComponent } from './parking-lot-create.component';

describe('ParkingLotCreateComponent', () => {
  let component: ParkingLotCreateComponent;
  let fixture: ComponentFixture<ParkingLotCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingLotCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
