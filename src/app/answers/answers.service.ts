import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamenI } from 'app/models/Examen/Examen.Interface';
import { RespuestaI } from 'app/models/Respuesta/Respuesta.Interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  //urlRespuestaAPI: string = 'http://127.0.0.1:8000/api/respuesta/';
  urlRespuestaAPI: string = 'http://134.122.125.243:8000/api/respuesta/';
  constructor(private http: HttpClient) { }

  getRespuestas(respuesta: RespuestaI):Observable<RespuestaI>{
    return this.http.post<RespuestaI>(this.urlRespuestaAPI, respuesta);
  }

  terminarExamen(message: any):Observable<any>{
    return this.http.post<any>(this.urlRespuestaAPI, message);
  }
}
