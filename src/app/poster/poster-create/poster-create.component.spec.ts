import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterCreateComponent } from './poster-create.component';

describe('CreatePosterComponent', () => {
  let component: PosterCreateComponent;
  let fixture: ComponentFixture<PosterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
