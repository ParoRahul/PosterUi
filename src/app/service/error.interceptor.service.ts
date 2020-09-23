import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticateService } from '../authentication/service/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse ) => {
          if (error.status === 401) {
              if (! request.headers.has('skip')){
                    console.log('cactched Error');
                    this.authenticationService.logout();
                    location.reload();
              } else {
                    return throwError(error);
              }
          }
          return throwError(error);
          // return EMPTY;
        })
    );
  }
}
