import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenutabPageRoutingModule } from './menutab-routing.module';

import { MenutabPage } from './menutab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenutabPageRoutingModule
  ],
  declarations: [MenutabPage]
})
export class MenutabPageModule {}
