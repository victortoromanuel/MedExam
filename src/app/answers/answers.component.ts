import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswersService } from './answers.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  preguntas = [];
  nroPreguntas : number;
  correctas : number;
  constructor(private location: LocationStrategy, private router : Router, private route: ActivatedRoute, private answersSvc: AnswersService) { 
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
    var respuesta = {IdPregunta: -1, IdUsuario: this.route.snapshot.paramMap.get('id'), IdExamenXUsuario: this.route.snapshot.paramMap.get('examenxusuario'), Respuesta: " ", RespuestaCorrecta: " "};
    this.answersSvc.getRespuestas(respuesta).subscribe(
      data => {
        console.log(data);
        this.preguntas = data['Preguntas'];
        console.log(this.preguntas);
        this.correctas = data['Correctas']
        this.nroPreguntas = data['NroPreguntas']
    });
  }

  terminar(){
    /*var message = {IdUsuario: this.route.snapshot.paramMap.get('id'), IdExamenXUsuario: this.route.snapshot.paramMap.get('examenxusuario'), Terminar: true};
    this.answersSvc.terminarExamen(message).subscribe(
      data => {
        console.log(data);
    });*/
    this.router.navigate(['/dashboard', this.route.snapshot.paramMap.get('id')]);
  }

  goToTable(){
    this.router.navigate(['/table', this.route.snapshot.paramMap.get('id')]);
  }

  acertada(){

  }

  

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 1;
  page_number: number = 1;
  pageSizeOptions = [1]
}
