import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  public navbarOpen = false;
  public activatelink: string;

  constructor(private route: Router,
              public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.activatelink = 'home';
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  scheduleAppLogin(){
    this.route.navigate(['/login']);
    this.navbarService.hide();
  }

  nevigate2Home(){
    this.activatelink = 'home';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link1(){
    this.activatelink = 'link1';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link2(){
    this.activatelink = 'link2';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link3(){
    this.activatelink = 'link3';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link4(){
    this.activatelink = 'link4';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link5(){
    this.activatelink = 'link5';
    this.navbarOpen = !this.navbarOpen;
  }

  nevigate2link6(){
    this.activatelink = 'link6';
    this.navbarOpen = !this.navbarOpen;
  }


}
