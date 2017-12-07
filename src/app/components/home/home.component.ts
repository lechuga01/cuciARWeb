import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  edificios:any;
  edificio:any;
  aulas:any;
  ruta:any;

  constructor(private fb:FirebaseService,  activatedRoute:ActivatedRoute, private router:Router) {
    console.log("entor a home");
   activatedRoute.params.subscribe( parames => {
     this.edificio = parames;

     this.obtenersalonesEdificio(this.edificio.id);
     this.ruta= parames.name;

    console.log(parames)
  });
  console.log(this.ruta)
  console.log(this.edificio.id)

  this.fb.getEdificios().subscribe( edif => {
    this.edificios = edif
    console.log(this.edificios)
  });
  this.fb.getAulas(this.edificio.id).subscribe(aula => {
    this.aulas = aula
  });
  }

  ngOnInit() {
    this.fb.getEdificios().subscribe( edif => {
      this.edificios = edif
      console.log(this.edificios)
    });

    console.log("entro init home")


  }
  obtenersalonesEdificio(id:string){
    console.log(id);
    this.router.navigate(['/ed',id]);
    this.fb.getAulas(this.edificio.id).subscribe(aula => {
      this.aulas = aula
    })
    console.log("salio")

  }
  obtenerDias(Salon:string){
    console.log(Salon+"-"+this.edificio.id)

    this.router.navigate(['/ed/'+this.edificio.id,Salon]);


  }
}
