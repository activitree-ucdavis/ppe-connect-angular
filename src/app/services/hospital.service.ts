import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital';
import { ApiBaseUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url = ApiBaseUrl + 'HealthCareProviders';

  constructor(private http : HttpClient) { }

  getHospital() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.url);
  }

  createHospital(hospital : Hospital) : Observable<Hospital> {
    return this.http.post<Hospital>(this.url, hospital);
  }
}


