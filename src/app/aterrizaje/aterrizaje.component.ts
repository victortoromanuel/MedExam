import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aterrizaje',
  templateUrl: './aterrizaje.component.html',
  styleUrls: ['./aterrizaje.component.css']
})
export class AterrizajeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
