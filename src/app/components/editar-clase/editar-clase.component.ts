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
  test:any
  selectMateria:string
  materias:any
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
  fb.getMaterias().subscribe(materia => {
    this.materias = materia
    console.log(this.materias)
  })
  this.test = {edificio:this.edificio,aula:this.aula}//de esta forma se crea el arreglo a enviar a actualizar
  console.log(this.test)
}

  ngOnInit() {
    console.log(this.selectMateria)
  }
  HelloCorp(event:any){
    this.selectMateria = event.target.value;
    console.log("hola we " )
  }

}
