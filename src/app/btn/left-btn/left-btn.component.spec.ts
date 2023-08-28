import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBtnComponent } from './left-btn.component';

describe('LeftBtnComponent', () => {
  let component: LeftBtnComponent;
  let fixture: ComponentFixture<LeftBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftBtnComponent]
    });
    fixture = TestBed.createComponent(LeftBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
