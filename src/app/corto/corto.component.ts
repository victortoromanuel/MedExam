import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-corto',
  templateUrl: './corto.component.html',
  styleUrls: ['./corto.component.css']
})
export class CortoComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToPago() {
    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/pago', params['id']]);
    });
  }

}
