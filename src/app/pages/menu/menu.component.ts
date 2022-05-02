import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent{
    constructor(private router : Router, private route : ActivatedRoute) {}

    gratis(){
        var userId = this.route.params.subscribe(params => {
            this.router.navigate(['/free', params['id']]);
        });
    }

    corto(){
        var userId = this.route.params.subscribe(params => {
            this.router.navigate(['/corto', params['id']]);
        });
    }

    largo(){
        var userId = this.route.params.subscribe(params => {
            this.router.navigate(['/largo', params['id']]);
        });
    }

    especializacion(){
        this.router.navigate(['/especializacion']);
    }
}

