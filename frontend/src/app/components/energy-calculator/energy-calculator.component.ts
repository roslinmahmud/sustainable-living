import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-energy-calculator',
  standalone: false,
  templateUrl: './energy-calculator.component.html',
  styleUrl: './energy-calculator.component.scss'
})
export class EnergyCalculatorComponent {

  calculatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with FormBuilder
    this.calculatorForm = this.fb.group({
      relativeCompactness: [1.368],
      overallHeight: [1.368],
      surfaceArea: [1.368],
      wallArea: [1.368],
      roof: [1.368],
      glazingArea: [1.368],
      glazingAreaDistribution: [1.368],
      orientation: ['Dropdown']
    });
  }
  
  orientationOptions = [
    { label: 'North (Value 2)', value: 2 },
    { label: 'South (Value 3)', value: 3 },
    { label: 'East (Value 4)', value: 4 },
    { label: 'West (Value 5)', value: 5 }
  ];

  onSubmit() {
    console.log('Form Submitted:', this.calculatorForm.value);
  }
}
