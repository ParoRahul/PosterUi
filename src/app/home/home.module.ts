import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HompageDataService } from './service/hompage-data.service';
import { FooterComponent } from './component/footer/footer.component';
/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

@NgModule({
  declarations: [ HomeComponent, NavbarComponent, FooterComponent ],
  imports: [ CommonModule, RouterModule, /* FontAwesomeModule */  ],
  exports: [ HomeComponent, NavbarComponent ],
  providers: [HompageDataService]
})
export class HomeModule { }
