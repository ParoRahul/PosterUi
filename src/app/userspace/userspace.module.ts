import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/userhome/home.component';
import { ShorthistotyComponent } from './component/shorthistoty/shorthistoty.component';
import { AddprojectsComponent } from './component/addprojects/addprojects.component';
import { LeftareaComponent } from './component/leftarea/leftarea.component';
import { AvaterService } from './service/avater.service';

@NgModule({
  declarations: [ HomeComponent,
                  ShorthistotyComponent,
                  AddprojectsComponent,
                  LeftareaComponent
                ],
  imports: [
    CommonModule
  ],
  providers: [ AvaterService ]
})
export class UserspaceModule { }
