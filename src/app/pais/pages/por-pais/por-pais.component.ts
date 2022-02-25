import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'valor inicial';
  hayError: boolean = false;

  constructor( private _paisService: PaisService){

  }

  mostrarTermino(){
    //console.log(this.termino);
    this.hayError = false;    // no hay error
    
    this._paisService.buscarPais(this.termino)
    .subscribe( (resp) => {
      //subscribe para disparar la peticion      
      console.log(resp);
    }, (err) => {
      this.hayError = true;   // si hay error
      //console.log('error');
      //console.info(err);

    });
  }


}


