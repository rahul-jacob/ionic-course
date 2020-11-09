import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipies',
    pathMatch: 'full'
  },
  {
    path: 'recipies',
    children:[
      {
        path: '',
        loadChildren: () => import('./recipies/recipies.module').then( m => m.RecipiesPageModule)
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recipies/recipie-detail/recipie-detail.module').then(m => m.RecipieDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
