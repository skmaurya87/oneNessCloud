import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessGuaranteeComponent } from './happiness-guarantee.component';

describe('HappinessGuaranteeComponent', () => {
  let component: HappinessGuaranteeComponent;
  let fixture: ComponentFixture<HappinessGuaranteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappinessGuaranteeComponent]
    });
    fixture = TestBed.createComponent(HappinessGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
