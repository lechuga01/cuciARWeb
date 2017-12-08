import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  edificio:string;
  edificios:any;
  ruta:any;
  aulas:any;
  aula:string;
  dias:any;
  dia:string;
  horas:any;

  constructor(private fb:FirebaseService,activatedRoute:ActivatedRoute,private router:Router) {
  console.log("entro a salon")
  this.edificio=activatedRoute.snapshot.params.id;
  this.aula = activatedRoute.snapshot.params.name;
  this.dia = activatedRoute.snapshot.params.dia;
  console.log(this.edificio)
  activatedRoute.params.subscribe( parames => {
    //this.edificio = parames.id;
    this.dia = parames.dia
    this.obtenersalonesEdificio(parames.id);
    this.obtenerDias(this.aula)
    this.obtenerHoras(this.dia)
    //this.obtenerHoras(parames.dia);
   console.log(parames)
 });
 fb.getEdificios().subscribe(edi => {
   this.edificios = edi
 });
 fb.getDias(this.edificio,this.aula).subscribe(dias => {
   this.dias = dias
   console.log(this.dias);
 })
 fb.getHoras(this.edificio,this.aula,this.dia).subscribe(hora => {
   this.horas = hora
   console.log(this.horas);
 })
}

  ngOnInit() {
    this.fb.getEdificios().subscribe( edif => {
      this.edificios = edif
      console.log(this.edificios)
    });
    this.fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      console.log(this.dias);
    })
    this.fb.getHoras(this.edificio,this.aula,this.dia).subscribe(hora => {
      this.horas = hora
      console.log(this.horas);
    })
  }

  obtenersalonesEdificio(id:string){
    console.log(id)
    this.router.navigate(['/ed',id]);
    this.fb.getAulas(this.edificio).subscribe(aula => {
      this.aulas = aula
    })
    console.log("salio")

  }
  obtenerDias(Salon:string){

    this.router.navigate(['/ed/'+this.edificio,Salon]);
    this.fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      console.log(this.dias);
    })
  }
  obtenerHoras(dia:string){
    this.router.navigate(['/ed/'+this.edificio+'/'+this.aula,dia]);
    this.fb.getHoras(this.edificio,this.aula,this.dia).subscribe(hora => {
      this.horas = hora
      console.log(this.horas);
    })
  }
  obtenerClases(hora:string){
    this.router.navigate(['/ed/'+this.edificio+'/'+this.aula+'/'+this.dia,hora])
    //this.fb.getClases(this.edificio,this.aula,this.dia,hora)
  }
}
