import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent implements OnInit {

  edificio:string;
  edificios:any;
  ruta:any;
  aulas:any;
  aula:string;
  dias:any;
  dia:string;
  hora:string;
  horas:any;
  clases:any [] = [];
  _email:string
  Logeado:boolean

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
    this.obtenersalonesEdificio(parames.id);
    this.obtenerDias(this.aula)
    this.obtenerHoras(this.dia)
    this.obtenerClases(this.hora)
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
  fb.getClases(this.edificio,this.aula,this.dia,this.hora).subscribe(clases => {
    this.clases = clases
    console.log("obtubo clases")
    console.log(this.clases)
  })
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
    this.fb.getEdificios().subscribe( edif => {
      this.edificios = edif
      //console.log(this.edificios)
    });
    this.fb.getDias(this.edificio,this.aula).subscribe(dias => {
      this.dias = dias
      //console.log(this.dias);
    })
    this.fb.getHoras(this.edificio,this.aula,this.dia).subscribe(hora => {
      this.horas = hora
      //console.log(this.horas);
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
    this.fb.getClases(this.edificio,this.aula,this.dia,this.hora).subscribe(clase => {
      this.clases = clase
      console.log("obtubo clases")
      console.log(this.clases)
    })
  }
  editarClase(){
    this.router.navigate(['/ed/'+this.edificio+'/'+this.aula+'/'+this.dia+'/'+this.hora,'editar'])

  }

  logout(){
    this.fb.signOut();
    this.router.navigate(['/']);
  }

  }
