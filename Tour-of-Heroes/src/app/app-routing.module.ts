import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeComponent } from './heroe/heroe.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroe', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
