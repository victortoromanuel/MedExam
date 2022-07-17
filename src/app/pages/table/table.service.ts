import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { UsuarioI } from 'app/models/Usuario/Usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  urlAPI: string = 'http://134.122.125.243:8000/api/table/';
  constructor(private http: HttpClient) { }

  getInfoTableUser(user: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, user);
  }
}
