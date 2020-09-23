import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarService } from './service/navbar.service';
import { Navbar1Component } from './component/navbar1/navbar1.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';

@NgModule({
  declarations: [NavbarComponent, Navbar1Component, Navbar2Component],
  imports: [
    CommonModule
  ],
  providers: [ NavbarService ],
  exports: [ NavbarComponent, Navbar1Component, Navbar2Component ],
})
export class NavbarModule { }
