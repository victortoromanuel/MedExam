import { Routes } from '@angular/router';
import { AterrizajeComponent } from './aterrizaje/aterrizaje.component';
import { ForgotpswComponent } from './forgotpsw/forgotpsw.component';
import { HomeComponent } from './home/home.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgotpsw',
    component: ForgotpswComponent,
    pathMatch: 'full'
  },
  {
    path: 'aterrizaje',
    component: AterrizajeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'home'
  }
]
