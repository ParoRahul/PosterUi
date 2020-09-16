import { Component, OnInit/* , Output, EventEmitter */ } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activatelink: string;

  /* @Output() logIntriggered = new EventEmitter(); */

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.activatelink = 'home';
  }

  scheduleAppLogin(){
    this.route.navigate(['/login']);
  }

  /* onLogin(Event: MouseEventInit){
    this.logIntriggered.emit();
  } */


}
