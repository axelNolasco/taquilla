import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public error: boolean = false;
  public errorMessage: string;

  constructor(
    private oauthService: OAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public handleSubmitEvent() {
    if (this.form.valid) {
      console.log(this.form);
      this.error = false;
      this.errorMessage = '';
      this.oauthService.fetchTokenUsingPasswordFlow(this.form.value.username, this.form.value.password)
      .then((resp) => {
        console.log(resp);
        // Loading data about the user
        return this.oauthService.loadUserProfile();
      }).then((response) => {
        this.router.navigate(['/taquilla']);
      })
      .catch(err => {
        console.log('err =>', err);
        this.handleLoginError(err.status);
      });
    }
  }

  private handleLoginError(error) {
    switch (error) {
      case 400:
      case 401:
      case 404:
        this.error = true;
        this.errorMessage = 'Usuario o contraseña invalidos';
        break;
      default:
        break;
    }
  }
}
