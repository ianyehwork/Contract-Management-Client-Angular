import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterUpdateComponent } from './poster-update.component';

describe('PosterUpdateComponent', () => {
  let component: PosterUpdateComponent;
  let fixture: ComponentFixture<PosterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
