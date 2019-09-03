import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  private authenticated: boolean;

  constructor(
    private router: Router,
    private oauthService: OAuthService) {
    this.authenticated = this.oauthService.hasValidAccessToken()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticated) return true;
    this.router.navigate(['/']);
  }
}