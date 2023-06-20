import { LoginForm } from './../../../entities-form/login-form';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MessageResult } from 'src/app/enums/messageResult';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./../../components.css'],
  providers: [
    LoginService
  ]


})
export class LoginComponentComponent implements OnInit, OnDestroy {

  public pageTitle: string
  public loginForm: LoginForm;

  public checkAll: boolean;
  public message: string;


  constructor
    (
      private loginService: LoginService,
      private router: Router
    ) {
    this.pageTitle = "Página de Login";
    this.loginForm = new LoginForm();

    this.checkAll = true;
    this.message = "";

  }


  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  public submitLoginForm(form: LoginForm): void {

    this.loginService.readUser(form.email, form.password).subscribe
      (
        response => {
          console.log(response);

          this.loginService.setUser(response.messageResult)

        }
      )
    console.log(this.loginService.getUser());
  }



}
