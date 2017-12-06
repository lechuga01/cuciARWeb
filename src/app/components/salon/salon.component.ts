import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})

export class SalonComponent implements OnInit {
  edificio:string;
  edificios:any;
  ruta:any;
  aulas:any;
  aula:string;
  dias:any;
  constructor(private fb:FirebaseService,activatedRoute:ActivatedRoute,private router:Router) {
  console.log("entro a salon")
  this.edificio=activatedRoute.snapshot.params.id;
  this.aula = activatedRoute.snapshot.params.name;
  console.log(this.edificio)
  activatedRoute.params.subscribe( parames => {
    //this.edificio = parames.id;

    this.obtenersalonesEdificio(parames.id);
    this.obtenerDias(parames.name)
    //this.ruta= parames.name;

   console.log(parames)
 });
 fb.getEdificios().subscribe(edi => {
   this.edificios = edi
 });
 fb.getDias(this.edificio,this.aula).subscribe(dias => {
   this.dias = dias
   console.log(this.dias);
 })

}

  ngOnInit() {
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
    console.log(Salon+"-"+this.edificio)

    this.router.navigate(['/ed/'+this.edificio,Salon]);
  }
  obtenerHoras(dia:string){

  }
}
