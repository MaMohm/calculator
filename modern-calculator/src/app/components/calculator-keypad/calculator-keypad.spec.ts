import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorKeypad } from './calculator-keypad';

describe('CalculatorKeypad', () => {
  let component: CalculatorKeypad;
  let fixture: ComponentFixture<CalculatorKeypad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorKeypad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorKeypad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
