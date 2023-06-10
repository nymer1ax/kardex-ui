import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './interfaces/sale';
import { CreateSale } from './interfaces/createsale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'http://localhost:8090/api/sale';

  constructor(private http: HttpClient) { }

  createSale(sale: CreateSale): Observable<any> {
    return this.http.post(this.apiUrl, sale);
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl);
  }
}

