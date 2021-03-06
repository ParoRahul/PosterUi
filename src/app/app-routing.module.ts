import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/component/home/home.component';
import { LoginComponent } from './authentication/component/login/login.component';
import { HomeComponent as UserhomeComponent } from './userspace/component/userhome/home.component';
import { AuthGuard } from './authentication/service/authguard.service';

const routes: Routes = [{path: '', component: HomeComponent },
                        {path: 'login', component: LoginComponent},
                        {path: 'home', component: UserhomeComponent, canActivate: [AuthGuard] } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
