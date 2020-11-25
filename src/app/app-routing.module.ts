import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-items',
    loadChildren: () => import('./pages/add-items/add-items.module').then( m => m.AddItemsPageModule)
  },
  {
    path: 'update-items\{{data}}',
    loadChildren: () => import('./pages/update-items/update-items.module').then( m => m.UpdateItemsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
