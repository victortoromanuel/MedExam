import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    
    userForm: FormGroup;

    constructor(private router : Router, private userSvc: UserService) { }

    ngOnInit(){
        this.userForm = new FormGroup({
            'nombre': new FormControl(null),
            'edad': new FormControl(null),
            'psw': new FormControl(null),
            'pswConfirm': new FormControl(null),
        });
    }

    onSubmit(){
        console.log(this.userForm);
        this.userForm.reset();
    }

    enviarActualizacion(valid, touched){
        if(valid && touched){
            console.log(this.userForm.value);
            var nombre = this.userForm.value["nombre"];
            var edad = this.userForm.value["edad"];
            var psw = this.userForm.value["psw"];
            var pswconf = this.userForm.value["pswConfirm"];
            var updUser = {Nombre: nombre, Edad: edad, Contrasena: psw, ConfContrasena: pswconf};
            this.userSvc.updateUser(updUser).subscribe(
                data => {
                  console.log(data);
                  this.userForm.reset();
            });
        }
    }
}
