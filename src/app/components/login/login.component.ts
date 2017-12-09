import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    isNewUser = true;
    email = '';
    password = '';
    errorMessage = '';
    error: {name: string, message: string} = {name: '', message: ''};

    constructor(public authService: FirebaseService, private router: Router) {}

    ngOnInit() {
    }

    clearErrorMessage() {
      this.errorMessage = '';
      this.error = {name: '', message: ''};
    }

    changeForm() {
      this.isNewUser = !this.isNewUser
    }


    onLoginEmail(): void {
      this.clearErrorMessage()

      if (this.validateForm(this.email, this.password)) {
        this.authService.loginEmail(this.email, this.password)
          .then(() => this.router.navigate(['/home']))
          .catch(_error => {
            this.error = _error
            this.router.navigate(['/'])
          })
      }
    }

    validateForm(email: string, password: string): boolean {
      if (email.length === 0) {
        this.errorMessage = 'Please enter Email!'
        return false
      }

      if (password.length === 0) {
        this.errorMessage = 'Please enter Password!'
        return false
      }

      if (password.length < 6) {
        this.errorMessage = 'Password should be at least 6 characters!'
        return false
      }

      this.errorMessage = ''

      return true
    }
  }
