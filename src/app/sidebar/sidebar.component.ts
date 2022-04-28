import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/menu',         title: 'Exámenes',             icon:'nc-book-bookmark',    class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-trophy',       class: '' },
    { path: '/table',         title: 'Lista de resultados',        icon:'nc-tile-56',    class: '' },
    { path: '/user',          title: 'Perfil de Usuario',      icon:'nc-circle-10',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
