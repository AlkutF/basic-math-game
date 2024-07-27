import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplicacionPage } from './explicacion.page';

const routes: Routes = [
  {
    path: '',
    component: ExplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplicacionPageRoutingModule {}
