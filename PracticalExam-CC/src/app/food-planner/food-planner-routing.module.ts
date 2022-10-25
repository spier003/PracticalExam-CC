import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodPlannerPage } from './food-planner.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodPlannerPageRoutingModule {}
