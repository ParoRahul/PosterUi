import { ElementRef, HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authentication/service/authenticate.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @ViewChild('dropdownitems', { static: false }) element: ElementRef;

  public activatelink: string;

  public navbarOpen = false;

  public showDropdown = false;

  public clicked = false;

  constructor(private route: Router,
              public navbarService: NavbarService,
              private authService: AuthenticateService) { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  showDropDoen(event){
    event.preventDefault();
    event.stopPropagation();
    this.element.nativeElement.classList.toggle('show');
    this.clicked = true;
  }

  @HostListener('document:click', ['event'])
  private clickedOutside(event): void {
    if (this.clicked && !this.navbarService.homeNavgitionActive) {
        this.element.nativeElement.classList.toggle('show');
        this.clicked = false;
    }
  }

  signOut(){
    this.authService.logout();
    this.route.navigate(['/']);
  }


}
