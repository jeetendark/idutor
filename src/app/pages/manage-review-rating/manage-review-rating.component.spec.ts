import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReviewRatingComponent } from './manage-review-rating.component';

describe('ManageReviewRatingComponent', () => {
  let component: ManageReviewRatingComponent;
  let fixture: ComponentFixture<ManageReviewRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageReviewRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReviewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
