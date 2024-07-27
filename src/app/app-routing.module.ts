import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'practica/opciones',
    loadChildren: () => import('./practica/opciones/opciones.module').then(m => m.OpcionesPageModule)
  },
  {
    path: 'teoria/opciones',
    loadChildren: () => import('./teoria/opciones/opciones.module').then(m => m.OpcionesPageModule)
  },
  {
    path: 'practica/operaciones',
    loadChildren: () => import('./practica/operaciones/operaciones.module').then(m => m.OperacionesPageModule)
  },
  {
    path: 'fin-juego',
    loadChildren: () => import('./fin-juego/fin-juego.module').then(m => m.FinJuegoPageModule)
  },
  {
    path: 'teoria/explicacion',
    loadChildren: () => import('./teoria/explicacion/explicacion.module').then(m => m.ExplicacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
