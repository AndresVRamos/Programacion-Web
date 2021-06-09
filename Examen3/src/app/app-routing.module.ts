import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirContactoComponent } from './componentes/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './componentes/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path: 'anadirContacto', component: AnadirContactoComponent},
  {path: 'listaContactos', component: ListaContactosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'anadirContacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
