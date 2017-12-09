import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
private Logeado:Boolean
private _email:string
constructor(public fb: FirebaseService,private router:Router ){

  if(fb.authState == null){//no logeado
    this.Logeado = false
    this._email = ''
    this.router.navigate(['login'])
  }else {
    //logeado
    this.Logeado = true
    this._email = fb.currentUserName
    this.router.navigate([''])
  }
}

ngOnInit(){
//  this.datos = this.fb.getEdificios();
//  console.log(this.datos)


}

}
