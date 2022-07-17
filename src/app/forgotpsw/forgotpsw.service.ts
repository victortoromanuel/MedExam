import { Injectable } from '@angular/core';
//import { UsuarioI } from '../models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotpswService {
  urlAPI: string = 'http://134.122.125.243:8000/api/forgotpsw/';
  constructor(private http: HttpClient) { }

  sendEmail(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}