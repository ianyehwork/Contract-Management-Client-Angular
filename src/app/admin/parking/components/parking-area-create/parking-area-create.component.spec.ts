import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAreaCreateComponent } from './parking-area-create.component';

describe('ParkingAreaCreateComponent', () => {
  let component: ParkingAreaCreateComponent;
  let fixture: ComponentFixture<ParkingAreaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAreaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAreaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
