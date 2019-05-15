import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginForm.value.user == 'alpino' && this.loginForm.value.password == 'admin') {
        var date = new Date();
        date.setDate(date.getDate() + 1);

        this.cookieService.set( 'user', this.loginForm.value.email, date);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'user/password incorrect';
      }
  }

}
