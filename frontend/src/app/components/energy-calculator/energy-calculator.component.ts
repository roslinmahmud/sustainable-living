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
      X1: [1.368],
      X2: [1.368],
      X3: [1.368],
      X4: [1.368],
      X5: [1.368],
      X6: [1.368],
      X7: [1.368],
      X8: [0]
    });
  }


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
