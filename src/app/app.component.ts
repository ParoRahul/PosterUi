import { Component, ViewChild } from '@angular/core';

import { HomeComponent } from './home/component/home/home.component';
import { NavbarComponent } from './navbar/component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PosterUi';

  @ViewChild(HomeComponent, {static: true}) homeComponent;

  @ViewChild(NavbarComponent, {static: true}) navbarComponent;

}
