import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAndReviewComponent } from './rating-and-review.component';

describe('RatingAndReviewComponent', () => {
  let component: RatingAndReviewComponent;
  let fixture: ComponentFixture<RatingAndReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingAndReviewComponent]
    });
    fixture = TestBed.createComponent(RatingAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
