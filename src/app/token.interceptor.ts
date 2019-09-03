import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { OAuthService, OAuthResourceServerErrorHandler } from 'angular-oauth2-oidc';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public authService: OAuthService,
    private errorHandler: OAuthResourceServerErrorHandler,
) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getAccessToken()) {
      req = this.addToken(req, this.authService.getAccessToken());
    }

    return next
      .handle(req)
      .pipe(catchError(error => this.errorHandler.handleError(error)))
  }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}