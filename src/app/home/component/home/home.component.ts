import { Component, OnInit } from '@angular/core';

import { NavbarService } from '../../../navbar/service/navbar.service';

import { HompageDataService } from '../../service/hompage-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public headingText: string;

  constructor(  public service: HompageDataService,
                private navService: NavbarService ) { }

  ngOnInit(): void {
    this.navService.show();
    this.navService.acivateHomeNavigation();
    this.headingText = 'Transform your Papar into Scientific Poster';
  }

}
