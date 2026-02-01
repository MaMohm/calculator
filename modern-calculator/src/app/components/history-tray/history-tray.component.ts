import { Component, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../../services/calculator';

@Component({
    selector: 'app-history-tray',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './history-tray.component.html',
    styleUrl: './history-tray.component.css'
})
export class HistoryTrayComponent {
    calculator = inject(CalculatorService);
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    get history() { return this.calculator.history; }
}
