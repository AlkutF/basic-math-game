import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GanarPageRoutingModule } from './ganar-routing.module';

import { GanarPage } from './ganar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GanarPageRoutingModule
  ],
  declarations: [GanarPage]
})
export class GanarPageModule {}
