import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  
  paises : Country[] = [];

  termino: string = 'Co';
 // hayError: boolean = false;
  
  constructor( private _paisService: PaisService){

  }

  getClaseCss( region: string ): string{
    return(region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion( region: string){

    if( region === this.regionActiva ) { return;} //para que no recargue nada si se presiona el mismo termino

    this.regionActiva = region;
    this.paises = [];

    // sTODO: hacer llamado a servicio

    this._paisService.buscarPorRegion(this.regionActiva)
    .subscribe( paises => this.paises = paises);
  }
}



/*

paises : Country[] = [];

termino: string = 'Co';
hayError: boolean = false;

constructor( private _paisService: PaisService){

}

buscar( terminoInput: string){
  //console.log(this.termino);

  this.hayError = false;    // no hay error
  this.termino = terminoInput;
  
  this._paisService.buscarPorRegion(this.termino)
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

*/