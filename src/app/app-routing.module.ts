import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";





const routes: Routes = [

    //pathMatch me dirige a esta pagina cuando es vacio, queda como la principal
    {path:'' , component: PorPaisComponent, pathMatch:'full'}, 
        
    {path:'capital' , component: PorCapitalComponent},    
    {path:'region' , component: PorRegionComponent},
    {path:'pais/:codigoPais' , component: VerPaisComponent},

    //definir una ruta en caso de que el usuario digite una ruta que no este defnida se redirige a la principal
    {path: '**', redirectTo: ''}
   
  
  ];
  
  @NgModule({
    imports: 
    [
        RouterModule.forRoot(routes)
    ],
    exports: 
    [
        RouterModule
    ]
  })
  export class AppRoutingModule { }