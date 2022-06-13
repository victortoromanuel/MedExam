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
  refPayco: string = ''
	transactionResponse:any ;
  constructor(private router : Router, private route : ActivatedRoute, private pagoSvc: PagoService) { }

  ngOnInit(): void {
    //this.router.navigate(['/dashboard', this.route.snapshot.paramMap.get('id')]);
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
    
    this.route.queryParams.subscribe(params => {
      this.refPayco= params['ref_payco'] || params['x_ref_payco'];
      console.log(this.refPayco);
      
    });

    console.log("hola");
   this.pagoSvc.getTransactionResponse(this.refPayco)
   .subscribe((data: any) =>{
      console.log("get");
      console.log(data);
       this.transactionResponse = data.data
       if (this.transactionResponse["x_respuesta"] == "Rechazada" || this.transactionResponse["x_respuesta"] == "Fallida"){
        this.router.navigate(['/menu', this.route.snapshot.paramMap.get('id')]);
       }
       else{
        this.popup_activated = true;
       }
      if (!localStorage.getItem('foo')) { 
        localStorage.setItem('foo', 'no reload') 
        window.location.reload() 
      } 
      else {
        localStorage.removeItem('foo') 
      }
       
       
   })

    
    
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
        
        this.router.navigate(['/formulario', this.route.snapshot.paramMap.get('id'), idExamen, data['IdExamen'], data['IdExamenXUsuario']]);
    });
  }
}
