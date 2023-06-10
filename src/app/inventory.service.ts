import { Injectable } from '@angular/core';
import { InventoryItem } from './interfaces/inventory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:8090/api'; // Asegúrate de cambiar la URL según tu configuración

  constructor(private http: HttpClient) {}

  getInventory(): Observable<InventoryItem[]> {
    const url = `${this.apiUrl}/inventory`;
    return this.http.get<InventoryItem[]>(url);
  }

}
