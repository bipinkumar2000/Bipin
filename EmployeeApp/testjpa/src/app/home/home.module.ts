import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeeComponent } from './home-page/add-employee/add-employee.component';
import { Routes } from '@angular/router';



const routes:Routes=[
  {path:'addEmployee',component:AddEmployeeComponent}
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
