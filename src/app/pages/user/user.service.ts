import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioI } from 'app/models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI: string = 'http://127.0.0.1:8000/api/signup/';
  constructor(private http: HttpClient) { }

  updateUser(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}
