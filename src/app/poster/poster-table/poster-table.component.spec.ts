import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterTableComponent } from './poster-table.component';

describe('PosterTableComponent', () => {
  let component: PosterTableComponent;
  let fixture: ComponentFixture<PosterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
