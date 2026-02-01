import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';

export interface CalculationHistory {
  expression: string;
  result: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // State Signals
  private _currentInput: WritableSignal<string> = signal('0');
  private _previousInput: WritableSignal<string | null> = signal(null);
  private _operator: WritableSignal<string | null> = signal(null);
  private _history: WritableSignal<CalculationHistory[]> = signal([]);
  private _memory: WritableSignal<number> = signal(0);
  private _memoryActive: WritableSignal<boolean> = signal(false);
  private _newNumber = true; // Flag to reset input on next digit

  // Read-only Public Signals
  readonly currentDisplay: Signal<string> = computed(() => this._currentInput());
  readonly secondaryDisplay: Signal<string> = computed(() => {
    const prev = this._previousInput();
    const op = this._operator();
    if (prev && op) {
      return `${prev} ${op}`;
    }
    return '';
  });
  readonly history: Signal<CalculationHistory[]> = computed(() => this._history());
  readonly memoryValue: Signal<number> = computed(() => this._memory());
  readonly isMemoryStored: Signal<boolean> = computed(() => this._memoryActive());

  constructor() { }

  // Actions
  inputDigit(digit: string) {
    if (this._newNumber) {
      this._currentInput.set(digit);
      this._newNumber = false;
    } else {
      const current = this._currentInput();
      if (current.length < 16) { // Limit length
        this._currentInput.set(current === '0' ? digit : current + digit);
      }
    }
  }

  inputDecimal() {
    if (this._newNumber) {
      this._currentInput.set('0.');
      this._newNumber = false;
      return;
    }
    const current = this._currentInput();
    if (!current.includes('.')) {
      this._currentInput.set(current + '.');
    }
  }

  setOperator(op: string) {
    // If we have an operator and not a new number, calculate intermediate result
    if (this._operator() && !this._newNumber && this._previousInput()) {
      this.calculate();
    }

    this._operator.set(op);
    this._previousInput.set(this._currentInput());
    this._newNumber = true;
  }

  calculate() {
    const prev = this._previousInput();
    const current = this._currentInput();
    const op = this._operator();

    if (!prev || !op) return;

    const num1 = parseFloat(prev);
    const num2 = parseFloat(current);
    let result = 0;

    switch (op) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '×':
      case '*': result = num1 * num2; break;
      case '÷':
      case '/':
        if (num2 === 0) {
          this._currentInput.set("Error");
          this._newNumber = true;
          this._previousInput.set(null);
          this._operator.set(null);
          return;
        }
        result = num1 / num2;
        break;
    }

    // Format result to avoid floating point weirdness
    const resultStr = parseFloat(result.toPrecision(12)).toString();

    this._currentInput.set(resultStr);
    this._previousInput.set(null);
    this._operator.set(null);
    this._newNumber = true;

    // Add to history
    this._history.update(h => [{
      expression: `${prev} ${op} ${current}`,
      result: resultStr,
      timestamp: new Date()
    }, ...h].slice(0, 50)); // Keep last 50
  }

  toggleSign() {
    const current = parseFloat(this._currentInput());
    this._currentInput.set((current * -1).toString());
  }

  percent() {
    const current = parseFloat(this._currentInput());
    this._currentInput.set((current / 100).toString());
  }

  clear() {
    this._currentInput.set('0');
    this._previousInput.set(null);
    this._operator.set(null);
    this._newNumber = true;
  }

  // Memory Functions
  memoryAdd() {
    const val = parseFloat(this._currentInput());
    this._memory.update(m => m + val);
    this._memoryActive.set(true);
    this._newNumber = true;
  }

  memorySubtract() {
    const val = parseFloat(this._currentInput());
    this._memory.update(m => m - val);
    this._memoryActive.set(true);
    this._newNumber = true;
  }

  memoryRecall() {
    this._currentInput.set(this._memory().toString());
    this._newNumber = true;
  }

  memoryClear() {
    this._memory.set(0);
    this._memoryActive.set(false);
  }

  // Scientific functions (basic impl)
  scientific(func: string) {
    const current = parseFloat(this._currentInput());
    let res = 0;
    switch (func) {
      case 'sin': res = Math.sin(current); break;
      case 'cos': res = Math.cos(current); break;
      case 'tan': res = Math.tan(current); break;
      case 'log': res = Math.log10(current); break;
      case 'ln': res = Math.log(current); break;
      case 'sqrt': res = Math.sqrt(current); break;
      case 'pow2': res = Math.pow(current, 2); break;
    }
    this._currentInput.set(res.toString());
    this._newNumber = true;
  }
}
