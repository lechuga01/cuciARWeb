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
  selectMateria:string = 'vacio'
  materias:any
  profesores:any
  selectProfesor:string ='vacio'
  formulario:any
  direccionClase:string
  descripcionMateria:string ='vacio'

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
    this.direccionClase = this.edificio+'/'+this.aula+'/'+this.dia
  })
  fb.getMaterias().subscribe(materia => {
    this.materias = materia
    console.log(this.materias)
  })
  fb.getProfesores().subscribe(profesor => {
    this.profesores = profesor
    console.log(this.materias)
  })
  //this.test = {edificio:this.edificio,aula:this.aula}//de esta forma se crea el arreglo a enviar a actualizar
  this.test = {profesor:'olasd'}
  //this.fb.updateClase('horrr',this.test,'0700')
  console.log(this.test)
  console.log(this.direccionClase)



}

  ngOnInit() {
    console.log(this.selectMateria)

  }
  setMateriaSelector(event:any){
    this.selectMateria = event.target.value;
    for (let i = 0; i < this.materias.length; i++) {
        this.materias[i];
        if(this.selectMateria === this.materias[i].materia){
          this.descripcionMateria = this.materias[i].description;
          console.log(this.descripcionMateria)
        }

    }

    console.log("hola we " )
  }
  setProfesorSelector(event:any){
    this.selectProfesor = event.target.value;
  }
  setActualizar(){
    this.formulario = {materia:this.selectMateria,profesor:this.selectProfesor,description:this.descripcionMateria}
    console.log(this.formulario)
    this.router.navigate(['/ed/'+this.direccionClase,this.hora])
    this.fb.updateClase(this.direccionClase,this.formulario,this.hora);
  }
  cancelarEdicion(){
    this.router.navigate(['/ed/'+this.edificio+'/'+this.aula+'/'+this.dia+'/'+this.hora])
  }
}
