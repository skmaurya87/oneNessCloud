import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarsAsAServiceComponent } from './webinars-as-a-service.component';

describe('WebinarsAsAServiceComponent', () => {
  let component: WebinarsAsAServiceComponent;
  let fixture: ComponentFixture<WebinarsAsAServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinarsAsAServiceComponent]
    });
    fixture = TestBed.createComponent(WebinarsAsAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
