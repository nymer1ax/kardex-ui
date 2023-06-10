import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8090/api'; // Asegúrate de cambiar la URL según tu configuración

  constructor(private http: HttpClient) {}

  addProduct(product: any, quantity: number): Observable<any> {
    const requestBody = {
      product,
      quantity
    };
    const url = `${this.apiUrl}/products`;
    return this.http.post(url, requestBody);
  }

  getAvailableProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/products/available`;
    return this.http.get<Product[]>(url);
  }
}

