import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorld{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
   return this.http.get<HelloWorld>("http://localhost:8080/api/v1/hello-world");
    // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    
    return this.http.get(`http://localhost:8080/api/v1/hello-world/${name}`
    // ,{headers}
    );
  }
  //Access to XMLHttpRequest at 'http://localhost:8080/api/v1/users/Ahmed/todos' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource
  // createBasicAuthenticationHttpHeader(){
  //   let username='Ahmed';
  //   let password='dumy';
  //   let basicAuthHeaderString='Basic '+window.btoa(username + ':' + password);
  //   return basicAuthHeaderString; 
  // }
  // welcome/Ahmed:1 Access to XMLHttpRequest at 'http://localhost:8080/api/v1/hello-world/Ahmed'
  //  from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //  Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}

