import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}  from 'angularfire2/database';
@Injectable()
export class FirebaseService {
  edificios:AngularFireList<any[]>;
  private todoEdificio:any[];
  llave:any;
  constructor(private db:AngularFireDatabase) {
    //this.edificios = db.list<any[]>("/Edificio/E/0001/L");
    this.edificios = db.list<any[]>("/Edificio/");
    this.edificios.valueChanges().subscribe(edificios => {

      this.todoEdificio = edificios

    //  console.log(this.todoEdificio);
    });

    this.edificios.snapshotChanges().subscribe( llavesEdific => {//con el snapchot nos puede devolver el key asi para poder ingresarlos

      this.llave = llavesEdific


      //console.log(this.llave);
    });
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
}
