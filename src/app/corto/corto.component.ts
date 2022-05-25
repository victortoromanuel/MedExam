import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as postscribe from 'postscribe';
import { CortoService } from './corto.service';

@Component({
  selector: 'app-corto',
  templateUrl: './corto.component.html',
  styleUrls: ['./corto.component.css']
})
export class CortoComponent implements OnInit {
  epayco: string;
  data: SafeHtml;
  constructor(private sanitizer: DomSanitizer, private router : Router, private route : ActivatedRoute, private cortoSvc: CortoService) {
    
    //this.epayco = "<h1>Malparidosos</h1>"
    //const fragment = document.createRange().createContextualFragment(this.epayco);
    //document.body.appendChild(fragment);
    //this.data = this.sanitizer.bypassSecurityTrustHtml(this.epayco);
   }

  ngOnInit(): void {
    this.cortoSvc.getPago().subscribe(
      data => {
        console.log("el corto si si");
        console.log(data);
    });
    this.epayco = "<script src='https://checkout.epayco.co/checkout.js' data-epayco-key='437506cc0cb092ec55496b7d67cedd6f' class='epayco-button' data-epayco-amount='30000' data-epayco-tax='0.00' data-epayco-tax-ico='0.00' data-epayco-tax-base='30000' data-epayco-name='Examen corto' data-epayco-description='Examen corto' data-epayco-currency='cop' data-epayco-country='CO' data-epayco-test='true' data-epayco-external='false' data-epayco-acepted='http://localhost:4200/#/pago/1/corto' data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn5.png'></script>";
    postscribe('#epay', this.epayco);
    /*let el = document.createElement('script');
    el.setAttribute('src', 'https://checkout.epayco.co/checkout.js');
    el.setAttribute('data-epayco-key', '437506cc0cb092ec55496b7d67cedd6f');
    el.setAttribute('class', 'epayco-button');  
    el.setAttribute('data-epayco-amount', '30000');
    el.setAttribute('data-epayco-tax', '0.00');
    el.setAttribute('data-epayco-tax-ico', '0.00');
    el.setAttribute('data-epayco-tax-base', '30000');
    el.setAttribute('data-epayco-name', 'Examen corto');
    el.setAttribute('data-epayco-description', 'Examen corto');
    el.setAttribute('data-epayco-currency', 'cop');
    el.setAttribute('data-epayco-country', 'CO');
    el.setAttribute('data-epayco-test', 'true');
    el.setAttribute('data-epayco-external', 'false');
    el.setAttribute('data-epayco-response', '');
    el.setAttribute('data-epayco-confirmation', '');
    el.setAttribute('data-epayco-button', 'https://multimedia.epayco.co/dashboard/btns/btn5.png');

    document.body.appendChild(el);*/

    
  }

  
  goToPago() {
    //postscribe('#epay', this.epayco);
    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/pago', params['id'], 'corto']);
    });
  }

}
