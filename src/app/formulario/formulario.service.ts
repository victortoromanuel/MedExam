import { Injectable } from '@angular/core';
import { ExamenI } from '../models/Examen/Examen.Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaI } from 'app/models/Respuesta/Respuesta.Interface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  urlAPI: string = 'http://127.0.0.1:8000/api/formulario/';
  urlRespuestaAPI: string = 'http://127.0.0.1:8000/api/respuesta/';
  constructor(private http: HttpClient) { }

  getPreguntas(tipoExamen: ExamenI):Observable<ExamenI>{
    return this.http.post<ExamenI>(this.urlAPI, tipoExamen);
  }

  sendRespuesta(respuesta: RespuestaI):Observable<RespuestaI>{
    return this.http.post<RespuestaI>(this.urlRespuestaAPI, respuesta);
  }
}

