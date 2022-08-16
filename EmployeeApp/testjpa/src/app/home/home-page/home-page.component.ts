import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { Employee } from 'src/app/Models/Employee';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  EmployeeList:Employee[]=[];
  closeResult = '';

  constructor(private homeservice:HomeServiceService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getEmployeesData();
  }


  getEmployeesData(){
    this.homeservice.getEmployeesData().subscribe(data=>{
      console.log(data);
      this.EmployeeList=data;
    })
  }

  addEmployee(){
    console.log("welcome to add Employee function");
     this.router.navigateByUrl("addEmployee");
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
