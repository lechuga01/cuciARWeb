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
  _email:string
  Logeado:boolean
  constructor(private fb:FirebaseService,activatedRoute:ActivatedRoute,private router:Router) {
  console.log("entro a salon")
  // this.edificio=activatedRoute.snapshot.params.id;
  // this.aula = activatedRoute.snapshot.params.name;
  console.log(this.edificio)
  activatedRoute.params.subscribe( parames => {
    this.edificio = parames.id;
    this.aula = parames.name;
    this.obtenersalonesEdificio(parames.id);
    console.log(parames.id)
    this.obtenerDias(parames.name);
    fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      console.log(this.dias);
    })

    //this.obtenerHoras(parames.dia);
    fb.getAulas(this.edificio).subscribe(aula => {
      this.aulas = aula
    })
   console.log(parames)
 });
 fb.getEdificios().subscribe(edi => {
   this.edificios = edi
 });
console.log("se creoconsole")


}

  ngOnInit() {
    this._email= this.fb.currentUserName
    if(this.fb.authState == null){//no logeado
      this.Logeado = false
      this._email = ''
      this.router.navigate(['login'])
    }else {
      //logeado
      this.Logeado = true
      this._email = this.fb.currentUserName

    }
    this.fb.getEdificios().subscribe(edi => {
      this.edificios = edi
    });
    this.fb.getAulas(this.edificio).subscribe(aula => {
      this.aulas = aula
    })
    this.fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      console.log(this.dias);
    })
    console.log("se creo init")
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
    this.fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      console.log(this.dias);
    })
  }
  obtenerHoras(dia:string){
    this.router.navigate(['/ed/'+this.edificio+'/'+this.aula,dia]);

  }
  
  logout(){
    this.fb.signOut();
    this.router.navigate(['/']);
  }
}
