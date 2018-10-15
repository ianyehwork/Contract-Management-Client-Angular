import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterDeleteModalComponent } from './poster-delete-modal.component';

describe('DeletePosterModalComponent', () => {
  let component: PosterDeleteModalComponent;
  let fixture: ComponentFixture<PosterDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
