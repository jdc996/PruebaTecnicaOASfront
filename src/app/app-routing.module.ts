import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
  {path:"",component:ReportesComponent},
  {path:"home",component:HomeComponent},
  {path:"actividades",component:ActividadesComponent},
  {path:"reportes",component:ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
