import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoService } from './pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  popup_activated : boolean = false;
  
  constructor(private router : Router, private route : ActivatedRoute, private pagoSvc: PagoService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.popup_activated = true;
  }

  generarPreguntasPago(){
    var examen = (<HTMLInputElement>document.getElementById("examen")).value;
    var idExamen;
    if (examen == "Examen corto"){
      idExamen = 'corto';
    }
    else if (examen == "Examen largo"){
      idExamen = 'largo';
    }

    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/formulario', params['id'], idExamen]);
    });
  }
}
