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
  result: EnergyResponse | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.result = navigation?.extras.state?.['result'] || null;
  }
}
