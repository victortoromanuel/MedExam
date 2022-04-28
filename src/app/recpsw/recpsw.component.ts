import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recpsw',
  templateUrl: './recpsw.component.html',
  styleUrls: ['./recpsw.component.css']
})
export class RecpswComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'new_psw': new FormControl(null, [Validators.required]),
      }),
    });
    this.signupForm.setValue({
      'userData':{
        'new_psw': '****',
      }
    });
    this.signupForm.patchValue({
      'userData':{
        'new_psw': '*******',
      },
    })
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  enviarPeticion(valid, touched){
    if(valid && touched){
      this.router.navigate(['/dashboard']);
    }
  }
}