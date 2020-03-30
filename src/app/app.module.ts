import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { SubmitComponent } from './pages/supplier/submit.component';
import { ProductComponent } from './pages/product/product.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { NeedComponent } from './pages/need/need.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductinfoComponent } from './pages/productinfo/productinfo.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HospitalpageComponent } from './pages/hospitalpage/hospitalpage.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubmitComponent,
    ProductComponent,
    HospitalComponent,
    NeedComponent,
    ProductlistComponent,
    ProductinfoComponent,
    WelcomeComponent,
    HospitalpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
