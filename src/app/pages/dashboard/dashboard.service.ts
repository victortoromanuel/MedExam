import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private data;

  urlAPI: string = 'https://www.medexambackend.tk/api/dashboard/';
  constructor(private http: HttpClient) { }
  
  getDataToDashboard(data: any):Observable<any>{
    return this.http.post<any>(this.urlAPI, data);
  }

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    //this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }
}
