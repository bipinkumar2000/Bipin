import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { Employee } from 'src/app/Models/Employee';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  EmployeeList:Employee[]=[];
  closeResult = '';
  Employee:Employee=new Employee();

  constructor(private homeservice:HomeServiceService,private modalService: NgbModal) { }

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
    this.homeservice.postEmployeeData(this.Employee).subscribe(data=>{
      console.log(data);
      alert("succcessfully added Employee");
    });
     
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
}
