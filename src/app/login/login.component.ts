import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  message: string;
  login: any;
  constructor(private router : Router, private loginSvc: LoginService) { }

  ngOnInit(): void {
    this.login = null;
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
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

  enviarPeticionLogin(){
    console.log(this.signupForm.value);
    var email = this.signupForm.value.userData["email"];
    //var username = this.signupForm.value.userData["username"];
    var psw = this.signupForm.value.userData["psw"]
    var newUser = {Email: email, Contrasena: psw};
    this.loginSvc.loginUser(newUser).subscribe(
      data => {
        console.log(data);
        this.login = data['Login'];
        if (data['Login'] == "True"){
          this.router.navigate(['/menu', data['ID']]);
        }
        else if (data['Login'] == "False"){
          this.message = "Usuario no encontrado";
          this.router.navigate(['/login']);
        }
        this.signupForm.reset();
        this.login = null;
    });
  }
}