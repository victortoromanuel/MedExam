import { Injectable } from '@angular/core';
import { ExamenI } from '../models/Examen/Examen.Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  urlAPI: string = 'http://127.0.0.1:8000/api/formulario/';
  constructor(private http: HttpClient) { }

  getPreguntas(tipoExamen: ExamenI):Observable<ExamenI>{
    return this.http.post<ExamenI>(this.urlAPI, tipoExamen);
  }
}
