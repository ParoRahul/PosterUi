import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserspaceModule } from './userspace/userspace.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NavbarModule,
    HomeModule,
    AuthenticationModule,
    UserspaceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
