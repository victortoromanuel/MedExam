import { Injectable } from '@angular/core';
//import { UsuarioI } from '../models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotpswService {
  urlAPI: string = 'https://www.medexambackend.tk/api/forgotpsw/';
  constructor(private http: HttpClient) { }

  sendEmail(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}