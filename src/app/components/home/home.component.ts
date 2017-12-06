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
  reloadAulas:boolean = false;

  constructor(private fb:FirebaseService, activatedRoute:ActivatedRoute, private router:Router) {
   activatedRoute.params.subscribe( parames => {
     this.edificio = parames
     this.obtenersalonesEdificio(this.edificio.id);
    console.log(parames)
  });

  console.log(this.edificio.id)

  this.fb.getEdificios().subscribe( edif => {
    this.edificios = edif
    console.log(this.edificios)
  });


  }

  ngOnInit() {

  }
  obtenersalonesEdificio(ed:string){
    this.fb.getAulas(this.edificio.id).subscribe(aula => {

     this.aulas = aula

     console.log(this.aulas);

    });
    this.router.navigate(['home',ed]);


  }
  obtenerDias(Salon:string){

    this.router.navigate(['/home',Salon]);


  }
}
