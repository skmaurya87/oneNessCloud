import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOnlineTraningComponent } from './live-online-traning.component';

describe('LiveOnlineTraningComponent', () => {
  let component: LiveOnlineTraningComponent;
  let fixture: ComponentFixture<LiveOnlineTraningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveOnlineTraningComponent]
    });
    fixture = TestBed.createComponent(LiveOnlineTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
