import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyCalculatorComponent } from './components/energy-calculator/energy-calculator.component';
import { EnergyResultComponent } from './components/energy-result/energy-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: EnergyCalculatorComponent },
  { path: 'result', component: EnergyResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
