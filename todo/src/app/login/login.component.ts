
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service.';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='Ahmed';
  password='';
  errorMessage='Invalid Credentials';
  invalidLogin=false;
  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router:Router
    , private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    // if(this.username === "Ahmed" && this.password ==="dumy"){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //Redirect To Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }

  handleJWTAuthLogin(){

      this.basicAuthenticationService.executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        data =>{
          console.log(data)
      //Redirect To Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
        },
        error=>{
          console.log(error)
          this.invalidLogin=true;
        }
      )
   
  }

  // handleBasicAuthLogin(){
  //   // if(this.username === "Ahmed" && this.password ==="dumy"){
  //     this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password)
  //     .subscribe(
  //       data =>{
  //         console.log(data)
  //     //Redirect To Welcome Page
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin=false;
  //       },
  //       error=>{
  //         console.log(error)
  //         this.invalidLogin=true;
  //       }
  //     )
   
  // }

}
