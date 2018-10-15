import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterUploadComponent } from './poster-upload.component';

describe('PosterUploadComponent', () => {
  let component: PosterUploadComponent;
  let fixture: ComponentFixture<PosterUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
