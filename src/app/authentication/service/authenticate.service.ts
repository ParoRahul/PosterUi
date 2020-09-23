import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import {  map, catchError } from 'rxjs/operators';

import { ICredentials } from '../model/credentials.model';

import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '../model/user.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private authenticateUrl: string;

  // private userTokenSubject: BehaviorSubject<IUser>;
  // public userToken: Observable<IUser>;

  private loggedIn = new BehaviorSubject<boolean>(false);
  public loggedInStatus: Observable<boolean> = this.loggedIn.asObservable();

  private validUser = new Subject<boolean>();
  public validUserObserver: Observable<boolean> = this.validUser.asObservable();

  constructor(private http: HttpClient,
              private route: Router,
              private jwtHelperService: JwtHelperService ) {
    this.authenticateUrl = 'http://192.168.0.104:3000/auth/login/';
    if (!this.jwtHelperService.isTokenExpired()){
         this.loggedIn.next(true);
    }
  }

  public login(credetilals: ICredentials ) {
    // console.log(JSON.stringify(credetilals)); {headers: {skip: 'true'}}
    // const body: string = JSON.stringify(credetilals);
    const headers = new HttpHeaders({skip: 'true'});
    this.http.post<ICredentials>( this.authenticateUrl, credetilals, {headers})
    .subscribe( (response: any) => {
      const result = response;
      if (  result && result.token ) {
            localStorage.setItem('token', result.token );
            // const tokenDecode = this.jwtHelperService.decodeToken(result.token);
            this.loggedIn.next(true);
            this.validUser.next(true);
            this.route.navigate(['/home']);
      }
    },
    (error: HttpErrorResponse) => {
        console.log(` Error Unauthorized access ${error.status}`);
        this.validUser.next(false);
        return throwError(error);
    }
    );
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.loggedIn.next(null);
  }

  public isLogedin(): boolean {
    console.log(this.jwtHelperService.decodeToken(localStorage.getItem('token')));
    return this.jwtHelperService.isTokenExpired();
  }

  public get currentUserToken(): IUser{
    const rawToken = localStorage.getItem('token');
    if (rawToken ){
        return this.jwtHelperService.decodeToken(rawToken) as IUser;
    } else{
        return null;
    }
  }
}
