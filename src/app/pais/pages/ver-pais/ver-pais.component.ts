import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; 
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

 pais!: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private _paisService: PaisService    
    ) { }
    
  ngOnInit(): void {

    // primera forma: capturar el id del pais y el pais con dos observables, 
    // el segundo observable depende del valor del primer obsevable
   /* this.activatedRoute.params
      .subscribe( ({codigoPais}) => {
         console.log(codigoPais);
          
          this._paisService.getPaisPorAlpha(codigoPais)
          .subscribe( pais => {
            console.log(pais);
            //this.pais = pais;
          });
      }); */

      //segunda forma: con operador rxJs SwitchMap: permite recibir un observable y regresar otro observable
      this.activatedRoute.params
        .pipe(
          switchMap( ({codigoPais}) => this._paisService.getPaisPorAlpha( codigoPais ) ),
          tap( console.log )
        )
        .subscribe( pais => this.pais = pais
         // {console.log(pais);}
          );
  }

}


