import { Injectable } from '@angular/core';
//import { UsuarioI } from '../models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlAPI: string = 'http://134.122.125.243:8000/api/login/';
  constructor(private http: HttpClient) { }

  loginUser(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}