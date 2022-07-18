import { Injectable } from '@angular/core';
//import { ExamenI } from '../models/Examen/Examen.Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { RespuestaI } from 'app/models/Respuesta/Respuesta.Interface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  urlAPI: string = 'https://www.medexambackend.tk/api/formulario/';
  urlRespuestaAPI: string = 'https://www.medexambackend.tk/api/respuesta/';
  constructor(private http: HttpClient) { }

  getPreguntas(tipoExamen: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, tipoExamen);
  }

  sendRespuesta(respuesta: any):Observable<any>{
    return this.http.post<any>(this.urlRespuestaAPI, respuesta);
  }
}

