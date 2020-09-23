import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticateService } from './authenticate.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor( private router: Router,
                 private authenticateService: AuthenticateService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLoggedIn = this.authenticateService.isLogedin();
        console.log(` is LoggedIn ${isLoggedIn}`);
        if (isLoggedIn) {
            console.log(` is LoggedIn TRUE`);
            return true;
        }
        else{
            console.log(` is LoggedIn FALSE`);
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}
