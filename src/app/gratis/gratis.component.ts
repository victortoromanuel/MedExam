import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GratisService } from './gratis.service';

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.css']
})
export class GratisComponent implements OnInit {
  
  popup_activated : boolean = false;
  
  constructor(private router : Router, private gratisSvc: GratisService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.popup_activated = true;
  }

  generarPreguntas(){
    var tipoExamen = {Nombre: "Gratis"};
    this.gratisSvc.getPreguntas(tipoExamen).subscribe(
      data => {
        console.log(data);
    });
  }
  
}
