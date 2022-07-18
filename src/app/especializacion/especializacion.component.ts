import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecializacionService } from './especializacion.service';
import * as postscribe from 'postscribe';

@Component({
  selector: 'app-especializacion',
  templateUrl: './especializacion.component.html',
  styleUrls: ['./especializacion.component.css']
})
export class EspecializacionComponent implements OnInit {
  epayco: string;
  div: string;
  public especializaciones;
  constructor(private router : Router, private route: ActivatedRoute, private especializacionSvc: EspecializacionService) { }

  ngOnInit(): void {
    this.especializacionSvc.getEspecializaciones().subscribe(
      data => {
        this.especializaciones = data['Especializaciones'];
        console.log(this.especializaciones);
    });
    
  }

  generateEpayButton(){
    var element = document.getElementById("tmp");
    if (element != null){
      element.parentNode.removeChild(element);
    }
    var especialidad = (<HTMLInputElement>document.getElementById("especialidad")).value.split('.');
    var IdEspecialidad: number = +especialidad[0];
    console.log(especialidad);
    if (especialidad.length == 2){
      this.div = "<div id='tmp' style='display: flex; align-items: center; justify-content: center'><div>";
      postscribe('#epay', this.div);
      this.epayco = "<form><script src='https://checkout.epayco.co/checkout.js' data-epayco-key='437506cc0cb092ec55496b7d67cedd6f' class='epayco-button'  data-epayco-amount='50000'   data-epayco-tax='0.00'  data-epayco-tax-ico='0.00'   data-epayco-tax-base='50000' data-epayco-name='Examen especializado'         data-epayco-description='Examen especializado' data-epayco-currency='cop'    data-epayco-country='CO' data-epayco-test='true' data-epayco-external='false' data-epayco-method='GET' data-epayco-response='https://jellyfish-app-jc8ip.ondigitalocean.app/#/pago/"+ this.route.snapshot.paramMap.get('id') +"/especializacion/" + IdEspecialidad + "' data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn5.png'></script></form>";
      postscribe('#tmp', this.epayco);
    }
    
  }

  goToPago() {
    var especialidad = (<HTMLInputElement>document.getElementById("especialidad")).value.split('.');
    var IdEspecialidad: number = +especialidad[0];
    var userId = this.route.params.subscribe(params => {
      this.router.navigate(['/pago', params['id'], 'especializacion', IdEspecialidad]);
    });
  }

}
