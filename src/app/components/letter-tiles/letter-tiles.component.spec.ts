import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTilesComponent } from './letter-tiles.component';

describe('LetterTilesComponent', () => {
  let component: LetterTilesComponent;
  let fixture: ComponentFixture<LetterTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
