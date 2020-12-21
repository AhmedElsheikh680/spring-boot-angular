import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string, password: string) {
    console.log('Before Login '+ this.isUserLoginIn());
    if(username === 'Ahmed' && password === 'dumy'){
      sessionStorage.setItem('authenticateUser', username);
      console.log('After Login '+ this.isUserLoginIn());
      return true;
    }
    return false; 
  }
  isUserLoginIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
