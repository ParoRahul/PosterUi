import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  homeNavgitionActive: boolean;

  constructor() {
    this.visible = true;
    this.homeNavgitionActive = true;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  acivateHomeNavigation(){
    this.homeNavgitionActive = true;
  }

  deacivateHomeNavigation(){
    this.homeNavgitionActive = false;
  }

  toggleHomeNavigation(){
    this.homeNavgitionActive = !this.toggleHomeNavigation;
  }

}
