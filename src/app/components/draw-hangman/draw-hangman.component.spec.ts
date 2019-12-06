import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawHangmanComponent } from './draw-hangman.component';

describe('DrawHangmanComponent', () => {
  let component: DrawHangmanComponent;
  let fixture: ComponentFixture<DrawHangmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawHangmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawHangmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
