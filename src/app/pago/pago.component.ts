import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagoService } from './pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  popup_activated : boolean = false;
  
  constructor(private router : Router, private pagoSvc: PagoService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.popup_activated = true;
  }

  generarPreguntasPago(){
    var examen = (<HTMLInputElement>document.getElementById("examen")).value;
    var idExamen;
    if (examen == "Examen corto"){
      idExamen = 1;
    }
    else if (examen == "Examen largo"){
      idExamen = 2;
    }
    /*var tipoExamen = {Nombre: examen};
    this.pagoSvc.getPreguntas(tipoExamen).subscribe(
      data => {
        console.log(data);
    });*/
    this.router.navigate(['/formulario', idExamen]);
  }
}
