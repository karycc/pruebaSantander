import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dato } from './model/dato'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = "https://api.datos.gob.mx/v1/calidadAire";
 

  constructor(private http: HttpClient) { }

  getDatos (params): Observable<Dato[]> {
    return this.http.get<Dato[]>(this.url+params)
  }

 

  
}
