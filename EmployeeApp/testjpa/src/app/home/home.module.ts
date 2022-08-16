import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const routes:Routes=[
]

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomePageComponent,
  ]
})
export class HomeModule { }
