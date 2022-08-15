import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { Router, Routes } from '@angular/router';



const routes:Routes=[
  // {path:'/addEmployee' children:[AddEmployeeComponent]}
]

@NgModule({
  declarations: [
    HomePageComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    AddEmployeeComponent
  ]
})
export class HomeModule { }
