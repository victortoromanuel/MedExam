import { Injectable } from '@angular/core';
//import { UsuarioI } from '../models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  urlAPI: string = 'http://134.122.125.243/api/signup/';
  constructor(private http: HttpClient) { }
  /*getUser():Observable<UsuarioI>{
    return this.http.get<UsuarioI>(this.urlAPI)
  }*/

  signUpUser(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}