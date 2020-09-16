import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './component/login/login.component';
import { AuthenticateService } from './service/authenticate.service';

import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [LoginComponent],
  imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            JwtModule.forRoot({
              config: {
                tokenGetter: () => localStorage.getItem('token')
              }
            })
  ],
  providers: [AuthenticateService, JwtHelperService ]
})
export class AuthenticationModule { }
