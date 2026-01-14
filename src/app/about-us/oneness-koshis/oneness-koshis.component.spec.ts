import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnenessKoshisComponent } from './oneness-koshis.component';

describe('OnenessKoshisComponent', () => {
  let component: OnenessKoshisComponent;
  let fixture: ComponentFixture<OnenessKoshisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnenessKoshisComponent]
    });
    fixture = TestBed.createComponent(OnenessKoshisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
