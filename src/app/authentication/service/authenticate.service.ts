import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

import { ICredentials } from '../model/credentials.model';

import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private authenticateUrl: string;

  constructor(private httpConnection: HttpClient, private jwtHelperService: JwtHelperService ) {
    this.authenticateUrl = '/api/authentication';
  }

  public login(credetilals: ICredentials ): Observable<boolean>{
    return this.httpConnection.post(this.authenticateUrl, JSON.stringify(credetilals))
    .pipe(
      map((response: any) => {
        console.log(response.json());
        const result = response.json() ;
        if ( result && result.token ) {
              localStorage.setItem('token', result.token );
              return true;
        } else {
              return false;
        }
      })
    );
  }

  public logout(){
    localStorage.removeItem('token');
  }

  public isLogedin(): boolean {
    /* const jwtHelper = new JwtHelperService();
    const rawToken = localStorage.getItem('token');
    if (!rawToken){
      return false;
    }
    const expairyDate = jwtHelper.getTokenExpirationDate(rawToken);
    const isExpired = jwtHelper.isTokenExpired(rawToken);
    return isExpired; */
    return this.jwtHelperService.isTokenExpired();
  }

  public getCurrentUser(): IUser{
    const rawToken = localStorage.getItem('token');
    if (!rawToken ) { return null; }
    return this.jwtHelperService.decodeToken(rawToken) as IUser;
  }

}
