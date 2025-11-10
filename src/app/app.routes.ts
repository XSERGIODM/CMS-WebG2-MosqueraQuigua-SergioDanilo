import { Routes } from '@angular/router';
import { HomePage } from './page/home-page/home-page';
import {NoticiasPage} from './page/noticias-page/noticias-page';
import {DetalleNoticiaPage} from './page/detalle-noticia-page/detalle-noticia-page';
import {LoginPage} from './page/login-page/login-page';
import {PerfilPage} from './page/perfil-page/perfil-page';

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
    path: 'login',
    component: LoginPage
  },
  {
    path: 'perfil',
    component: PerfilPage
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
