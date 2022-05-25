import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Examenes } from 'app/models/Usuario/examenes.model';
import { ActivatedRoute } from '@angular/router';
import { FormularioService } from './formulario.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  preguntas = [];
  answerForm: FormGroup;
  answer = 'N';
  public nombreExamen;
  constructor(private location: LocationStrategy, private router : Router, private _route: ActivatedRoute, private formularioSvc: FormularioService) {
    // Deshabilitar botan atras
    /*history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });  */
  }

  minutes: number;
  seconds: number;
  timeValue: any;
  flag : boolean;

  ngOnInit(): void {
    console.log(this._route.snapshot.paramMap.get('examen'));
    
    var examen;
    if (this._route.snapshot.paramMap.get('examen') == 'gratis'){
      examen = "Examen gratis";
    }
    if (this._route.snapshot.paramMap.get('examen') == 'corto'){
      examen = "Examen corto";
    }
    else if (this._route.snapshot.paramMap.get('examen') == 'largo'){
      examen = "Examen largo";
    }
    else if (this._route.snapshot.paramMap.get('examen') == 'especializacion'){
      examen = "Examen especializado";
    }
    var tipoExamen = {Nombre: examen, IdUsuario: this._route.snapshot.paramMap.get('id'), getPregunta: true, IdExamenXUsuario: this._route.snapshot.paramMap.get('examenxusuario'), IdEspecialidad: this._route.snapshot.paramMap.get('idexamen')};
      this.formularioSvc.getPreguntas(tipoExamen).subscribe(
        data => {
          console.log(data);
          this.nombreExamen = data['NombreExamen']
          this.preguntas = data['Preguntas'];
          console.log(this.preguntas);
          this.flag = false;
          //this.minutes = 14;
          this.minutes = data['Tiempo'] - 1;
          this.seconds = 59;
          if (document.getElementById("timer") != null){
            document.getElementById("timer").innerHTML = data['Tiempo'] + " : " + "00";
          }
    });

    this.timeValue = setInterval(() => {
      if (document.getElementById("timer") != null){
        document.getElementById("timer").innerHTML = this.minutes + " : " + this.seconds;
        this.seconds--;
        if (this.seconds == 0o0 && this.flag != true) {
          this.minutes --;
          this.seconds = 59;
          if(this.minutes == -1){
            this.minutes = 0;
            this.seconds = 0;
            this.flag = true;
          }
        }
        if(this.flag == true){
          clearInterval(this.timeValue);
          var userId = this._route.snapshot.paramMap.get('id');
          var examenxusuario = this._route.snapshot.paramMap.get('examenxusuario');
          this.router.navigate(['/answer', userId, examenxusuario]);
        }
      }
    }, 1000);

    this.answerForm = new FormGroup({
      'answer': new FormControl()
    });
  }
  
  terminar(){
    this.respondida()
    clearInterval(this.timeValue);
    var userId = this._route.snapshot.paramMap.get('id');
    var examenxusuario = this._route.snapshot.paramMap.get('examenxusuario');
    this.router.navigate(['/answer', userId, examenxusuario]);
  }
  respondida(){
    var infoPregunta = (<HTMLInputElement>document.getElementById("info")).value.split('.');
    console.log(this.answerForm.value["answer"]);
    var answer = this.answerForm.value["answer"];
    var seleccionada = answer;
    var idexamenxusuario = this._route.snapshot.paramMap.get('examenxusuario');
    var idusuario = this._route.snapshot.paramMap.get('id');
    var IdPregunta: number = +infoPregunta[1];
    var respuestaCorrecta = infoPregunta[2];
    var respuesta = {IdPregunta: IdPregunta, IdUsuario: idusuario, IdExamenXUsuario: idexamenxusuario, Respuesta: seleccionada, RespuestaCorrecta: respuestaCorrecta};
    this.formularioSvc.sendRespuesta(respuesta).subscribe(
      data => {
        console.log(data);
    });
    this.answerForm.reset();
    this.answer = 'N';
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 1;
  page_number: number = 1;
  pageSizeOptions = [1]
}
