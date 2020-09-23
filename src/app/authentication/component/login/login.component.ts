import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../../service/authenticate.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  AfterViewInit , OnDestroy {

  public form: FormGroup;
  public validLogin: boolean;

  private loginStatusSubscription: any;

  constructor(private service: AuthenticateService,
              private route: Router,
              private navbarService: NavbarService ){
    this.validLogin = true;
    this.form = new FormGroup({
          mailid: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required)
    });
  }

  get mailid(){
    return this.form.get('mailid');
  }

  get password(){
    return this.form.get('password');
  }

  ngAfterViewInit() {
    this.navbarService.hide();
    this.loginStatusSubscription = this.service.validUserObserver
    .subscribe( (status: boolean) => {
        if (! status) {
            this.form.setErrors({validLogin: false });
        }
    });
  }

  ngOnDestroy() { this.loginStatusSubscription.unsubscribe(); }

  route2Home() { this.route.navigate(['']); }

  login() {
    this.service.login(this.form.value);
  }

}
