import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//import {HttpModule} from '@angular/http';

import {AngularFireModule}  from 'angularfire2';
import {AngularFireDatabaseModule}  from 'angularfire2/database';
//servicios
import {FirebaseService} from './services/firebase.service';
import { HorariosComponent } from './components/horarios/horarios.component'

//environment
import {environment}  from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  //  HttpModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
