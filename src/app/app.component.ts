import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taquilla';

  constructor(private oauthService: OAuthService) {
    this.oauthService.tokenEndpoint = "https://taquilla.rodsoft.com.mx/oauth/token";
    this.oauthService.userinfoEndpoint = "https://taquilla.rodsoft.com.mx/identity";
    this.oauthService.clientId = "taquillaClient";
    this.oauthService.scope = "openid offline_access";
    this.oauthService.dummyClientSecret = "@4816152342";
    this.oauthService.oidc = false;
  }
}
