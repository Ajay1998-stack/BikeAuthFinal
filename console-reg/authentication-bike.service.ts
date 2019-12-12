import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(regNo, password) {
      return this.httpClient.post<any>('http://localhost:8085/api/v1/authenticate',{regNo,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('bikeid',regNo);
          let tokenStr= userData.token;
          sessionStorage.setItem('biketoken', tokenStr);
          return userData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('regNo')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('regNo')
    sessionStorage.removeItem('token')
  }
}
