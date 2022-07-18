import { Injectable } from '@angular/core';
//import { ExamenI } from '../models/Examen/Examen.Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GratisService {
  urlAPI: string = 'https://www.medexambackend.tk/api/formulario/';
  constructor(private http: HttpClient) { }

  getPreguntas(tipoExamen: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, tipoExamen);
  }
}
