import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {path:'formulario', component: FormularioComponent},
  {path:'tablaUsuarios', component: TablaUsuariosComponent},
  {path: '**', pathMatch: 'full', redirectTo:'formulario'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
