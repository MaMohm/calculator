import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';
import { CalculatorKeypadComponent } from './components/calculator-keypad/calculator-keypad.component';
import { HistoryTrayComponent } from './components/history-tray/history-tray.component';
import { CalculatorService } from './services/calculator';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        CalculatorDisplayComponent,
        CalculatorKeypadComponent,
        HistoryTrayComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'modern-calculator';
    calculator = inject(CalculatorService);
    isHistoryOpen = false;

    toggleHistory() {
        this.isHistoryOpen = !this.isHistoryOpen;
    }
}
