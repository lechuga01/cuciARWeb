import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//import {HttpModule} from '@angular/http';

import {AngularFireModule}  from 'angularfire2';
import {AngularFireDatabaseModule}  from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
//servicios
import {FirebaseService} from './services/firebase.service';
import { HorariosComponent } from './components/horarios/horarios.component'

// rutas
import {app_routing} from './app.routes';

//environment
import {environment}  from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { SalonComponent } from './components/salon/salon.component';
import { HorasComponent } from './components/horas/horas.component';
import { DiasComponent } from './components/dias/dias.component';
import { EditarClaseComponent } from './components/editar-clase/editar-clase.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    HomeComponent,
    SalonComponent,
    HorasComponent,
    DiasComponent,
    EditarClaseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    app_routing
  //  HttpModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
