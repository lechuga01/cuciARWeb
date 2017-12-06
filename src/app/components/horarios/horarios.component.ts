import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  todoEdificio:any;
  llave:any;
  Salones:any;

  constructor(public db:FirebaseService, private router:Router) {
    //this.edificios = db.list<any[]>("/Edificio/E/0001/L");
    db.getEdificios().subscribe(edificios => {
    this.todoEdificio = edificios
    console.log(this.todoEdificio)
  });

  }


  ngOnInit() {

  }

  obtenersalonesEdificio( id:string ){
    console.log(id)
    this.router.navigate(['/ed',id]);
    console.log("salio")
  }



}
