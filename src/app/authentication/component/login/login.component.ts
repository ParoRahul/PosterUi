import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../../service/authenticate.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public validLogin: boolean;

  constructor(private service: AuthenticateService,
              private route: Router,
              private navbarService: NavbarService ){
    this.validLogin = true;
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  ngOnInit() {
    this.navbarService.hide();
    this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
    });
  }

  route2Home(){
    this.route.navigate(['']);
  }

  login(){
    console.log(this.form.value);
    this.route.navigate(['/home']);
    /* this.service.login(this.form.value)
    .subscribe( result => {
      if (result){
          console.log(result);
          this.route.navigate(['/userhome']);
      }
      else{
        this.validLogin = false;
        console.log(result);
      }
    }); */
  }

}
