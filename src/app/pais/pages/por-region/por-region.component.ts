import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  constructor(private _paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;

  @Input() paises: Country[] = [];

  mostrarTermino(){
    //console.log(this.termino);
    this.hayError = false;    // no hay error
    
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



}
