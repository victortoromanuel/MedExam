import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    
    userForm: FormGroup;
    nombre: string;
    usuario: string;
    edad: string;
    email: string;

    constructor(private router : Router, private route: ActivatedRoute, private userSvc: UserService) { }

    ngOnInit(){

        var user = {userId: this.route.snapshot.paramMap.get('id'), POST:false};
        this.userSvc.updateUser(user).subscribe(
            data => {
                this.nombre = data["Nombre"];
                this.edad = data["Edad"];
                this.email = data["Email"];
                this.usuario = data["Usuario"];
              console.log(data);
        });
        this.userForm = new FormGroup({
            'nombre': new FormControl(),
            'edad': new FormControl(),
            'psw': new FormControl(),
            'pswConfirm': new FormControl(),
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
            var updUser = {userId: this.route.snapshot.paramMap.get('id'), Nombre: nombre, Edad: edad, Contrasena: psw, ConfContrasena: pswconf, POST: true};

            this.userSvc.updateUser(updUser).subscribe(
                data => {
                  console.log(data);
                  
            });
        }
    }
}
