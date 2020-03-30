import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ApiBaseUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = ApiBaseUrl + 'Products';

  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  createProduct(product : Product) : Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }
}
