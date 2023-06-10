import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  private apiUrl = 'http://localhost:8090/api/movements'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}
  
  getMovements(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
