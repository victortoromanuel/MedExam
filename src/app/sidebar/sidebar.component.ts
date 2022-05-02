import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'app/pages/dashboard/dashboard.service';
import { ActivatedRoute } from '@angular/router';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/menu',         title: 'Exámenes',             icon:'nc-book-bookmark',    class: '' },
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
    constructor(private router : Router, private _route: ActivatedRoute, private dashboardSvc: DashboardService) { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    goToExamenes() {
        var userId = this.dashboardSvc.getData();
        this.router.navigate(['/menu', userId]);
    }

    goToDashboard() {
        var userId = this.dashboardSvc.getData();
        this.router.navigate(['/dashboard', userId]);
    }

    goToTable() {
        var userId = this.dashboardSvc.getData();
        this.router.navigate(['/table', userId]);
    }

    goToUser() {
        var userId = this.dashboardSvc.getData();
        this.router.navigate(['/user', userId]);
    }
}
