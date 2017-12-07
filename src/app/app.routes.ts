import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HorariosComponent} from './components/horarios/horarios.component';
import {SalonComponent} from './components/salon/salon.component';
import {DiasComponent} from './components/dias/dias.component';
import {HorasComponent} from './components/horas/horas.component';
const app_routes: Routes = [
  { path: 'ed', //component: HorariosComponent},
  children:[
   {path: ':id', component: HomeComponent},
   {path: ':id/:name', component: SalonComponent},
   {path: ':id/:name/:dia', component: DiasComponent},
   {path: ':id/:name/:dia/:hora', component: HorasComponent}
 ]
 },
 {path:'home', component:HorariosComponent},
  //falta meterle hijos a su ruta para los demas datos

  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
