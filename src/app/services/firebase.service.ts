import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}  from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
@Injectable()
export class FirebaseService {

  edificios:AngularFireList<any[]>;
  private todoEdificio:any[];
  llave:any;
  authState:any = null

  constructor(private afAuth:AngularFireAuth,private db:AngularFireDatabase,private router: Router) {
    this.afAuth.authState.subscribe( (auth) => {
      this.authState = auth
    });

    this.edificios = db.list<any[]>("/Edificio/");
    this.edificios.valueChanges().subscribe(edificios => {
    this.todoEdificio = edificios


    });

    this.edificios.snapshotChanges().subscribe( llavesEdific => {//con el snapchot nos puede devolver el key asi para poder ingresarlos
    this.llave = llavesEdific

    });
  }

  loginEmail(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user
        })
        .catch(error => {
          console.log(error)
          throw error
        });
    }

  get currentUserName(): string {
        return this.authState['email']
      }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }

getEdificios(){
  return this.db.list<any[]>("/Edificio").snapshotChanges();
}
getAulas(letraEdificio:string){//retorno de los key de aulas cada edificio
  return this.db.list<any[]>("/Edificio/"+letraEdificio).snapshotChanges();
}
getDias(letraEdificio:string,Aula:string){//retorno de los key de aulas cada edificio
  return this.db.list<any[]>("/Edificio/"+letraEdificio+"/"+Aula).snapshotChanges();
}
getHoras(letraEdificio:string,Aula:string,dia:string){//retorno de los key de aulas cada edificio
  return this.db.list<any[]>("/Edificio/"+letraEdificio+"/"+Aula+"/"+dia).snapshotChanges();
}
getClases(letraEdificio:string,Aula:string,dia:string,hora:string){//retorno de los key de aulas cada edificio
  return this.db.list<any[]>("/Edificio/"+letraEdificio+"/"+Aula+"/"+dia+"/"+hora).valueChanges();
}

getMaterias(){
  return this.db.list<any[]>("/Materias/INCO").valueChanges();//pura informacion
}
getProfesores(){return this.db.list<any[]>("/Profesores/INCO").valueChanges();}//pura informacion

updateClase(clasedireccion:string, datos:any,hora:string){
  this.db.list<any[]>("/Edificio/"+clasedireccion).update(hora, datos) //lleva la key
  console.log(clasedireccion)
}

}
