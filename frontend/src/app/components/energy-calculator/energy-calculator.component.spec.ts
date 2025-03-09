import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCalculatorComponent } from './energy-calculator.component';

describe('EnergyCalculatorComponent', () => {
  let component: EnergyCalculatorComponent;
  let fixture: ComponentFixture<EnergyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
