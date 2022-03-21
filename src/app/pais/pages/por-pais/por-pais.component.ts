import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {


  placeholder: string = 'Buscar por País...';
  paises : Country[] = [];
  termino: string = '';
  hayError: boolean = false;


  paisesSugeridos: Country[] = [];
  mostrarSugerencias: Boolean = false;
  
  constructor( private _paisService: PaisService){

  }

  buscar( terminoInput: string){
    //console.log(this.termino);

    this.mostrarSugerencias = false;

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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    // 5TODO: crear sugerencias 
    this._paisService.buscarPais( termino )
       .subscribe(
         paises => this.paisesSugeridos = paises.splice(0,5),
         (err) => this.paisesSugeridos = []
         );

  }


  buscarSugerido(termino: string){
    this.buscar(termino);
    
  }




}


