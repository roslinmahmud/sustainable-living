import { TestBed } from '@angular/core/testing';

import { EnergyCalculatorService } from './energy-calculator.service';

describe('EnergyCalculatorService', () => {
  let service: EnergyCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
