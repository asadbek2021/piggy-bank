import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';
import { User } from './../../users';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private backednUrl = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }

  login(email:string, password:string) {
    return this.http.post(`${this.backednUrl}/login`, {email, password}).pipe(
      tap(res =>  this.setSession(res))
    )
  }

  isLoggedIn(){
    const expiresIn = localStorage.getItem('expiresIn');
    if(expiresIn){
      return Date.now() < Number(expiresIn);
    }
    return false;
  }

  logout(){
    localStorage.removeItem('myToken');
    localStorage.removeItem('expiresIn');
  }


   private setSession(res:any){
    const expiresIn = Date.now() + res.expiresIn;
    localStorage.setItem('myToken', res.token)
    localStorage.setItem('expiresIn', String(expiresIn))

   }
};

