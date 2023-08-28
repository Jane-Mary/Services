import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBtnComponent } from './right-btn.component';

describe('RightBtnComponent', () => {
  let component: RightBtnComponent;
  let fixture: ComponentFixture<RightBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightBtnComponent]
    });
    fixture = TestBed.createComponent(RightBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
