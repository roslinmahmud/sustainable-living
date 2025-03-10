import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnergyResponse } from '../../models/energy.model';

@Component({
  selector: 'app-energy-result',
  standalone: false,
  templateUrl: './energy-result.component.html',
  styleUrls: ['./energy-result.component.scss']
})
export class EnergyResultComponent {
  results: EnergyResponse | null = null;
  result: any;

  private electricityPrice = 11;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.results = navigation?.extras.state?.['result'] || null;
    
    this.result = {
      heatingLoad: this.results?.Heating_Load_Y1.toFixed(2),
      coolingLoad: this.results?.Cooling_Load_Y2.toFixed(2),
      heatingCost: ((this.results?.Heating_Load_Y1 ?? 0) * this.electricityPrice).toFixed(2),
      coolingCost: ((this.results?.Cooling_Load_Y2 ?? 0) * this.electricityPrice).toFixed(2)
    };
  }
}
