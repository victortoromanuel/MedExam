import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotpswService } from './forgotpsw.service';


@Component({
  selector: 'app-forgotpsw',
  templateUrl: './forgotpsw.component.html',
  styleUrls: ['./forgotpsw.component.css']
})
export class ForgotpswComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private router : Router, private forgotpswSvc: ForgotpswService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
    });
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
      var email = this.signupForm.value.userData["email"];
      var user = {Email: email};
      this.forgotpswSvc.sendEmail(user).subscribe(
        data => {
          console.log(data);
          if (data['Exist'] == "True"){
            console.log("Existe el usuario y se envio el correo");
          }
          else{
            console.log("No pai que pasó");
          }
          this.signupForm.reset();
      });
    }
  }
}
