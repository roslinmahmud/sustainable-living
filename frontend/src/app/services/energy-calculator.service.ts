import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnergyResponse } from '../models/energy.model';

@Injectable({
  providedIn: 'root'
})
export class EnergyCalculatorService {

  private apiUrl = 'http://localhost:8000/predict/';

  constructor(private http: HttpClient) { }

  calculateEnergy(data: any): Observable<EnergyResponse> {
    return this.http.post<EnergyResponse>(this.apiUrl, [data]);
  }
}
