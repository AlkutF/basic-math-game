import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GanarPage } from './ganar.page';

const routes: Routes = [
  {
    path: '',
    component: GanarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanarPageRoutingModule {}
