import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../navbar/service/navbar.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navService: NavbarService) { }

  ngOnInit(): void {
    this.navService.show();
    this.navService.deacivateHomeNavigation();
  }

}
