import { Injectable } from '@angular/core';
//import { ExamenI } from '../models/Examen/Examen.Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  urlAPI: string = 'http://127.0.0.1:8000/api/formulario/';
  urlEpayco: string = 'https://secure.epayco.co/validation/v1/reference/';
  //urlResponse: string = 'https:'
  constructor(private http: HttpClient) { }

  getPreguntas(tipoExamen: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, tipoExamen);
  }

  getTransactionResponse(refPago: string):Observable<any>{
    return this.http.get<any>(this.urlEpayco+refPago);
  }

  postTransactionResponse(refPago: string, mensaje:any):Observable<any>{
    return this.http.post<any>(this.urlEpayco+refPago, mensaje);
  }
}
