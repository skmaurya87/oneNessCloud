import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOnlineTrainingComponent } from './live-online-training.component';

describe('LiveOnlineTrainingComponent', () => {
  let component: LiveOnlineTrainingComponent;
  let fixture: ComponentFixture<LiveOnlineTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveOnlineTrainingComponent]
    });
    fixture = TestBed.createComponent(LiveOnlineTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
