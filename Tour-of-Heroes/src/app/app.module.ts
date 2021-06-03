import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DashboardComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
