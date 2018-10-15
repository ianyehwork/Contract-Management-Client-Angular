import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterSearchbarComponent } from './poster-searchbar.component';

describe('PosterSearchbarComponent', () => {
  let component: PosterSearchbarComponent;
  let fixture: ComponentFixture<PosterSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
