import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  paises : Country[] = [];

  termino: string = 'Co';
  hayError: boolean = false;
  
  constructor( private _paisService: PaisService){

  }

  buscar( terminoInput: string){
    //console.log(this.termino);

    this.hayError = false;    // no hay error
    this.termino = terminoInput;
    
    this._paisService.buscarPais(this.termino)
    .subscribe( (paises) => {
      //subscribe para disparar la peticion      
      console.log(paises);

      this.paises = paises;
      
    }, (err) => {
      this.hayError = true;   // si hay error
      //console.log('error');
      //console.info(err);

      this.paises = [];

    });
  }


  sugerencias( termino: string){

    this.hayError = false;
    // 5TODO: crear sugerencias 

  }


}


