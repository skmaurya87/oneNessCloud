import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertsComponent } from './our-experts.component';

describe('OurExpertsComponent', () => {
  let component: OurExpertsComponent;
  let fixture: ComponentFixture<OurExpertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurExpertsComponent]
    });
    fixture = TestBed.createComponent(OurExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
