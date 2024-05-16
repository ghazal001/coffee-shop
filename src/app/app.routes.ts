import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
// import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [


  { path: '../signup', component: SignupComponent },
  { path: '../home', component: HomeComponent },


];
