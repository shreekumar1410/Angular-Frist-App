import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';
import { Day2Component } from './day2/day2.component';
import { DemopipePipe } from './demopipe.pipe';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductAddComponent } from './product-page/product-add/product-add.component';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    Day2Component,
    DemopipePipe,
    ProfilePageComponent,
    LoginPageComponent,
    AboutComponent,
    ProductPageComponent,
    ProductAddComponent,
    ProductListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
