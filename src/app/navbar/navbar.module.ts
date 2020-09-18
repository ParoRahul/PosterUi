import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarService } from './service/navbar.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  providers: [ NavbarService ],
  exports: [ NavbarComponent ],
})
export class NavbarModule { }
