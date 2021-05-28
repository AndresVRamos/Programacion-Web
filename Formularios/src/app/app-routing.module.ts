import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticaCardsComponent } from './pages/practica-cards/practica-cards.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: 'practica', component: PracticaCardsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'reactive'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
