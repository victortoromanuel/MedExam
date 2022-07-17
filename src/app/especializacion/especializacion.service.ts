import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecializacionService {

  urlAPI: string = 'http://134.122.125.243:8000/api/especializacion/';
  constructor(private http: HttpClient) { }
  
  getEspecializaciones():Observable<any>{
    return this.http.get<any>(this.urlAPI);
  }
}
