import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}  from 'angularfire2/database';
import {claseObj} from './firebase.service';
@Injectable()
export class FirebaseService {
  edificios:AngularFireList<any[]>;
  private todoEdificio:any[];
  llave:any;
  datostest:any = {profesor:"h",description:'sasdf',materia:'asd'};
  constructor(private db:AngularFireDatabase) {
    //this.edificios = db.list<any[]>("/Edificio/E/0001/L");
    this.edificios = db.list<any[]>("/Edificio/");
    this.edificios.valueChanges().subscribe(edificios => {

      this.todoEdificio = edificios
    //    this.db.list<any[]>("/test/").set("hora", this.datostest)
     console.log(this.datostest);
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
updateClase(clasedireccion:string, datos:claseObj[],hora:string){
  this.db.list<any[]>("/test/").update(hora, datos) //lleva la key
}
}

export interface claseObj{
  profesor:string,
  description:string,
  materia:string
}
