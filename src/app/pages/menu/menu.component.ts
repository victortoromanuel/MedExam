import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent{
    constructor(private router : Router) {}

    gratis(){
        this.router.navigate(['/free']);
    }

    corto(){
        this.router.navigate(['/corto']);
    }

    largo(){
        this.router.navigate(['/largo']);
    }

    especializacion(){
        this.router.navigate(['/especializacion']);
    }
}

