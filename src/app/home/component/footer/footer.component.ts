import { Component, OnInit } from '@angular/core';

/* import { library } from '@fortawesome/fontawesome-svg-core'; */
/* import { faAngular, faLinkedinIn, faTwitter, faFacebook, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /* linkedin = faLinkedinIn;
  facebook = faFacebook;
  twitter = faTwitter;
  github = faGithub;
  angular = faAngular;
  bootstrap = faBootstrap;
 */
  constructor() {
    /* library.add(fab, faLinkedinIn); */
  }

  ngOnInit(): void {
  }

}
