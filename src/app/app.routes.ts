import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HorariosComponent} from './components/horarios/horarios.component';
import {SalonComponent} from './components/salon/salon.component';
import {DiasComponent} from './components/dias/dias.component';
import {HorasComponent} from './components/horas/horas.component';
import {EditarClaseComponent} from './components/editar-clase/editar-clase.component';
import {LoginComponent} from './components/login/login.component';

const app_routes: Routes = [
  { path: 'ed', //component: HorariosComponent},
  children:[
   {path: ':id', component: HomeComponent},
   {path: ':id/:name', component: SalonComponent},
   {path: ':id/:name/:dia', component: DiasComponent},
   {path: ':id/:name/:dia/:hora', component: HorasComponent},
   {path: ':id/:name/:dia/:hora/editar', component: EditarClaseComponent}
 ]
 },
 {path:'home', component:HorariosComponent},
 {path:'login', component:LoginComponent},
  //falta meterle hijos a su ruta para los demas datos

  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

export const app_routing = RouterModule.forRoot(app_routes);
