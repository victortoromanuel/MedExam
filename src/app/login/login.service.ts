import { Injectable } from '@angular/core';
import { UsuarioI } from '../models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlAPI: string = 'http://127.0.0.1:8000/api/login/';
  constructor(private http: HttpClient) { }

  loginUser(user: UsuarioI):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.urlAPI, user);
  }
}