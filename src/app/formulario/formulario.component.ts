import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Examenes } from 'app/models/Usuario/examenes.model';
import { ActivatedRoute } from '@angular/router';
import { FormularioService } from './formulario.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  preguntas = [];
  answerForm: FormGroup;
  constructor(private router : Router, private _route: ActivatedRoute, private formularioSvc: FormularioService) {}

  minutes: number;
  seconds: number;
  timeValue: any;
  flag : boolean;

  ngOnInit(): void {
    console.log(this._route.snapshot.paramMap.get('id'));
    var examen;
    if (this._route.snapshot.paramMap.get('id') == '1'){
      examen = "Examen corto";
    }
    else if (this._route.snapshot.paramMap.get('id') == '2'){
      examen = "Examen largo";
    }
    var tipoExamen = {Nombre: examen};
    this.formularioSvc.getPreguntas(tipoExamen).subscribe(
      data => {
        console.log(data);
        this.preguntas = data['Preguntas'];
        console.log(this.preguntas);
    });
    
    this.flag = false;
    this.minutes = 14;
    this.seconds = 59;

    this.timeValue = setInterval(() => {
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
        this.router.navigate(['/answer']);
      }
    }, 1000);

    this.answerForm = new FormGroup({
      'answersData': new FormGroup({
        'answer': new FormControl(),
      }),
    });
  }
  terminar(){
    this.router.navigate(['/answer']);
    clearInterval(this.timeValue);
  }
  respondida(){
    console.log(this.answerForm.value);
    //Si es null mirar el examen creado en la base de datos y si no se encuentra respuesta
    //a una pregunta se marca como erronea
    if (this.answerForm.value.answersData["answer"] != null){
      var answer = this.answerForm.value.answersData["answer"].split('.');
      var seleccionada = answer[0];
      var IdPregunta = answer[1];
      var respuestaCorrecta = answer[2];
      var respuesta = {IdPregunta: IdPregunta, Respuesta: seleccionada, RespuestaCorrecta: respuestaCorrecta};
      this.formularioSvc.sendRespuesta(respuesta).subscribe(
        data => {
          console.log(data);
      });
    }
    this.answerForm.reset();
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 1;
  page_number: number = 1;
  pageSizeOptions = [1]
}
