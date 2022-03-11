import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
  // con el root se inyecta de manera global en la aplicación
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';


  constructor( private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<Country[]>(url)
     /*
            .pipe(
              / operadores rxjs(extensiones reactivas)= funciones que se ejecutan en base al producto de la peticion del observable get.(url)
              / catchError recibe un error y debe regresar un observable
              / of es una funcion que genera observables, transfroma lo que sea en observables
              catchError(err => of(['hola']) )
            );     
    */
  }

  buscarPorCapital(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
  //  console.log(url);
     return this.http.get<Country[]>(url);
     
  }


  buscarPorRegion(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${termino}`;
   // console.log(url);
     return this.http.get<Country[]>(url);
     
  }

  getPaisPorAlpha( codigo: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${codigo}`;

    console.log(url);
    return this.http.get<Country>(url);

  }

}
