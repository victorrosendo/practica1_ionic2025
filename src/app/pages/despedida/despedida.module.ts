import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespedidaPageRoutingModule } from './despedida-routing.module';

import { DespedidaPage } from './despedida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespedidaPageRoutingModule
  ],
  declarations: [DespedidaPage]
})
export class DespedidaPageModule {}
