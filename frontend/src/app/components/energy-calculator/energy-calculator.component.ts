import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnergyCalculatorService } from '../../services/energy-calculator.service';

@Component({
  selector: 'app-energy-calculator',
  standalone: false,
  templateUrl: './energy-calculator.component.html',
  styleUrl: './energy-calculator.component.scss'
})
export class EnergyCalculatorComponent {

  calculatorForm: FormGroup;

  constructor(private fb: FormBuilder, private energyCalculatorService: EnergyCalculatorService) {
    // Initialize the form with FormBuilder
    this.calculatorForm = this.fb.group({
      x1: [1.368],
      x2: [1.368],
      x3: [1.368],
      x4: [1.368],
      x5: [1.368],
      x6: [1.368],
      x7: [1.368],
      x8: ['Dropdown']
    });
  }
  
  orientationOptions = [
    { label: 'North (Value 2)', value: 2 },
    { label: 'South (Value 3)', value: 3 },
    { label: 'East (Value 4)', value: 4 },
    { label: 'West (Value 5)', value: 5 }
  ];

  onSubmit() {
    this.energyCalculatorService.calculateEnergy(this.calculatorForm.value).subscribe({
      next: response => {
        console.log('Form Submitted:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }
}
