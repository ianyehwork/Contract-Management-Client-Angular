import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAreaDeleteComponent } from './parking-area-delete.component';

describe('ParkingAreaDeleteComponent', () => {
  let component: ParkingAreaDeleteComponent;
  let fixture: ComponentFixture<ParkingAreaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAreaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAreaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
