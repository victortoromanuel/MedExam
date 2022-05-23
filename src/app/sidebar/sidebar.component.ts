import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DashboardService } from 'app/pages/dashboard/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { ConstantPool } from '@angular/compiler';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/menu',          title: 'Exámenes',             icon:'nc-book-bookmark',    class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-trophy',       class: '' },
    { path: '/table',         title: 'Lista de resultados',        icon:'nc-tile-56',    class: '',  },
    { path: '/user',          title: 'Perfil de Usuario',      icon:'nc-circle-10',  class: '',  },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    userId: string;
    constructor(private router : Router, private route: ActivatedRoute, private dashboardSvc: DashboardService) {
        router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof NavigationEnd) {
                console.log('current route:', routerEvent.url);
                var url = routerEvent.url.toString();
                //var url = "/formulario/13444/pablo";
                var i = 1;
                var start = 0;
                var end = 0;
                for (var j = 0; j < 2; j++){
                    while (url[i] != '?' && url[i] != '/'){
                        i++;
                        if (i >= url.length){
                            break;
                        }
                    }
                    i++;
                    if (j == 0){
                        start = i;
                    }
                    else if (j == 1){
                        end = i-1;
                    }
                }
                if (start+1 == url.length){
                    this.userId = url[start];
                }
                else if (start < end){
                    var id = '';
                    for (var c = start; c < end; c++){
                        id = id + url[c];
                    }
                    this.userId = id;
                }
                else if (start+1 < url.length && start >= end){
                    var id = '';
                    for (var c = start; c < url.length; c++){
                        id = id + url[c];
                    }
                    this.userId = id;
                }
                console.log('El id es: ', this.userId);
            }
        });
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    goToExamenes() {
        //var userId = this.dashboardSvc.getData();
        this.router.navigate(['/menu', this.userId]);
    }

    goToDashboard() {
        //var userId = this.dashboardSvc.getData();
        this.router.navigate(['/dashboard', this.userId]);
    }

    goToTable() {
        //var userId = this.dashboardSvc.getData();
        this.router.navigate(['/table', this.userId]);
    }

    goToUser() {
        //var userId = this.dashboardSvc.getData();
        this.router.navigate(['/user', this.userId]);
    }
}
