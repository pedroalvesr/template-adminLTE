import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: PaginasComponent, children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
