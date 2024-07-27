import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplicacionPageRoutingModule } from './explicacion-routing.module';

import { ExplicacionPage } from './explicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplicacionPageRoutingModule
  ],
  declarations: [ExplicacionPage]
})
export class ExplicacionPageModule {}
