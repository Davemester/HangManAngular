import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessArrayComponent } from './guess-array.component';

describe('GuessArrayComponent', () => {
  let component: GuessArrayComponent;
  let fixture: ComponentFixture<GuessArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
