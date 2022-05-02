//Servicio para enviar Id del usuario desde el dashboard a los componentes del menu hamburguesa
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  private data;

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
