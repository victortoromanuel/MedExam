import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as postscribe from 'postscribe';

@Component({
  selector: 'app-largo',
  templateUrl: './largo.component.html',
  styleUrls: ['./largo.component.css']
})
export class LargoComponent implements OnInit {
  epayco: string;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.epayco = "<form><script src='https://checkout.epayco.co/checkout.js' data-epayco-key='437506cc0cb092ec55496b7d67cedd6f' class='epayco-button'         data-epayco-amount='40000'         data-epayco-tax='0.00'  data-epayco-tax-ico='0.00'               data-epayco-tax-base='40000' data-epayco-name='Examen largo'         data-epayco-description='Examen largo' data-epayco-currency='cop'    data-epayco-country='CO' data-epayco-test='true' data-epayco-external='false' data-epayco-acepted='http://localhost:4200/#/pago/"+ this.route.snapshot.paramMap.get('id') +"/largo' data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn5.png'></script></form>";
    postscribe('#epay', this.epayco);
  }

  goToPago() {
    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/pago', params['id'], 'largo']);
    });
  }

}
