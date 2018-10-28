import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAreaEditComponent } from './parking-area-edit.component';

describe('ParkingAreaEditComponent', () => {
  let component: ParkingAreaEditComponent;
  let fixture: ComponentFixture<ParkingAreaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAreaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
