import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationGalleryComponent } from './celebration-gallery.component';

describe('CelebrationGalleryComponent', () => {
  let component: CelebrationGalleryComponent;
  let fixture: ComponentFixture<CelebrationGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrationGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
