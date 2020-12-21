import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service.';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthentiationService:BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username='Ahmed';
    // let password='dumy';
    // let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthentiationService.getauthenticateToken();
    let username= this.basicAuthentiationService.getauthenticateUser();
    if(basicAuthHeaderString && username){

 
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
  }
    return next.handle(request);

  }
}
