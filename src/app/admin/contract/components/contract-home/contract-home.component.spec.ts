import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractHomeComponent } from './contract-home.component';

describe('ContractHomeComponent', () => {
  let component: ContractHomeComponent;
  let fixture: ComponentFixture<ContractHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
