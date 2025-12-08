import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { Day2Component } from './day2/day2.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component: ProfilePageComponent},
  {path:'sample',component: Day2Component},
  {path:'about/:samplenamez',component: AboutComponent},
  {path:'profile',component: ProfilePageComponent},
  {path:'login',component: LoginPageComponent},
  {path:'register',component: RegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
