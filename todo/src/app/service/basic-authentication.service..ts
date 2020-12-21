import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';

export const TOKEN= 'token'
export const AUTHENTICATED_USER='authenticateUser'
@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService { 

  constructor(private http:HttpClient) { }
  // authenticate(username: string, password: string) {
  //   console.log('Before Login '+ this.isUserLoginIn());
  //   if(username === 'Ahmed' && password === 'dumy'){
  //     sessionStorage.setItem('authenticateUser', username);
  //     console.log('After Login '+ this.isUserLoginIn());
  //     return true;
  //   }
  //   return false; 
  // }
  // executeHelloWorldBeanService(){
  //   return this.http.get<AuthenticationBean>("http://localhost:8080/api/v1/hello-world");
  //    // console.log("Execute Hello World Bean Service");
  //  }
  
  executeJwtAuthenticationService(username:string,password:string){
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,password
      }
    ).pipe(
      map(
        data =>{
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        }
      )
    )
  }

   executeBasicAuthenticationService(username: string, password: string){
 
     let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
   
     let headers = new HttpHeaders({
       Authorization: basicAuthHeaderString
     })
     
     return this.http.get(`${API_URL}/basicauth`,{headers}).pipe(
       map(
         data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data;
         }
       )
     );
   }
   getauthenticateUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
   }
   getauthenticateToken(){
     if(this.getauthenticateUser())
    return sessionStorage.getItem(TOKEN)
   }
   //Access to XMLHttpRequest at 'http://localhost:8080/api/v1/users/Ahmed/todos' 
   //from origin 'http://localhost:4200' has been blocked by CORS policy:
   // No 'Access-Control-Allow-Origin' header is present on the requested resource

   // welcome/Ahmed:1 Access to XMLHttpRequest at 'http://localhost:8080/api/v1/hello-world/Ahmed'
   //  from origin 'http://localhost:4200' has been blocked by CORS policy: 
   //  Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
  isUserLoginIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}
export class AuthenticationBean{
  constructor(public message:string){}
}
