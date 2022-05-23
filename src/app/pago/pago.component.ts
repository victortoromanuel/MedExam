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
  public tipoExamen;
  public precio;
  constructor(private router : Router, private route : ActivatedRoute, private pagoSvc: PagoService) { }

  ngOnInit(): void {
    var examen = this.route.snapshot.paramMap.get('examen');
    if (examen == 'corto'){
      this.tipoExamen = 'Examen corto';
      this.precio = '$30.000';
    }
    else if (examen == 'largo'){
      this.tipoExamen = 'Examen largo';
      this.precio = '$40.000';
    }
    else if (examen == 'especializacion'){
      this.tipoExamen = 'Examen especializado';
      this.precio = '$50.000';
    }
    this.pagoSvc.getPago().subscribe(
      data => {
        console.log("BMAMSOSOSsssSSIIII");
        console.log(data);
    });
    this.popup_activated = true;
    /*else{
      this.tipoExamen = [];
    }*/
  }

  enviar(){
    this.popup_activated = true;
  }

  generarPreguntasPago(){
    /*var examen = (<HTMLInputElement>document.getElementById("examen")).value;  select
    var idExamen;
    if (examen == "Examen corto"){
      idExamen = 'corto';
    }
    else if (examen == "Examen largo"){
      idExamen = 'largo';
    }
    var idEspecialidad = this.route.snapshot.paramMap.get('especialidad');
    //else if ()
    var tipoExamen = {Nombre: examen, IdUsuario: this.route.snapshot.paramMap.get('id'), getPregunta: false, IdExamenXUsuario: ' '};
    */
    var idExamen = this.route.snapshot.paramMap.get('examen');
    var tipoExamen = {Nombre: this.tipoExamen, IdUsuario: this.route.snapshot.paramMap.get('id'), getPregunta: false, IdExamenXUsuario: ' ', IdEspecialidad: this.route.snapshot.paramMap.get('especialidad')};
    this.pagoSvc.getPreguntas(tipoExamen).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/formulario', this.route.snapshot.paramMap.get('id'), idExamen, Number(this.route.snapshot.paramMap.get('especialidad'))+2, data['IdExamenXUsuario']]);
    });
  }
}
