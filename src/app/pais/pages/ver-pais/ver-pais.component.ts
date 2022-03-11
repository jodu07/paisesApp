import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

 // pais: Country | undefined;
    

  constructor( private activatedRoute: ActivatedRoute,
               private _paisService: PaisService    
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( ({codigoPais}) => {
         console.log(codigoPais);
          
          this._paisService.getPaisPorAlpha(codigoPais)
          .subscribe( pais => {
            console.log(pais);
            //this.pais = pais;
          })
          

      });
  }

}


