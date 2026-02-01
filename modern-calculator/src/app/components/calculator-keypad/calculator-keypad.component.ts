import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '../../services/calculator';

@Component({
    selector: 'app-calculator-keypad',
    standalone: true,
    imports: [CommonModule, CalculatorButtonComponent],
    templateUrl: './calculator-keypad.component.html',
    styleUrl: './calculator-keypad.component.css'
})
export class CalculatorKeypadComponent {
    calculator = inject(CalculatorService);
    showScientific = signal(false);

    toggleScientific() {
        this.showScientific.update(v => !v);
    }

    onButtonAction(label: string, type: string) {
        // Map labels to service methods
        switch (type) {
            case 'number':
                this.calculator.inputDigit(label);
                break;
            case 'operator':
                this.calculator.setOperator(label);
                break;
            case 'special':
                if (label === 'AC') this.calculator.clear();
                if (label === '+/-') this.calculator.toggleSign();
                if (label === '%') this.calculator.percent();
                if (label === '.') this.calculator.inputDecimal();
                break;
            case 'function': // Scientific
                // Handle mappings like 'sin', 'cos' etc.
                this.calculator.scientific(label);
                break;
            case 'equals':
                this.calculator.calculate();
                break;
        }
    }

    // Custom handlers for specific buttons that don't match exact label mapping
    handleEqual() { this.calculator.calculate(); }
    handleClear() { this.calculator.clear(); }
    handleDecimal() { this.calculator.inputDecimal(); }
}
