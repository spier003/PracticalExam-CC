import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'account-page',
  //   loadChildren: () => import('./account-page/account-page.module').then( m => m.AccountPagePageModule)
  // },
  // {
  //   path: 'food-planner',
  //   loadChildren: () => import('./food-planner/food-planner.module').then( m => m.FoodPlannerPageModule)
  // },
  // {
  //   path: 'notifications',
  //   loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  // },
  // {
  //   path: 'forum',
  //   loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  // },
  // {
  //   path: 'map',
  //   loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  // },
  {
    path: 'menutab',
    loadChildren: () => import('./menutab/menutab.module').then( m => m.MenutabPageModule)
  },
  {
    path: '',
    redirectTo: '/menutab',
    pathMatch: 'full',
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  // {
  //   path: 'helpdesk',
  //   loadChildren: () => import('./helpdesk/helpdesk.module').then( m => m.HelpdeskPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
