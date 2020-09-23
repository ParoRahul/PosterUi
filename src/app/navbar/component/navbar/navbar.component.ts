import { Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authentication/service/authenticate.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('dropdownitems', { static: false }) element: ElementRef;

  public activatelink: string;

  public navbarOpen = false;

  public showDropdown = false;

  public clicked = false;

  constructor(private route: Router,
              public navbarService: NavbarService,
              private authService: AuthenticateService ) { }

  ngOnInit(): void {
    this.activatelink = 'home';
  }

  scheduleAppLogin(){
    this.route.navigate(['/login']);
    this.navbarService.hide();
  }

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
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
