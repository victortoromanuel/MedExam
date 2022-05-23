import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CortoService {

  urlAPI: string = 'http://127.0.0.1:8000/api/formulario/';
  urlEpayco: string = 'https://secure.epayco.co/validation/v1/reference/faecbb4b832c7b42739d4cb8';
  constructor(private http: HttpClient) { }

  getPago():Observable<any>{
    return this.http.get<any>(this.urlEpayco);
  }
}



