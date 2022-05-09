import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GratisService } from './gratis.service';

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.css']
})
export class GratisComponent implements OnInit {
  
  popup_activated : boolean = false;
  
  constructor(private router : Router, private route : ActivatedRoute, private gratisSvc: GratisService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.popup_activated = true;
  }

  generarPreguntas(){
    var tipoExamen = {Nombre: 'Examen gratis', IdUsuario: this.route.snapshot.paramMap.get('id'), getPregunta: false, IdExamenXUsuario: ' '};
    //var tipoExamen = {Nombre: "Gratis"};
    this.gratisSvc.getPreguntas(tipoExamen).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/formulario', this.route.snapshot.paramMap.get('id'), 'gratis', data['IdExamenXUsuario']]);
    });
    /*var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/formulario', params['id'], 'gratis']);
    });*/
  }
  
}
