import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyCalculatorService {

  private apiUrl = 'http://localhost:8000/predict/'; // Replace with your FastAPI endpoint

  constructor(private http: HttpClient) { }

  calculateEnergy(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, [data]);
  }
}
