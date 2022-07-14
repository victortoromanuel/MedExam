import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  location: Location;
  hideNavbar = false;
  constructor(location:Location, private router : Router) {
    router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
          console.log('current route:', routerEvent.url);
          var titlee = routerEvent.url.toString().split('/');
          if (titlee[1] == "formulario"){
            this.hideNavbar = true;
          }
          else{
            this.hideNavbar = false;
          }
      }
    });
   }

  ngOnInit() { 
  
  }
}
