import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterHomeComponent } from './poster-home.component';

describe('PosterComponent', () => {
  let component: PosterHomeComponent;
  let fixture: ComponentFixture<PosterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
