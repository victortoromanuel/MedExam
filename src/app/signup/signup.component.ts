import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private router : Router, private signupSvc: SignupService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'psw': new FormControl(null, [Validators.required]),
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

  enviarPeticionRegistro(valid, touched){
    if(valid && touched){
      console.log(this.signupForm.value);
      var email = this.signupForm.value.userData["email"];
      var username = this.signupForm.value.userData["username"];
      var psw = this.signupForm.value.userData["psw"]
      var newUser = {Email: email, Usuario: username, Contrasena: psw};
      this.signupSvc.signUpUser(newUser).subscribe(
        data => {
          console.log(data);
          if (data['Signup'] == "True"){
            this.router.navigate(['/dashboard', data['ID']]);
          }
          else{
            this.router.navigate(['/signup']);
          }
          this.signupForm.reset();
      });
    }
  }
}
