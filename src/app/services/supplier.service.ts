import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url = 'https://hack-covid19.appspot.com/api/Suppliers';

  constructor(private http: HttpClient) { }

  getSuppliers() : Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url);
  }

  addSupplier(supplier: Supplier) {
    console.log("Start posting...");
    
    return this.http.post(this.url, supplier);
  }
}
