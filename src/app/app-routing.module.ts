import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./tools/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'edad',
    loadChildren: () => import('./tools/edad/edad.module').then( m => m.EdadPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./tools/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./tools/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'universidades',
    loadChildren: () => import('./tools/universidades/universidades.module').then( m => m.UniversidadesPageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./tools/wordpress/wordpress.module').then( m => m.WordpressPageModule)
  },
  {
    path: '**',
    redirectTo: 'info'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
