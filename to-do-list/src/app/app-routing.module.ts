import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadesComponent } from './atividades/atividades.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AtividadeDetailComponent } from './atividade-detail/atividade-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AtividadeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
