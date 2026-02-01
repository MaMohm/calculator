import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calculator-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './calculator-button.component.html',
    styleUrl: './calculator-button.component.css'
})
export class CalculatorButtonComponent {
    @Input() label: string = '';
    @Input() type: 'number' | 'operator' | 'function' | 'special' | 'equals' = 'number';
    @Input() wide: boolean = false;
    @Output() action = new EventEmitter<string>();

    handleClick() {
        this.action.emit(this.label);
    }

    getClasses(): string {
        let base = 'w-full h-full rounded-2xl font-bold text-2xl transition-all duration-100 ease-out active:scale-95 flex items-center justify-center outline-none select-none relative overflow-hidden group shadow-md shadow-gray-900/50 ';

        // Type-based styling
        switch (this.type) {
            case 'number':
                base += 'bg-gray-700 text-white hover:bg-gray-600 ';
                break;
            case 'operator':
                base += 'bg-amber-500 text-white hover:bg-amber-400 ';
                break;
            case 'function': // Scientific
                base += 'bg-gray-800 text-gray-300 text-lg hover:bg-gray-700 ';
                break;
            case 'special': // MC, MR, %, +/-
                base += 'bg-cyan-600 text-white hover:bg-cyan-500 ';
                break;
            case 'equals':
                base += 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 ';
                break;
        }

        if (this.wide) {
            // base += 'col-span-2 aspect-[2/1] '; // Grid flow handles aspect, but span is useful if passed to grid container. 
            // Actually, standard grid handling is done on the host or wrapper. 
            // But we can add a class here if we want the button itself to look different?
            // No, layout is usually parent's job. But we can keep aspect ratio.
            base += 'aspect-[2.1/1] '; // Slightly wider
        } else {
            base += 'aspect-square ';
        }

        return base;
    }
}
