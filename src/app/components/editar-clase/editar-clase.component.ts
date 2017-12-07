import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-editar-clase',
  templateUrl: './editar-clase.component.html',
  styleUrls: ['./editar-clase.component.css']
})
export class EditarClaseComponent implements OnInit {
  edificio:string
  aula:string
  dia:string
  hora:string
  constructor(private fb:FirebaseService,activatedRoute:ActivatedRoute,private router:Router) {
  console.log("entro a salon")
  // this.edificio=activatedRoute.snapshot.params.id;
  // this.aula = activatedRoute.snapshot.params.name;
  // this.dia = activatedRoute.snapshot.params.dia;

  activatedRoute.params.subscribe( parames => {
    this.edificio = parames.id;
    this.aula = parames.name;
    this.dia = parames.dia;
    this.hora = parames.hora
  })
}

  ngOnInit() {
  }

}
