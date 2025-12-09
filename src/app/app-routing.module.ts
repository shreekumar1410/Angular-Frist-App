import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { Day2Component } from './day2/day2.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path:'',component: ProfilePageComponent},
  {path:'sample',component: Day2Component},
  {path:'about/:samplenamez',component: AboutComponent},
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },
  {path:'login',component: LoginPageComponent},
  {path:'register',component: RegistrationPageComponent},
  { path: 'products', component: ProductPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
