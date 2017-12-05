import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  edificios:any
  constructor(private fb:FirebaseService) { }

  ngOnInit() {
      this.fb.getAulas('E').subscribe(edificios => {

       this.edificios = edificios

       console.log(this.edificios);
     });
  }


}
