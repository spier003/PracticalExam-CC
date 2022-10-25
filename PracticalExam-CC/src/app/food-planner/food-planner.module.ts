import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPlannerPageRoutingModule } from './food-planner-routing.module';

import { FoodPlannerPage } from './food-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodPlannerPageRoutingModule
  ],
  declarations: [FoodPlannerPage]
})
export class FoodPlannerPageModule {}
