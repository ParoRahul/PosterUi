import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './component/login/login.component';
import { AuthenticateService } from './service/authenticate.service';

import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            JwtModule.forRoot({
              config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['http://192.168.0.104:3000'],
                disallowedRoutes: ['http://192.168.0.104:3000/auth/login/'],
              }
            })
  ],
  providers: [AuthenticateService, JwtHelperService ]
})
export class AuthenticationModule { }
