import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList}  from 'angularfire2/database';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  edificios:AngularFireList<any[]>;
  todoEdificio:any;
  llave:any;
  constructor(db:AngularFireDatabase) {
    //this.edificios = db.list<any[]>("/Edificio/E/0001/L");
    this.edificios = db.list<any[]>("/Edificio/");
    this.edificios.valueChanges().subscribe(edificios => {

      this.todoEdificio = edificios

      console.log(this.todoEdificio);
    });

    this.edificios.snapshotChanges().subscribe( llavesEdific => {//con el snapchot nos puede devolver el key asi para poder ingresarlos

      this.llave = llavesEdific


      console.log(this.llave);
    });
  }


  ngOnInit() {

  }

  obtenersalonesEdificio(letr:string){
    console.log(letr)
  }

}
