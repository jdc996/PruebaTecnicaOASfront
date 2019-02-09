import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { CrudService } from './service/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActividadesComponent } from './actividades/actividades.component';
import { ReportesComponent } from './reportes/reportes.component';
const routes: Routes = [
  
  {path: 'home',component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActividadesComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
