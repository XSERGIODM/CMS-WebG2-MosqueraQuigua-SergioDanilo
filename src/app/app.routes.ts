import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';
import {NoticiasPage} from './page/noticias-page/noticias-page';
import {DetalleNoticiaPage} from './page/detalle-noticia-page/detalle-noticia-page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'noticias',
    component: NoticiasPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalle-noticia/:id',
    component: DetalleNoticiaPage
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
