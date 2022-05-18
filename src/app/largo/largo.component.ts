import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-largo',
  templateUrl: './largo.component.html',
  styleUrls: ['./largo.component.css']
})
export class LargoComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToPago() {
    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/pago', params['id'], 'largo']);
    });
  }

}
