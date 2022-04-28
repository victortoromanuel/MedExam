import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  terminar(){
    this.router.navigate(['/table']);
  }
  acertada(){

  }
}
