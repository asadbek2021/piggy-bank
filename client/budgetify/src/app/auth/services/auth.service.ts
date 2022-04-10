import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable, catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private backednUrl = 'http://localhost:3000/auth';
  constructor(private http:HttpClient, private snackBar: MatSnackBar) { }

  login(email:string, password:string) {
    return this.http.post(`${this.backednUrl}/login`, {email, password}).pipe(
      tap(res =>  this.setSession(res)),
      catchError(this.handleError({}))
    )
  }

  isLoggedIn(){
    const expiresIn = localStorage.getItem('expiresIn');
    if(expiresIn){
      return Date.now() < +expiresIn;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('myToken');
    localStorage.removeItem('expiresIn');
  }


   private setSession(res:any){
     const expiresIn = Date.now() + +res.expiresIn;
    localStorage.setItem('myToken', res.token)
    localStorage.setItem('expiresIn', String(expiresIn))

   }

   private handleError <T>(result:T) {
     return (error:any):Observable<T> => {
      this.snackBar.open(` ${error.error.message}`, 'close', {duration:1000});
      return of(result as T);
      }
   }
};

