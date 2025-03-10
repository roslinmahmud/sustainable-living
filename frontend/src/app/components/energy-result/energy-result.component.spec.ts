import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyResultComponent } from './energy-result.component';

describe('EnergyResultComponent', () => {
  let component: EnergyResultComponent;
  let fixture: ComponentFixture<EnergyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
