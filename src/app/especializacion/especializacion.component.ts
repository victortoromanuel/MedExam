import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecializacionService } from './especializacion.service';

@Component({
  selector: 'app-especializacion',
  templateUrl: './especializacion.component.html',
  styleUrls: ['./especializacion.component.css']
})
export class EspecializacionComponent implements OnInit {

  public especializaciones;
  constructor(private router : Router, private _route: ActivatedRoute, private especializacionSvc: EspecializacionService) { }

  ngOnInit(): void {
    this.especializacionSvc.getEspecializaciones().subscribe(
      data => {
        this.especializaciones = data['Especializaciones'];
        console.log(this.especializaciones);
    });
  }

}
