import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HorariosComponent} from './components/horarios/horarios.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'home/:id', component: HomeComponent  },//falta meterle hijos a su ruta para los demas datos

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
