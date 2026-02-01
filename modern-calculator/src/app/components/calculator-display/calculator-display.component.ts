import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calculator-display',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './calculator-display.component.html',
    styleUrl: './calculator-display.component.css'
})
export class CalculatorDisplayComponent {
    @Input() mainText: string = '0';
    @Input() subText: string = '';
}
