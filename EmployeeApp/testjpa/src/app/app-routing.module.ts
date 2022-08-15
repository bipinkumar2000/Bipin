import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './home/home-page/add-employee/add-employee.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'addEmployee',component:AddEmployeeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
