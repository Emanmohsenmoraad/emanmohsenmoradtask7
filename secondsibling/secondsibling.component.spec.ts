import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsiblingComponent } from './secondsibling.component';

describe('SecondsiblingComponent', () => {
  let component: SecondsiblingComponent;
  let fixture: ComponentFixture<SecondsiblingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondsiblingComponent]
    });
    fixture = TestBed.createComponent(SecondsiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
