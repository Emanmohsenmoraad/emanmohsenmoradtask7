import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsiblingComponent } from './firstsibling.component';

describe('FirstsiblingComponent', () => {
  let component: FirstsiblingComponent;
  let fixture: ComponentFixture<FirstsiblingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstsiblingComponent]
    });
    fixture = TestBed.createComponent(FirstsiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
