import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenutabPage } from './menutab.page';

const routes: Routes = [
  {
    path: '',
    component: MenutabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      {
        path: 'account-page',
        loadChildren: () => import('../account-page/account-page.module').then( m => m.AccountPagePageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'food-planner',
        loadChildren: () => import('../food-planner/food-planner.module').then( m => m.FoodPlannerPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
      },
      {
        path: '',
        redirectTo: '/menutab/home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menutab/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenutabPageRoutingModule {}
